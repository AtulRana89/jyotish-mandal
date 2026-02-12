import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const baseUrl = process.env.KUNDALI_API_BASE_URL;
  const endpointPath = process.env.KUNDALI_API_PATH;
  const clientId = process.env.KUNDALI_CLIENT_ID;
  const clientSecret = process.env.KUNDALI_CLIENT_SECRET;
  const tokenUrl = process.env.KUNDALI_TOKEN_URL;

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

  const tokenRes = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });

  if (!tokenRes.ok) {
    return NextResponse.json({ error: "Token request failed" }, { status: 500 });
  }

  const tokenData = await tokenRes.json();
  const accessToken = tokenData?.access_token;

  if (!accessToken) {
    return NextResponse.json({ error: "Access token missing" }, { status: 500 });
  }

  const apiRes = await fetch(`${baseUrl}${endpointPath}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(body),
  });

  if (!apiRes.ok) {
    return NextResponse.json({ error: "API request failed" }, { status: 500 });
  }

  const apiData = await apiRes.json();
  return NextResponse.json(apiData);
}
