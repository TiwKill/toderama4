import Image from "next/image";
import { contactInfo } from "@/data/amulets";

export default function PawnCTASection() {
    return (
        <section className="w-full relative py-12 px-4 overflow-hidden bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]">
            {/* Background Image with Darkening */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/banner.jpg" 
                    alt="Background"
                    fill
                    className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-black/80" />
                <div className="absolute inset-0 sacred-pattern opacity-10" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
                
                {/* Headline 1: รับเช่าพระ (3D Effect) */}
                <h2 className="relative text-5xl md:text-6xl font-black leading-tight mb-2 mt-4">
                    <span className="absolute inset-0 text-black/50 blur-sm transform translate-y-2 translate-x-1" aria-hidden="true">รับเช่าพระ</span>
                    <span className="relative bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-100 to-gray-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] filter">
                        รับเช่า-ให้เช่า <br /> จำนำพระ
                    </span>
                </h2>

                {/* Sub Headline */}
                <div className="flex items-center gap-3 my-4 opacity-90">
                    <div className="h-px w-8 bg-[#D4AF37]" />
                    <p className="text-[#F5E6D3] text-lg font-medium tracking-wide">วัตถุมงคล • พระบูชา</p>
                    <div className="h-px w-8 bg-[#D4AF37]" />
                </div>

                {/* Headline 2: ให้ราคาสูง (Gold/Fire Effect) */}
                <h2 className="relative text-6xl md:text-7xl font-black transform -rotate-2 mt-2 mb-8">
                        {/* Text Shadow Layer */}
                    <span className="absolute inset-0 text-[#8B0000] transform translate-y-2 translate-x-1 opacity-80" aria-hidden="true">ให้ราคาสูง</span>
                    {/* Main Text Layer */}
                    <span className="relative bg-clip-text text-transparent bg-gradient-to-b from-[#FFD700] via-[#FDB931] to-[#B8860B] drop-shadow-[0_2px_0_rgba(255,255,255,0.2)]">
                        ให้ราคาสูง
                    </span>
                    {/* Glow */}
                    <div className="absolute inset-0 bg-[#FFD700]/20 blur-xl -z-10 rounded-full" />
                </h2>

                {/* Description */}
                <p className="text-gray-300 text-sm font-light mb-8 max-w-[90%] leading-relaxed">
                    รับเช่า-ให้เช่า พระเครื่อง พระบูชา <br/>
                    <span className="text-[#D4AF37]">จ่ายเงินสดทันที ประเมินราคาฟรี</span>
                </p>

                {/* Call to Action - LINE Button */}
                <a href={contactInfo.lineUrl} target="_blank" rel="noopener noreferrer" className="w-full max-w-[320px] group mb-6">
                    <div className="relative bg-[#06C755] hover:bg-[#05b64d] text-white p-1 rounded-2xl shadow-[0_0_20px_rgba(6,199,85,0.4)] transition-all transform hover:scale-105">
                        <div className="bg-black/10 border-2 border-white/20 rounded-xl px-4 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="bg-white p-1.5 rounded-lg">
                                    <div className="text-[#06C755] font-black text-xl leading-none">LINE</div>
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className="text-[10px] text-white/90 leading-none mb-0.5">คลิกส่งรูปประเมินราคา</span>
                                    <span className="text-xl font-bold font-mono tracking-wide leading-none">Add Line</span>
                                </div>
                            </div>
                            <div className="bg-white/20 p-2 rounded-full animate-pulse">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </a>

                {/* Phone Number - Compact */}
                <div className="flex items-center gap-2 text-white/60 text-sm">
                    <span>หรือโทร</span>
                    <a href={`tel:${contactInfo.phone}`} className="text-[#D4AF37] font-mono font-bold text-lg border-b border-[#D4AF37]/30 hover:text-white transition-colors">
                        {contactInfo.phone}
                    </a>
                </div>
            </div>
            
            {/* Bottom Border */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
        </section>
    );
}
