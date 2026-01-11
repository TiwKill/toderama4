"use client";
import Image from "next/image";
import { FileText, CheckCircle, Shield, Award } from "lucide-react";
import { contactInfo, companyInfo } from "@/data/amulets";

interface AboutSectionProps {
    onPDFClick: () => void;
}

export default function AboutSection({ onPDFClick }: AboutSectionProps) {
    return (
        <section className="w-full bg-[#0D0D0D] py-12 md:py-20 px-4 relative">
            {/* Decorative top line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="inline-block px-4 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-xs md:text-sm tracking-wider uppercase mb-3">
                        ผู้เชี่ยวชาญสายหลวงพ่อพัฒน์
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                        เกี่ยวกับ <span className="text-[#D4AF37]">โต๊ดพระราม4</span>
                    </h2>
                    <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {/* Left Column - About Text & Company */}
                    <div className="space-y-6">
                        {/* About Text */}
                        <div className="premium-card rounded-2xl p-5 md:p-6">
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                                <strong className="text-[#D4AF37]">โต๊ดพระราม4</strong> คือเซียนพระเครื่องที่มีชื่อเสียงในวงการพระเครื่อง 
                                โดยเฉพาะ<strong className="text-white">สายหลวงพ่อพัฒน์ วัดห้วยด้วน</strong> 
                                มีความเชี่ยวชาญในการดูพระ ทั้งการเช่า-ซื้อขายพระเครื่อง 
                                มักจะ<strong className="text-[#D4AF37]">ไลฟ์สดผ่าน Facebook</strong> เพื่อแบ่งปันความรู้และให้บริการลูกค้า
                            </p>
                            
                            {/* Trust Badges */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
                                    <CheckCircle size={16} className="text-green-500" />
                                    พระแท้ 100%
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
                                    <Shield size={16} className="text-blue-500" />
                                    ปลอดภัย ไว้ใจได้
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
                                    <Award size={16} className="text-[#D4AF37]" />
                                    ประสบการณ์ 20+ ปี
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
                                    <FileText size={16} className="text-purple-500" />
                                    จดทะเบียนถูกต้อง
                                </div>
                            </div>
                        </div>

                        {/* Company Registration - PDF Thumbnail */}
                        <div className="premium-card rounded-2xl p-5 md:p-6">
                            <p className="text-gray-400 text-xs md:text-sm mb-2 text-center">จดทะเบียนบริษัทถูกต้องตามกฎหมาย</p>
                            <h3 className="text-lg md:text-xl font-bold text-[#D4AF37] mb-4 text-center">{companyInfo.name}</h3>
                            
                            {/* PDF Thumbnail Preview */}
                            <div 
                                onClick={onPDFClick}
                                className="relative cursor-pointer group"
                            >
                                <div className="aspect-[3/4] max-w-[200px] mx-auto rounded-lg overflow-hidden border-2 border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-all shadow-lg group-hover:shadow-xl group-hover:shadow-[#D4AF37]/20">
                                    <iframe 
                                        src={`${companyInfo.pdfPath}#page=1&view=FitH`}
                                        className="w-full h-full pointer-events-none"
                                        title="ใบจดทะเบียนบริษัท Preview"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                        <div className="bg-[#D4AF37] text-black px-4 py-2 rounded-full text-xs md:text-sm font-bold group-hover:scale-110 transition-transform">
                                            คลิกเพื่อดูเต็ม
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Stats & Contact */}
                    <div className="space-y-6">
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3">
                            <div className="premium-card rounded-xl p-4 text-center">
                                <div className="text-2xl md:text-4xl font-bold text-[#D4AF37] mb-1">20+</div>
                                <div className="text-gray-400 text-xs md:text-sm">ปีประสบการณ์</div>
                            </div>
                            <div className="premium-card rounded-xl p-4 text-center">
                                <div className="text-2xl md:text-4xl font-bold text-[#D4AF37] mb-1">10K+</div>
                                <div className="text-gray-400 text-xs md:text-sm">พระที่รับเช่า</div>
                            </div>
                            <div className="premium-card rounded-xl p-4 text-center">
                                <div className="text-2xl md:text-4xl font-bold text-[#D4AF37] mb-1">5K+</div>
                                <div className="text-gray-400 text-xs md:text-sm">ลูกค้าไว้ใจ</div>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="premium-card rounded-2xl p-5 md:p-6">
                            <h3 className="text-lg font-bold text-[#D4AF37] mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 bg-[#D4AF37] text-black rounded-full flex items-center justify-center text-sm">✓</span>
                                บริการของเรา
                            </h3>
                            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                                <li className="flex items-start gap-2"><span className="text-[#D4AF37]">•</span> รับเช่าพระหลวงพ่อพัฒน์ ทุกรุ่น ทุกพิมพ์</li>
                                <li className="flex items-start gap-2"><span className="text-[#D4AF37]">•</span> ให้ข้อมูลพระเครื่อง พระบูชา วัดห้วยด้วน</li>
                                <li className="flex items-start gap-2"><span className="text-[#D4AF37]">•</span> ให้ราคาสูง จ่ายเงินสดทันที</li>
                                <li className="flex items-start gap-2"><span className="text-[#D4AF37]">•</span> รับเช่า-ให้เช่า-จัดหาพระเครื่อง</li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="premium-card rounded-2xl p-5 md:p-6">
                            <h3 className="text-lg font-bold text-[#D4AF37] mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 bg-[#8B0000] text-white rounded-full flex items-center justify-center text-sm">📞</span>
                                ข้อมูลติดต่อ
                            </h3>
                            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                                <li className="flex items-center gap-2">📱 โทร: <strong className="text-white">{contactInfo.phone}</strong></li>
                                <li className="flex items-center gap-2">💬 Line ID: <strong className="text-white">{contactInfo.lineId}</strong></li>
                                <li className="flex items-center gap-2">📍 ย่านพระราม 4 กรุงเทพฯ</li>
                                <li className="flex items-center gap-2">🎵 TikTok: @tode_rama4</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
