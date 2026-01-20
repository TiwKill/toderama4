"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { buddhaAmulets, BuddhaAmulet, contactInfo } from "@/data/amulets";

interface AmuletGalleryProps {
    onAmuletClick: (amulet: BuddhaAmulet) => void;
}

export default function AmuletGallery({ onAmuletClick }: AmuletGalleryProps) {
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile on mount and resize
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Show 6 items on mobile (collapsed), all on desktop or when expanded
    const displayedAmulets = isMobile && !showAll 
        ? buddhaAmulets.slice(0, 6) 
        : buddhaAmulets;

    const remainingCount = buddhaAmulets.length - 6;

    return (
        <section className="w-full bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] py-12 md:py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-12 relative z-10">
                    <div className="inline-block px-4 py-1 border border-[#D4AF37]/30 bg-[#0D0D0D]/60 backdrop-blur-md rounded-full text-[#D4AF37] text-xs md:text-sm tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                        BEST SELLER
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-xl">
                        16 รุ่นพระ<span className="text-gold-gradient inline-block transform hover:scale-105 transition-transform duration-300">หลวงพ่อพัฒน์</span>ที่รับ
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base font-light tracking-wide max-w-xl mx-auto border-b border-[#D4AF37]/10 pb-4">
                        ยอดนิยมตลอดกาล ซื้อง่าย-ขายคล่อง ราคาดี
                    </p>
                </div>

                {/* Amulet Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 relative z-10">
                    {displayedAmulets.map((amulet) => (
                        <div
                            key={amulet.id}
                            onClick={() => onAmuletClick(amulet)}
                            className="group relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-xl overflow-hidden border border-[#D4AF37]/30 cursor-pointer transition-all duration-500 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] hover:-translate-y-2"
                        >
                            {/* Golden Border Shine Effect */}
                            <div className="absolute inset-0 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 rounded-xl transition-all duration-500 z-20 pointer-events-none"></div>
                            
                            {/* Image Container */}
                            <div className="relative aspect-[4/5] overflow-hidden bg-[#050505]">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent opacity-50"></div>
                                <Image
                                    src={amulet.src}
                                    alt={amulet.name}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                                    className="object-contain p-2 group-hover:scale-110 transition-transform duration-700 ease-out filter drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
                                />
                                
                                {/* Hover overlay with button */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                    <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black px-4 py-2 rounded-full text-xs md:text-sm font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)] transform scale-90 group-hover:scale-100 transition-all duration-300">
                                        ดูรายละเอียด
                                    </div>
                                </div>
                            </div>
                            
                            {/* Name Label - Always Visible */}
                            <div className="p-3 bg-gradient-to-t from-[#0a0a0a] via-[#111] to-[#1a1a1a] border-t border-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 transition-colors">
                                <p className="text-center text-[#D4AF37] text-xs md:text-sm font-bold leading-tight line-clamp-2 group-hover:text-gold-gradient transition-all">
                                    {amulet.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show More/Less Button (Mobile Only) */}
                {isMobile && (
                    <div className="mt-6 text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-full text-[#D4AF37] font-bold transition-all hover:bg-[#D4AF37]/10"
                        >
                            {showAll ? (
                                <>
                                    <ChevronUp size={20} />
                                    ดูน้อยลง
                                </>
                            ) : (
                                <>
                                    <ChevronDown size={20} />
                                    ดูเพิ่มเติมอีก {remainingCount} รุ่น
                                </>
                            )}
                        </button>
                    </div>
                )}

                {/* CTA */}
                <div className="mt-8 md:mt-12 text-center">
                    <p className="text-[#D4AF37] text-lg md:text-xl font-bold mb-2">
                        ส่งรูปพระมาที่ Line ID : {contactInfo.lineId}
                    </p>
                    <p className="text-gray-400 text-sm md:text-lg mb-4 md:mb-6">
                        รับเช่าไม่จำกัดวงเงิน • ประเมินราคาฟรี
                    </p>
                    <a 
                        href={contactInfo.lineUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-[#8B0000] to-[#B8860B] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:shadow-red-500/20 transition-all hover:-translate-y-0.5"
                    >
                        สอบถามเพิ่มเติม
                    </a>
                </div>
            </div>
        </section>
    );
}
