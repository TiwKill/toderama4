import Image from "next/image";
import { contactInfo } from "@/data/amulets";

export default function HeroSection() {
    return (
        <section className="w-full relative overflow-hidden bg-[#050505]">
            {/* Sacred Pattern Background (Global) */}
            <div className="absolute inset-0 sacred-pattern opacity-30 pointer-events-none z-0" />

            {/* Mobile/Tablet View (< md) */}
            <div className="block md:hidden relative w-full">
                <div className="relative w-full aspect-[4/3] sm:aspect-video">
                    <Image
                        src="/banner.jpg"
                        alt="โต๊ดพระราม4 Banner"
                        fill
                        className="object-contain object-top"
                        priority
                    />
                    {/* Gradient Overlay for seamless transition */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
                </div>
                
                {/* Content hidden on mobile as requested */}
                <div className="hidden"></div>
            </div>

            {/* Desktop/Landscape View (>= md) */}
            <div className="hidden md:block relative h-[600px] lg:h-[700px] xl:h-[800px] w-full">
                {/* Background Image */}
                <div className="absolute inset-0 bg-[url('/banner.jpg')] bg-cover bg-center opacity-70" />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80" />
                
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
                    <div className="mb-8 animate-fade-in-up">
                        <div className="inline-block px-8 py-2 border border-[#D4AF37]/30 bg-black/40 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(212,175,55,0.15)] transform hover:scale-105 transition-transform duration-300">
                            <span className="text-[#D4AF37] text-sm lg:text-base tracking-[0.3em] uppercase font-medium">ผู้เชี่ยวชาญสายหลวงพ่อพัฒน์</span>
                        </div>
                    </div>
                    
                    <h1 className="text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
                        <span className="text-gold-gradient relative inline-block py-2">
                            โต๊ดพระราม4
                            {/* Glow effect */}
                            <div className="absolute inset-0 blur-[60px] bg-[#D4AF37]/20 -z-10 rounded-full"></div>
                        </span>
                    </h1>
                    
                    <h2 className="text-xl lg:text-2xl text-gray-300 mb-12 font-light tracking-[0.15em] border-y border-[#D4AF37]/20 py-4 px-12 bg-black/30 backdrop-blur-sm">
                        รับเช่าพระเครื่อง • พระบูชา • เครื่องราง
                    </h2>

                    <a href={contactInfo.lineUrl} target="_blank" rel="noopener noreferrer"
                        className="group relative flex items-center gap-6 bg-gradient-to-b from-[#1a1a1a] to-black text-white px-12 py-6 rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.15)] border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-500 hover:scale-110 hover:shadow-[0_0_60px_rgba(212,175,55,0.3)]">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 via-transparent to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                        <div className="text-5xl font-bold text-gold-gradient drop-shadow-md group-hover:text-[#D4AF37] transition-colors">LINE</div>
                        <div className="h-14 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />
                        <div className="text-left">
                            <div className="text-xs text-[#D4AF37] uppercase tracking-widest mb-1 opacity-80">Contact Us</div>
                            <div className="text-3xl font-bold tracking-wider text-white">{contactInfo.lineId}</div>
                        </div>
                    </a>

                    <p className="mt-10 text-[#D4AF37]/60 text-sm tracking-[0.2em] uppercase flex items-center gap-4">
                        <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/50"></span>
                        ส่งรูปพระมาประเมินราคาฟรี • จ่ายเงินสดทันที
                        <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/50"></span>
                    </p>
                </div>
            </div>

            {/* Mobile Decorative Divider */}
            <div className="md:hidden absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
        </section>
    );
}
