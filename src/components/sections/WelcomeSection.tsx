"use client";
import Image from "next/image";
import { Phone } from "lucide-react";
import { contactInfo } from "@/data/amulets";

export default function WelcomeSection() {
    return (
        <section className="w-full bg-[#0D0D0D] py-12 md:py-20 px-4 relative overflow-hidden">
            {/* Sacred Background Pattern */}
            <div className="absolute inset-0 sacred-pattern opacity-40 pointer-events-none" />
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
            <div className="absolute -left-20 top-1/2 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-[100px]" />
            <div className="absolute -right-20 top-1/3 w-60 h-60 bg-[#8B0000]/10 rounded-full blur-[100px]" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                    <div className="inline-block px-4 py-1 border border-[#D4AF37]/30 bg-[#0D0D0D]/60 backdrop-blur-md rounded-full text-[#D4AF37] text-xs md:text-sm tracking-[0.2em] uppercase mb-4 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                        ยินดีต้อนรับ
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-xl">
                        <span className="text-gold-gradient relative inline-block">
                            โต๊ดพระราม4
                            {/* Glow effect */}
                            <div className="absolute inset-0 blur-xl bg-[#D4AF37]/20 -z-10 rounded-full"></div>
                        </span> – ยินดีต้อนรับ
                    </h2>
                    <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mt-6 opacity-70" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Welcome Image */}
                    <div className="relative group perspective-1000">
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 via-[#8B0000]/20 to-[#D4AF37]/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse-slow" />
                        <div className="premium-card relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:rotate-y-2">
                            <Image
                                src="/welcome.jpg"
                                alt="โต๊ดพระราม4 - ยินดีต้อนรับ"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80" />
                            
                            {/* Corner Accents */}
                            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/50 rounded-tl-lg" />
                            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/50 rounded-br-lg" />
                        </div>
                    </div>

                    {/* Welcome Text */}
                    <div className="space-y-6">
                        {/* Introduction Card */}
                        <div className="premium-card rounded-2xl p-6 md:p-8 border border-[#D4AF37]/20 bg-[#1A1A1A]/90 backdrop-blur-md relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent rounded-bl-full pointer-events-none" />
                            
                            <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3">
                                <span className="w-1 h-8 bg-[#D4AF37] rounded-full"></span>
                                วัตถุประสงค์
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light tracking-wide">
                                วัตถุประสงค์ของเว็บไซต์นี้เพื่อ <strong className="text-gold-gradient font-medium">เผยแพร่บารมีหลวงปู่พัฒน์</strong> ให้ผู้มีศรัทธาได้ศึกษาประวัติและพระเครื่องแต่ละรุ่น พระที่นำมาแสดงเป็น <strong className="text-white border-b border-[#D4AF37]/30 pb-0.5">พระแท้ตามหลักสากลนิยม</strong>
                            </p>
                        </div>

                        {/* About Me Card */}
                        <div className="premium-card rounded-2xl p-6 md:p-8 border border-[#8B0000]/30 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] backdrop-blur-md relative overflow-hidden">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-1 h-8 bg-white rounded-full"></span>
                                ผม โต๊ดพระราม4
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-light tracking-wide">
                                ยินดีให้ข้อมูลพระเครื่องสาย <strong className="text-gold-gradient font-medium">หลวงปู่พัฒน์ วัดห้วยด้วน</strong> ทุกรุ่น ทุกพิมพ์ ทั้งพระเครื่องและพระบูชา
                            </p>
                            
                            <div className="bg-[#D4AF37]/5 rounded-xl p-4 border border-[#D4AF37]/20 text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent animate-shimmer" />
                                <p className="text-[#D4AF37] text-sm md:text-base font-medium relative z-10">
                                    พร้อมบริการ <strong className="text-white text-lg mx-1">รับเช่า – ให้เช่า – จำนำ</strong> พระเครื่องหลวงปู่พัฒน์
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
