"use client";
import Image from "next/image";
import { Phone } from "lucide-react";
import { contactInfo } from "@/data/amulets";

export default function WelcomeSection() {
    return (
        <section className="w-full bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] py-12 md:py-20 px-4 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
            <div className="absolute -left-20 top-1/2 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-3xl" />
            <div className="absolute -right-20 top-1/3 w-60 h-60 bg-[#8B0000]/5 rounded-full blur-3xl" />

            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="inline-block px-4 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-xs md:text-sm tracking-wider uppercase mb-3">
                        ยินดีต้อนรับ
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                        <span className="text-[#D4AF37]">โต๊ดพระราม4</span> – ยินดีต้อนรับ
                    </h2>
                    <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
                    {/* Welcome Image */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 via-[#8B0000]/20 to-[#D4AF37]/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                        <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30 shadow-2xl shadow-[#D4AF37]/10">
                            <Image
                                src="/welcome.jpg"
                                alt="โต๊ดพระราม4 - ยินดีต้อนรับ"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                                priority
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent" />
                        </div>
                    </div>

                    {/* Welcome Text */}
                    <div className="space-y-6">
                        {/* Introduction Card */}
                        <div className="premium-card rounded-2xl p-5 md:p-6 border border-[#D4AF37]/20 bg-[#1A1A1A]/80 backdrop-blur-sm">
                            <h3 className="text-lg md:text-xl font-bold text-[#D4AF37] mb-4">วัตถุประสงค์</h3>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                วัตถุประสงค์ของเว็บไซต์นี้เพื่อ<strong className="text-[#D4AF37]">เผยแพร่บารมีหลวงปู่พัฒน์</strong>
                                ให้ผู้มีศรัทธาได้ศึกษาประวัติและพระเครื่องแต่ละรุ่น
                                พระที่นำมาแสดงเป็น<strong className="text-white">พระแท้ตามหลักสากลนิยม</strong>
                            </p>
                        </div>

                        {/* About Me Card */}
                        <div className="premium-card rounded-2xl p-5 md:p-6 border border-[#8B0000]/30 bg-[#1A1A1A]/80 backdrop-blur-sm">
                            <h3 className="text-lg md:text-xl font-bold text-white mb-4">ผม โต๊ดพระราม4</h3>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                                ยินดีให้ข้อมูลพระเครื่องสาย<strong className="text-[#D4AF37]">หลวงปู่พัฒน์ วัดห้วยด้วน</strong>
                                ทุกรุ่น ทุกพิมพ์ ทั้งพระเครื่องและพระบูชา
                            </p>
                            <div className="bg-[#D4AF37]/10 rounded-xl p-4 border border-[#D4AF37]/20">
                                <p className="text-[#D4AF37] text-sm md:text-base font-medium text-center">
                                    พร้อมบริการ<strong className="text-white"> รับเช่า – ให้เช่า – จัดหา</strong>พระเครื่องหลวงปู่พัฒน์
                                </p>
                            </div>
                        </div>

                        {/* Contact CTA */}
                        <a 
                            href={contactInfo.lineUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#00B900] to-[#00A000] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-green-500/20 transition-all hover:-translate-y-0.5"
                        >
                            <Phone className="w-5 h-5" />
                            ติดต่อสอบถามผ่าน LINE
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
