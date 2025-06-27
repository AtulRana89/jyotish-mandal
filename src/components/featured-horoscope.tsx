"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const zodiacSigns = [
    { name: "Aries", date: "Mar 21 - Apr 19", symbol: "♈" },
    { name: "Taurus", date: "Apr 20 - May 20", symbol: "♉" },
    { name: "Gemini", date: "May 21 - Jun 20", symbol: "♊" },
    { name: "Cancer", date: "Jun 21 - Jul 22", symbol: "♋" },
    { name: "Leo", date: "Jul 23 - Aug 22", symbol: "♌" },
    { name: "Virgo", date: "Aug 23 - Sep 22", symbol: "♍" },
    { name: "Libra", date: "Sep 23 - Oct 22", symbol: "♎" },
    { name: "Scorpio", date: "Oct 23 - Nov 21", symbol: "♏" },
    { name: "Sagittarius", date: "Nov 22 - Dec 21", symbol: "♐" },
    { name: "Capricorn", date: "Dec 22 - Jan 19", symbol: "♑" },
    { name: "Aquarius", date: "Jan 20 - Feb 18", symbol: "♒" },
    { name: "Pisces", date: "Feb 19 - Mar 20", symbol: "♓" },
];

// Sample horoscope data
const horoscopeData = {
    daily: {
        Aries: "Today's celestial alignment brings a surge of energy and motivation. It's an excellent day to start new projects or take the initiative in important matters. Your confidence is high, making it easier to overcome obstacles.",
        Taurus: "Stability and financial matters take center stage today. You might receive good news about investments or resources. Take time to review your budget and financial plans, as insights will be particularly clear.",
        Gemini: "Communication flows smoothly today, making it ideal for important conversations or presentations. Your words carry extra weight, so use them wisely. A message from an old friend might surprise you.",
        Cancer: "Emotional connections deepen today as the Moon enhances your intuitive abilities. Family matters may require your attention, but the outcomes will be positive. Trust your instincts in all interactions.",
        Leo: "Your creative energies are at their peak today. Any artistic or leadership endeavors will benefit from your passionate approach. Recognition for past efforts may come unexpectedly.",
        Virgo: "Details matter more than usual today. Your analytical skills are sharp, making it an excellent time for problem-solving or organizing. Health improvements can be made through small, consistent changes.",
        Libra: "Harmony in relationships is highlighted today. Negotiations and compromises go smoothly, and you'll find it easier to understand others' perspectives. A balanced approach leads to the best outcomes.",
        Scorpio: "Transformative energies surround you today. Something that has been hidden may come to light, bringing clarification. Financial matters show improvement through joint resources or shared investments.",
        Sagittarius: "Adventure calls today, whether through travel, learning, or philosophical exploration. Your optimism inspires others, and opportunities for growth appear when you remain open-minded.",
        Capricorn: "Professional matters gain positive momentum today. Your disciplined approach earns recognition from superiors or clients. Long-term goals become clearer, allowing for more effective planning.",
        Aquarius: "Innovative ideas flow freely today. Social connections bring unexpected opportunities, particularly in group projects or community initiatives. Technology plays a beneficial role in your activities.",
        Pisces: "Spiritual insights and intuitive guidance are strong today. Creative projects benefit from your imaginative approach. Pay attention to dreams and subtle signs that point toward your true path.",
    },
    weekly: {
        Aries: "This week brings opportunities for advancement in career matters. Your natural leadership abilities shine, particularly midweek when Mars forms a favorable aspect. Watch for impulsive decisions on Friday; taking a moment to reflect will serve you better in the long run.",
        Taurus: "Financial stability improves this week as Venus enhances your resource sector. A practical approach to a persistent problem yields results by Thursday. Relationships with family members strengthen through honest communication over the weekend.",
        Gemini: "Multiple opportunities for networking present themselves this week. Your communication skills are particularly sharp on Tuesday and Wednesday. An intellectual challenge over the weekend stimulates new ideas and potential collaborations.",
        Cancer: "Emotional clarity arrives early in the week, helping you navigate a complex relationship situation. Home improvements or family planning goes smoothly with lunar support. By Sunday, a creative breakthrough provides a new direction.",
        Leo: "Your charisma is at its peak this week, making it ideal for presentations or performances. A financial matter requires attention by Thursday, but the outcome looks positive. Romance heats up over the weekend with a special encounter or deeper connection.",
        Virgo: "Detailed work and analysis yield impressive results this week. Health matters show improvement through a methodical approach. The weekend brings an opportunity to organize or restructure something important in your living environment.",
        Libra: "Partnership matters take center stage this week. A balanced approach to a disagreement leads to a stronger connection by Wednesday. Creative pursuits flourish over the weekend, especially those involving beauty or harmony.",
        Scorpio: "Transformative energies dominate this week as Pluto activates your sector of personal growth. Financial matters improve through strategic planning. Intimate relationships deepen through meaningful conversations over the weekend.",
        Sagittarius: "Adventure and expansion highlight your week, with travel or educational opportunities appearing by Thursday. Your philosophical outlook inspires others, creating new connections. The weekend brings clarity to a long-term goal or vision.",
        Capricorn: "Professional recognition may arrive this week through your consistent efforts. Structured planning yields substantial results by Friday. Family responsibilities find better balance over the weekend as Saturn's influence eases.",
        Aquarius: "Innovative solutions to ongoing problems emerge this week. Group projects or community initiatives gain momentum by Wednesday. Technological advancements or scientific interests provide stimulation and new perspectives over the weekend.",
        Pisces: "Spiritual insights and intuitive guidance flow strongly this week. Creative projects receive favorable energy, especially those involving music or visual arts. By the weekend, an emotional revelation brings healing to an old wound.",
    },
    monthly: {
        Aries: "This month brings significant forward momentum in professional endeavors. The New Moon on the 10th activates your career sector, making it ideal for setting ambitious goals. Relationship matters require patience mid-month, but clear communication prevents misunderstandings. Financial improvements come through disciplined management and possibly a new income source by month's end.",
        Taurus: "Stability and growth in material resources characterize your month. Venus enhances your financial sector until the 22nd, bringing opportunities for increased income or valuable acquisitions. Relationships deepen through shared values and honest discussions. Health improvements come through establishing consistent routines, particularly around the Full Moon on the 25th.",
        Gemini: "Communication and intellectual pursuits flourish this month. Multiple opportunities for learning or teaching appear, especially after Mercury goes direct on the 15th. Short trips or local connections prove valuable for personal and professional growth. Relationship dynamics shift positively after the 20th, bringing clarity to previous misunderstandings.",
        Cancer: "Emotional clarity and domestic harmony highlight your month. The lunar energies support home improvements or family healing, particularly around the Full Moon on the 25th. Career matters require a balanced approach between ambition and self-care. Financial planning benefits from intuitive insights and practical research.",
        Leo: "Creative expression and romantic connections take center stage this month. The Sun in your sector of self-expression until the 22nd enhances your natural charisma and artistic abilities. Leadership opportunities arise through group activities or community involvement. Financial matters improve through collaborative efforts rather than solo ventures.",
        Virgo: "Detailed analysis and practical improvements dominate your month. Health matters respond well to methodical approaches, especially around diet and daily routines. Professional recognition comes through meticulous work and problem-solving abilities. Relationship matters benefit from clear communication about expectations and boundaries.",
        Libra: "Harmony in relationships and aesthetic pursuits highlight your month. Venus supports your natural diplomatic abilities, making it an excellent time for negotiations or mediations. Financial partnerships require careful evaluation, but can lead to mutual benefits. Creative inspirations flow freely, especially in collaborative projects.",
        Scorpio: "Transformation and regeneration characterize your month. Deep insights into personal patterns allow for significant growth and healing. Financial matters improve through strategic investments or shared resources. Intimate relationships deepen through honest conversations about needs and vulnerabilities.",
        Sagittarius: "Expansion and adventure define your month. Travel opportunities or educational pursuits bring new perspectives and potential growth. Relationship matters benefit from philosophical discussions and shared visions. Career advancements come through optimistic approaches to challenges and willingness to explore new territories.",
        Capricorn: "Professional achievements and structured progress highlight your month. Saturn's influence supports disciplined approaches to long-term goals, with tangible results by month's end. Family responsibilities find better balance through clear boundaries and delegated tasks. Financial planning benefits from conservative approaches and careful research.",
        Aquarius: "Innovation and social connections characterize your month. Group projects and community initiatives receive favorable energy, allowing your unique perspective to shine. Technological advancements or scientific interests provide stimulation and new opportunities. Friendships deepen through shared ideals and humanitarian concerns.",
        Pisces: "Spiritual growth and creative inspiration define your month. Intuitive insights guide personal decisions, especially around career direction. Artistic pursuits flourish with Neptune's influence enhancing your imagination. Relationships benefit from compassionate understanding and emotional authenticity.",
    },
};

