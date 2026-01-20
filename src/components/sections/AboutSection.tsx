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
                                { val: "1000+", label: "ลูกค้าไว้ใจ" }
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
                            
                            <div className="space-y-6">
                                {/* Phone Contact */}
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20 group-hover:bg-[#D4AF37] transition-all duration-300 shadow-md group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors">
                                            <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                                            <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125c0-.621.504-1.125 1.125-1.125h6.75c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">เบอร์โทรศัพท์</p>
                                        <a href={`tel:${contactInfo.phone.replace(/-/g, '')}`} className="text-white font-bold text-lg hover:text-[#D4AF37] transition-colors font-mono">{contactInfo.phone}</a>
                                    </div>
                                </div>
                                
                                {/* LINE Contact */}
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-[#06C755]/10 flex items-center justify-center border border-[#06C755]/20 group-hover:bg-[#06C755] transition-all duration-300 shadow-md group-hover:shadow-[0_0_15px_rgba(6,199,85,0.4)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#06C755] group-hover:text-white transition-colors">
                                            <path d="M21.502 9.774c0-4.04-4.256-7.391-9.5-7.391-5.245 0-9.5 3.352-9.5 7.391 0 3.655 3.238 6.804 8.125 7.304.316.07.747.215.856.492.097.246.063.633.031.883-.07.562-.437 2.18-.5 2.503-.027.13-.01.353.136.435.145.08.41.026.582-.12a20.046 20.046 0 005.419-4.832c3.086-2.072 4.351-4.484 4.351-6.666z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Line ID</p>
                                        <a href={contactInfo.lineUrl} target="_blank" rel="noopener noreferrer" className="text-white font-bold text-lg hover:text-[#06C755] transition-colors font-mono">{contactInfo.lineId}</a>
                                    </div>
                                </div>
                                
                                {/* Location Contact */}
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:bg-red-500 transition-all duration-300 shadow-md group-hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500 group-hover:text-white transition-colors">
                                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">ที่ตั้ง</p>
                                        <p className="text-white font-medium">ย่านพระราม 4 กรุงเทพฯ</p>
                                    </div>
                                </div>

                                {/* TikTok Contact */}
                                <div className="flex items-center gap-4 group">
                                     <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-black group-hover:border-white/30 transition-all duration-300 shadow-md">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                                            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">TikTok</p>
                                        <a href="https://www.tiktok.com/@tode_rama4" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#D4AF37] transition-colors">@tode_rama4</a>
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
