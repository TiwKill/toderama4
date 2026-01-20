"use client";
import Image from "next/image";
import { FileText, CheckCircle, Shield, Award } from "lucide-react";
import { contactInfo, companyInfo } from "@/data/amulets";

interface AboutSectionProps {
    onPDFClick: () => void;
}

export default function AboutSection({ onPDFClick }: AboutSectionProps) {
    return (
        <section className="w-full bg-[#0D0D0D] py-16 md:py-24 px-4 relative overflow-hidden">
            {/* Sacred Background */}
            <div className="absolute inset-0 sacred-pattern opacity-40 pointer-events-none" />

            {/* Decorative top line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent shadow-[0_0_15px_rgba(212,175,55,0.5)]" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-block px-5 py-2 border border-[#D4AF37]/40 bg-[#0D0D0D]/80 backdrop-blur-md rounded-full text-[#D4AF37] text-xs md:text-sm tracking-[0.2em] uppercase mb-6 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                        ผู้เชี่ยวชาญสายหลวงพ่อพัฒน์
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
                        เกี่ยวกับ <span className="text-gold-gradient relative inline-block">
                            โต๊ดพระราม4
                            <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50"></div>
                        </span>
                    </h2>
                    <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mt-6 opacity-60" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Column - About Text & Company */}
                    <div className="space-y-8">
                        {/* About Text */}
                        <div className="premium-card rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                           <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#D4AF37]/20 rounded-tl-3xl pointer-events-none transition-all group-hover:w-full group-hover:h-full group-hover:border-[#D4AF37]/10" />
                            
                            {/* Faith Image - Highlight */}
                            <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] mb-8 rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-lg group-image">
                                <Image
                                    src="/tode-respect.jpg"
                                    alt="โต๊ดพระราม4 กราบขอพรหลวงพ่อพัฒน์"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent" />
                                <div className="absolute bottom-0 left-0 w-full p-4">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-1 h-4 bg-[#D4AF37] rounded-full" />
                                        <span className="text-[#D4AF37] text-xs uppercase tracking-wider font-bold">ความศรัทธา</span>
                                    </div>
                                    <p className="text-white text-sm font-light leading-relaxed">
                                        &quot;พุทธคุณจะคุ้มครองผู้ประพฤติดี&quot; <br/>
                                        <span className="text-white/60 text-xs">ภาพเมื่อครั้งเข้ากราบถวายสักการะหลวงพ่อพัฒน์ ปุญฺญกาโม</span>
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 font-light tracking-wide text-justify">
                                <strong className="text-gold-gradient font-bold text-xl">โต๊ดพระราม4</strong> คือเซียนพระเครื่องที่มีชื่อเสียงในวงการพระเครื่อง 
                                โดยเฉพาะ <strong className="text-white border-b border-[#D4AF37]/30 pb-0.5">สายหลวงพ่อพัฒน์ วัดห้วยด้วน</strong> 
                                มีความเชี่ยวชาญในการดูพระ ทั้งการเช่า-ซื้อขายพระเครื่อง 
                                มักจะ <strong className="text-[#D4AF37]">ไลฟ์สดผ่าน Facebook</strong> เพื่อแบ่งปันความรู้และให้บริการลูกค้าด้วยความจริงใจ
                            </p>
                            
                            {/* Trust Badges */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { text: "พระแท้ 100%", icon: CheckCircle, color: "text-green-500" },
                                    { text: "ปลอดภัย ไว้ใจได้", icon: Shield, color: "text-blue-500" },
                                    { text: "ประสบการณ์ 5+ ปี", icon: Award, color: "text-[#D4AF37]" },
                                    { text: "จดทะเบียนถูกต้อง", icon: FileText, color: "text-purple-500" }
                                ].map((badge, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-[#0D0D0D]/40 p-3 rounded-lg border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all">
                                        <badge.icon size={20} className={badge.color} />
                                        <span className="text-gray-300 text-sm font-medium">{badge.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Company Registration - PDF Thumbnail */}
                        <div className="premium-card rounded-2xl p-6 md:p-8 flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4 border border-[#D4AF37]/30">
                                <FileText className="text-[#D4AF37] w-6 h-6" />
                            </div>
                            <p className="text-gray-400 text-xs md:text-sm mb-2 tracking-widest uppercase">จดทะเบียนบริษัทถูกต้องตามกฎหมาย</p>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">{companyInfo.name}</h3>
                            
                            {/* PDF Thumbnail Preview */}
                            <div 
                                onClick={onPDFClick}
                                className="relative cursor-pointer group w-full max-w-[240px]"
                            >
                                <div className="aspect-[3/4] rounded-xl overflow-hidden border-2 border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-all duration-500 shadow-2xl group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transform group-hover:scale-105 bg-white/5">
                                    <iframe 
                                        src={`${companyInfo.pdfPath}#page=1&view=FitH`}
                                        className="w-full h-full pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
                                        title="ใบจดทะเบียนบริษัท Preview"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors flex items-center justify-center backdrop-blur-[2px] group-hover:backdrop-blur-none">
                                        <div className="bg-[#D4AF37] text-black px-6 py-2.5 rounded-full text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2">
                                            <span>คลิกเพื่อดูเอกสาร</span>
                                            <FileText size={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Stats & Contact */}
                    <div className="space-y-8">
                        {/* Stats - Grid Layout */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { val: "5+", label: "ปีประสบการณ์" },
                                { val: "2.5K+", label: "พระที่รับเช่า" },
                                { val: "300+", label: "ลูกค้าไว้ใจ" }
                            ].map((stat, i) => (
                                <div key={i} className="premium-card rounded-2xl p-6 text-center border border-[#D4AF37]/20 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] hover:-translate-y-2 transition-transform duration-300">
                                    <div className="text-3xl md:text-4xl font-bold text-gold-gradient mb-2 drop-shadow-md">{stat.val}</div>
                                    <div className="text-gray-400 text-xs md:text-sm tracking-wider uppercase">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Services */}
                        <div className="premium-card rounded-2xl p-6 md:p-8 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D]">
                            <h3 className="text-xl font-bold text-[#D4AF37] mb-6 flex items-center gap-3 border-b border-[#D4AF37]/10 pb-4">
                                <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center border border-[#D4AF37]/30">
                                    <span className="text-[#D4AF37] text-lg">✓</span>
                                </div>
                                บริการของเรา
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "รับเช่าพระหลวงพ่อพัฒน์ ทุกรุ่น ทุกพิมพ์",
                                    "ให้ข้อมูลพระเครื่อง พระบูชา วัดห้วยด้วน",
                                    "ให้ราคาสูง จ่ายเงินสดทันที",
                                    "รับเช่า-ให้เช่า-จัดหาพระเครื่อง"
                                ].map((service, i) => (
                                    <li key={i} className="flex items-start gap-4 text-gray-300 text-sm md:text-base group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 group-hover:scale-150 transition-transform shadow-[0_0_10px_#D4AF37]" />
                                        <span className="group-hover:text-white transition-colors">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div className="premium-card rounded-2xl p-6 md:p-8 border border-[#D4AF37]/30 bg-[#1A1A1A]/90 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-bl-full pointer-events-none" />
                            
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-[#8B0000] to-[#500000] text-white rounded-full flex items-center justify-center shadow-lg border border-red-500/30">
                                    📞
                                </div>
                                <span className="text-gold-gradient">ข้อมูลติดต่อ</span>
                            </h3>
                            
                            <div className="space-y-5">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-lg bg-[#2D2D2D] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                                        📱
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">เบอร์โทรศัพท์</p>
                                        <p className="text-white font-bold text-lg">{contactInfo.phone}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-lg bg-[#2D2D2D] flex items-center justify-center text-[#00B900] group-hover:bg-[#00B900] group-hover:text-white transition-all duration-300">
                                        💬
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Line ID</p>
                                        <p className="text-white font-bold text-lg">{contactInfo.lineId}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-lg bg-[#2D2D2D] flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                                        📍
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">ที่ตั้ง</p>
                                        <p className="text-white font-medium">ย่านพระราม 4 กรุงเทพฯ</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                     <div className="w-10 h-10 rounded-lg bg-[#2D2D2D] flex items-center justify-center text-white group-hover:bg-black group-hover:text-white transition-all duration-300 border border-white/10">
                                        🎵
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">TikTok</p>
                                        <p className="text-white font-medium">@tode_rama4</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