export default function FeaturedHoroscope() {
    const [selectedSign, setSelectedSign] = useState("Aries");

    return (
        <Tabs defaultValue="daily" className="w-full">
            <div className="flex justify-center mb-6">
                <TabsList className="grid grid-cols-3">
                    <TabsTrigger value="daily">Daily</TabsTrigger>
                    <TabsTrigger value="weekly">Weekly</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                </TabsList>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-4 lg:col-span-3">
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-1 gap-3">
                        {zodiacSigns.map((sign) => (
                            <button
                                key={sign.name}
                                className={cn(
                                    "flex flex-col items-center justify-center p-3 rounded-lg transition-all",
                                    selectedSign === sign.name
                                        ? "bg-primary/20 border border-primary/30"
                                        : "hover:bg-secondary/50"
                                )}
                                onClick={() => setSelectedSign(sign.name)}
                            >
                                <span className="text-2xl">{sign.symbol}</span>
                                <span className="font-medium mt-1">{sign.name}</span>
                                <span className="text-xs text-muted-foreground mt-1 hidden md:inline-block">
                                    {sign.date}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="md:col-span-8 lg:col-span-9">
                    <TabsContent value="daily" className="mt-0">
                        <HoroscopeCard
                            sign={selectedSign}
                            content={horoscopeData.daily[selectedSign as keyof typeof horoscopeData.daily]}
                            type="Daily"
                        />
                    </TabsContent>

                    <TabsContent value="weekly" className="mt-0">
                        <HoroscopeCard
                            sign={selectedSign}
                            content={horoscopeData.weekly[selectedSign as keyof typeof horoscopeData.weekly]}
                            type="Weekly"
                        />
                    </TabsContent>

                    <TabsContent value="monthly" className="mt-0">
                        <HoroscopeCard
                            sign={selectedSign}
                            content={horoscopeData.monthly[selectedSign as keyof typeof horoscopeData.monthly]}
                            type="Monthly"
                        />
                    </TabsContent>
                </div>
            </div>
        </Tabs>
    );
}

function HoroscopeCard({ sign, content, type }: { sign: string; content: string; type: string }) {
    const zodiacSign = zodiacSigns.find((s) => s.name === sign);

    return (
        <Card className="cosmic-card">
            <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
                    <div>
                        <h3 className="text-2xl font-bold flex items-center">
                            <span className="mr-2 text-3xl">{zodiacSign?.symbol}</span>
                            {sign}
                        </h3>
                        <p className="text-sm text-muted-foreground">{zodiacSign?.date}</p>
                    </div>
                    <div className="bg-secondary/30 px-3 py-1 rounded-full text-sm font-medium">
                        {type} Horoscope • {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                </div>

                <p className="text-lg mb-6">{content}</p>

                <Link
                    href={`/horoscopes/${sign.toLowerCase()}`}
                    className="inline-flex items-center text-primary font-medium group"
                >
                    Read full {type.toLowerCase()} horoscope
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </CardContent>
        </Card>
    );
}