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
                    <div className="mb-3">
                         <div className="inline-block px-4 py-1 border border-[#D4AF37]/30 bg-[#0D0D0D]/40 backdrop-blur-sm rounded-full">
                            <span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase font-medium">ผู้เชี่ยวชาญสายหลวงพ่อพัฒน์</span>
                        </div>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl font-bold mb-2 drop-shadow-2xl">
                        <span className="text-gold-gradient relative inline-block">
                            โต๊ดพระราม4
                            <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50"></div>
                        </span>
                    </h1>
                    
                    <h2 className="text-sm sm:text-base text-gray-300 mb-6 font-light tracking-wide">
                        รับเช่าพระเครื่อง • พระบูชา • เครื่องราง
                    </h2>

                    <a href={contactInfo.lineUrl} target="_blank" rel="noopener noreferrer"
                        className="group relative flex items-center gap-3 bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] text-white px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.15)] border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-300 transform hover:scale-105 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="text-lg font-bold text-[#D4AF37]">LINE</div>
                        <div className="h-6 w-px bg-[#D4AF37]/30" />
                        <div className="text-left">
                            <div className="text-[10px] text-[#D4AF37]/70 uppercase tracking-wider">Contact Us</div>
                            <div className="text-sm font-bold tracking-wide">{contactInfo.lineId}</div>
                        </div>
                    </a>

                    <p className="mt-4 text-[#D4AF37]/60 text-[10px] tracking-wider uppercase">
                        ส่งรูปพระมาประเมินราคาฟรี • จ่ายเงินสดทันที
                    </p>
                </div>
            </div>

            {/* Desktop/Tablet: Original layout with fixed height */}
            <div className="hidden md:block relative h-[600px] lg:h-[700px] bg-[#050505]">
                {/* Background with overlay */}
                <div className="absolute inset-0 bg-[url('/banner.jpg')] bg-cover bg-center opacity-80" />
                {/* Dark overlay for desktop to ensure text readability */}
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-transparent to-[#0D0D0D]" />
                
                {/* Sacred Pattern Overlay */}
                <div className="absolute inset-0 sacred-pattern opacity-50 mix-blend-overlay pointer-events-none"></div>

                {/* Decorative gold lines */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
                    <div className="mb-6 animate-fade-in-up">
                        <div className="inline-block px-6 py-2 border border-[#D4AF37]/30 bg-black/40 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                            <span className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium">ผู้เชี่ยวชาญสายหลวงพ่อพัฒน์</span>
                        </div>
                    </div>
                    
                    <h1 className="text-7xl lg:text-8xl font-bold mb-6 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                        <span className="text-gold-gradient relative inline-block py-2">
                            โต๊ดพระราม4
                            {/* Glow effect behind text */}
                            <div className="absolute inset-0 blur-3xl bg-[#D4AF37]/10 -z-10 rounded-full"></div>
                        </span>
                    </h1>
                    
                    <h2 className="text-xl lg:text-2xl text-gray-300 mb-12 font-light tracking-[0.1em] border-y border-[#D4AF37]/20 py-3 px-8 bg-black/20 backdrop-blur-sm">
                        รับเช่าพระเครื่อง • พระบูชา • เครื่องราง
                    </h2>

                    <a href={contactInfo.lineUrl} target="_blank" rel="noopener noreferrer"
                        className="group relative flex items-center gap-6 bg-gradient-to-b from-[#1a1a1a] to-black text-white px-10 py-5 rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.15)] border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(212,175,55,0.25)]">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                        <div className="text-4xl font-bold text-gold-gradient drop-shadow-md">LINE</div>
                        <div className="h-12 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />
                        <div className="text-left">
                            <div className="text-xs text-[#D4AF37] uppercase tracking-widest mb-1 opacity-80">Contact Us</div>
                            <div className="text-2xl font-bold tracking-wider text-white">{contactInfo.lineId}</div>
                        </div>
                    </a>

                    <p className="mt-8 text-[#D4AF37]/60 text-sm tracking-widest uppercase flex items-center gap-3">
                        <span className="w-8 h-px bg-[#D4AF37]/30"></span>
                        ส่งรูปพระมาประเมินราคาฟรี • จ่ายเงินสดทันที
                        <span className="w-8 h-px bg-[#D4AF37]/30"></span>
                    </p>
                </div>
            </div>

            {/* Decorative gold line for mobile */}
            <div className="md:hidden absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
        </section>
    );
}
