import { NextResponse } from "next/server";

const buildSections = (body: any, apiData: any) => {
  const { birthDate, birthTime, latitude, longitude } = body || {};
  return {
    sections: [
      {
        id: "birth",
        title: "Birth Details",
        content: {
          name: body?.name,
          gender: body?.gender,
          birthDate,
          birthTime,
          birthPlace: body?.birthPlace,
          latitude,
          longitude,
        },
      },
      {
        id: "kundali",
        title: "Kundali Data",
        content: apiData,
      },
    ],
  };
};

const getEnv = () => {
  const baseUrl = process.env.KUNDALI_API_BASE_URL;
  const endpointPath = process.env.KUNDALI_API_PATH;
  const clientId = process.env.KUNDALI_CLIENT_ID;
  const clientSecret = process.env.KUNDALI_CLIENT_SECRET;
  const tokenUrl = process.env.KUNDALI_TOKEN_URL;
  return { baseUrl, endpointPath, clientId, clientSecret, tokenUrl };
};

const mapLanguage = (lang?: string) => {
  if (lang === "hi") return "hi";
  return "en";
};

const buildParams = (birthDate: string, birthTime: string, latitude: string, longitude: string, language?: string) => {
  const tz = "+05:30";
  const la = mapLanguage(language);
  return new URLSearchParams({
    ayanamsa: "1",
    coordinates: `${latitude},${longitude}`,
    datetime: `${birthDate}T${birthTime}${tz}`,
    la,
  });
};
const getToken = async () => {
  const { clientId, clientSecret, tokenUrl } = getEnv();
  if (!clientId || !clientSecret || !tokenUrl) return null;
  const tokenRes = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });
  if (!tokenRes.ok) return null;
  const tokenData = await tokenRes.json();
  return tokenData?.access_token as string | undefined;
};

export async function POST(request: Request) {
  const body = await request.json();

  const { baseUrl, endpointPath, clientId, clientSecret, tokenUrl } = getEnv();

  if (!baseUrl || !endpointPath || !clientId || !clientSecret || !tokenUrl) {
    return NextResponse.json({
      sections: [
        {
          id: "birth",
          title: "Birth Details",
          content: {
            name: body.name,
            gender: body.gender,
            birthDate: body.birthDate,
            birthTime: body.birthTime,
            birthPlace: body.birthPlace,
          },
        },
        { id: "charts", title: "D1–D60 Charts", content: "Pending API data" },
        { id: "dosha", title: "Dosha", content: "Pending API data" },
        {
          id: "planets",
          title: "Planet Positions",
          content: "Pending API data",
        },
        {
          id: "predictions",
          title: "Predictions",
          content: "Pending API data",
        },
        { id: "remedies", title: "Remedies", content: "Pending API data" },
        { id: "pdf", title: "PDF Report", content: "Pending API data" },
      ],
    });
  }

  const accessToken = await getToken();
  if (!accessToken) {
    return NextResponse.json({ error: "Access token missing" }, { status: 500 });
  }

  const { birthDate, birthTime, latitude, longitude, language } = body || {};
  if (!birthDate || !birthTime || !latitude || !longitude) {
    return NextResponse.json(
      { error: "Missing birthDate, birthTime, latitude, or longitude" },
      { status: 400 }
    );
  }

  const params = buildParams(birthDate, birthTime, latitude, longitude, language);

  const apiRes = await fetch(`${baseUrl}${endpointPath}?${params.toString()}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
    },
  });

  if (!apiRes.ok) {
    const text = await apiRes.text();
    return NextResponse.json(
      { error: "API request failed", details: text },
      { status: apiRes.status }
    );
  }

  const apiData = await apiRes.json();
  return NextResponse.json(buildSections(body, apiData));
}

export async function GET(request: Request) {
  const { baseUrl, endpointPath, clientId, clientSecret, tokenUrl } = getEnv();
  if (!baseUrl || !endpointPath || !clientId || !clientSecret || !tokenUrl) {
    return NextResponse.json(
      { error: "Missing API configuration" },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(request.url);
  const birthDate = searchParams.get("birthDate") || "";
  const birthTime = searchParams.get("birthTime") || "";
  const latitude = searchParams.get("latitude") || "";
  const longitude = searchParams.get("longitude") || "";
  const name = searchParams.get("name") || "";
  const gender = searchParams.get("gender") || "";
  const birthPlace = searchParams.get("birthPlace") || "";
  const language = searchParams.get("language") || "";

  if (!birthDate || !birthTime || !latitude || !longitude) {
    return NextResponse.json(
      { error: "Missing birthDate, birthTime, latitude, or longitude" },
      { status: 400 }
    );
  }

  const accessToken = await getToken();
  if (!accessToken) {
    return NextResponse.json({ error: "Access token missing" }, { status: 500 });
  }

  const params = buildParams(birthDate, birthTime, latitude, longitude, language);

  const apiRes = await fetch(`${baseUrl}${endpointPath}?${params.toString()}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
    },
  });

  if (!apiRes.ok) {
    const text = await apiRes.text();
    return NextResponse.json(
      { error: "API request failed", details: text },
      { status: apiRes.status }
    );
  }

  const apiData = await apiRes.json();
  return NextResponse.json(
    buildSections(
      { name, gender, birthPlace, birthDate, birthTime, latitude, longitude },
      apiData
    )
  );
}
