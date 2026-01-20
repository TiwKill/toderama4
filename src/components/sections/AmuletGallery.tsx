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
                <div className="text-center mb-8 md:mb-12">
                    <div className="inline-block px-4 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-xs md:text-sm tracking-wider uppercase mb-3">
                        คำถามยอดฮิต
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                        16 รุ่นพระ<span className="text-[#D4AF37]">หลวงพ่อพัฒน์</span>ที่รับ
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                        คลิกที่รูปเพื่อดูรายละเอียดและติดต่อสอบถาม
                    </p>
                    <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] mx-auto rounded-full mt-4" />
                </div>

                {/* Amulet Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                    {displayedAmulets.map((amulet) => (
                        <div
                            key={amulet.id}
                            onClick={() => onAmuletClick(amulet)}
                            className="group relative bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37] cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/20 hover:-translate-y-1"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-square">
                                <Image
                                    src={amulet.src}
                                    alt={amulet.name}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Hover overlay with button */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="bg-[#D4AF37] text-black px-3 py-1 rounded-full text-xs font-bold">
                                        ดูรายละเอียด
                                    </div>
                                </div>
                            </div>
                            {/* Name Label - Always Visible */}
                            <div className="p-2 md:p-3 bg-gradient-to-t from-[#0D0D0D] to-[#1A1A1A]">
                                <p className="text-center text-[#D4AF37] text-xs md:text-sm font-bold leading-tight line-clamp-2">
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
