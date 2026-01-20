import Image from "next/image";
import { contactInfo } from "@/data/amulets";

export default function HeroSection() {
    return (
        <section className="w-full relative overflow-hidden">
            {/* Mobile: Full width banner without crop */}
            <div className="block md:hidden relative w-full bg-[#0D0D0D]">
                <Image
                    src="/banner.jpg"
                    alt="โต๊ดพระราม4 Banner"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                    priority
                />
                {/* Dark overlay for mobile - make it darker over the whole image */}
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/80 via-transparent to-[#0D0D0D]/90" />
                
                {/* Mobile content overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                    <div className="mb-2 text-[#D4AF37] text-xs tracking-[0.2em] uppercase">
                        ผู้เชี่ยวชาญสายหลวงพ่อพัฒน์
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                        <span className="text-gold-gradient">โต๊ดพระราม4</span>
                    </h1>
                    <h2 className="text-sm sm:text-base text-gray-300 mb-4 font-light">
                        รับเช่าพระเครื่อง • พระบูชา • เครื่องราง
                    </h2>

                    <a href={contactInfo.lineUrl} target="_blank" rel="noopener noreferrer"
                        className="group flex items-center gap-2 bg-gradient-to-r from-[#00B900] to-[#00A000] text-white px-5 py-2.5 rounded-xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 border-2 border-white/20">
                        <div className="text-lg font-bold">LINE</div>
                        <div className="h-6 w-px bg-white/30" />
                        <div className="text-left">
                            <div className="text-[9px] opacity-80">คลิกเพื่อติดต่อ</div>
                            <div className="text-xs font-bold">{contactInfo.lineId}</div>
                        </div>
                    </a>

                    <p className="mt-3 text-[#D4AF37]/80 text-xs">
                        ส่งรูปพระมาประเมินราคาฟรี • จ่ายเงินสดทันที
                    </p>
                </div>
            </div>

            {/* Desktop/Tablet: Original layout with fixed height */}
            <div className="hidden md:block relative h-[600px] lg:h-[700px]">
                {/* Background with overlay */}
                <div className="absolute inset-0 bg-[url('/banner.jpg')] bg-cover bg-center" />
                {/* Dark overlay for desktop to ensure text readability */}
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/70 via-[#0D0D0D]/40 to-[#0D0D0D]" />

                {/* Decorative gold lines */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
                    <div className="mb-4 text-[#D4AF37] text-base tracking-[0.3em] uppercase">
                        ผู้เชี่ยวชาญสายหลวงพ่อพัฒน์
                    </div>
                    <h1 className="text-6xl lg:text-7xl font-bold mb-4">
                        <span className="text-gold-gradient">โต๊ดพระราม4</span>
                    </h1>
                    <h2 className="text-xl lg:text-2xl text-gray-300 mb-10 font-light">
                        รับเช่าพระเครื่อง • พระบูชา • เครื่องราง
                    </h2>

                    <a href={contactInfo.lineUrl} target="_blank" rel="noopener noreferrer"
                        className="group flex items-center gap-4 bg-gradient-to-r from-[#00B900] to-[#00A000] text-white px-8 py-4 rounded-2xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105 border-2 border-white/20">
                        <div className="text-3xl font-bold">LINE</div>
                        <div className="h-10 w-px bg-white/30" />
                        <div className="text-left">
                            <div className="text-xs opacity-80">คลิกเพื่อติดต่อ</div>
                            <div className="text-lg font-bold">{contactInfo.lineId}</div>
                        </div>
                    </a>

                    <p className="mt-6 text-[#D4AF37]/80 text-sm">
                        ส่งรูปพระมาประเมินราคาฟรี • จ่ายเงินสดทันที
                    </p>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0D0D0D] to-transparent" />
            </div>

            {/* Decorative gold line for mobile */}
            <div className="md:hidden absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </section>
    );
}
