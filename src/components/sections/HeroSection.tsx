import Image from "next/image";
import { contactInfo } from "@/data/amulets";

export default function HeroSection() {
    return (
        <section className="w-full relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-[url('/banner.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/70 via-[#0D0D0D]/50 to-[#0D0D0D]" />

            {/* Decorative gold lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
                <div className="mb-3 md:mb-4 text-[#D4AF37] text-xs sm:text-sm md:text-base tracking-[0.2em] md:tracking-[0.3em] uppercase">
                    ผู้เชี่ยวชาญสายหลวงพ่อพัฒน์
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4">
                    <span className="text-gold-gradient">โต๊ดพระราม4</span>
                </h1>
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-10 font-light">
                    รับเช่าพระเครื่อง • พระบูชา • เครื่องราง
                </h2>

                <a href={contactInfo.lineUrl} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-3 md:gap-4 bg-gradient-to-r from-[#00B900] to-[#00A000] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105 border-2 border-white/20">
                    <div className="text-xl md:text-3xl font-bold">LINE</div>
                    <div className="h-8 md:h-10 w-px bg-white/30" />
                    <div className="text-left">
                        <div className="text-[10px] md:text-xs opacity-80">คลิกเพื่อติดต่อ</div>
                        <div className="text-sm md:text-lg font-bold">{contactInfo.lineId}</div>
                    </div>
                </a>

                <p className="mt-4 md:mt-6 text-[#D4AF37]/80 text-xs md:text-sm">
                    ส่งรูปพระมาประเมินราคาฟรี • จ่ายเงินสดทันที
                </p>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-[#0D0D0D] to-transparent" />
        </section>
    );
}
