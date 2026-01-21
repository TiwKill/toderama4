"use client";
import { useState } from "react";
import { BuddhaAmulet } from "@/data/amulets";
import {
    Header,
    Footer,
    HeroSection,
    WelcomeSection,
    AmuletGallery,
    ArticleSection,
    AboutSection,
    LPPhatBiography,
    ServicesSection,
    YouTubeSection,
    SocialSection,
    AmuletModal,
    PDFModal,
    PawnCTASection,
} from "@/components";

export default function Home() {
    const [selectedAmulet, setSelectedAmulet] = useState<BuddhaAmulet | null>(null);
    const [isPDFOpen, setIsPDFOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#0D0D0D] flex flex-col overflow-x-hidden">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-1">
                {/* Hero Section */}
                <HeroSection />

                {/* Welcome / Intro Section */}
                <WelcomeSection />

                {/* Pawn CTA Section - Mobile Focused */}
                <PawnCTASection />

                {/* 16 Buddha Amulet Gallery (with show more/less on mobile) */}
                <AmuletGallery onAmuletClick={setSelectedAmulet} />

                {/* บทความ พัฒน์ประเทืองทรัพย์ */}
                <ArticleSection />

                {/* About Toderama4 */}
                <AboutSection onPDFClick={() => setIsPDFOpen(true)} />

                {/* Luang Phor Phat Biography */}
                <LPPhatBiography />

                {/* Services */}
                <ServicesSection />

                {/* YouTube Shorts & Grid */}
                <YouTubeSection />

                {/* Social Media */}
                <SocialSection />
            </main>

            {/* Footer */}
            <Footer />

            {/* Modals */}
            <AmuletModal 
                amulet={selectedAmulet} 
                onClose={() => setSelectedAmulet(null)} 
            />
            <PDFModal 
                isOpen={isPDFOpen} 
                onClose={() => setIsPDFOpen(false)} 
            />
        </div>
    );
}