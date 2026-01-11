"use client";
import Image from "next/image";
import { X, MessageCircle } from "lucide-react";
import { BuddhaAmulet, contactInfo } from "@/data/amulets";

interface AmuletModalProps {
    amulet: BuddhaAmulet | null;
    onClose: () => void;
}

export default function AmuletModal({ amulet, onClose }: AmuletModalProps) {
    if (!amulet) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-sm" 
            onClick={onClose}
        >
            <div 
                className="bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] rounded-2xl max-w-md w-full p-5 md:p-6 relative border border-[#D4AF37]/40 shadow-2xl shadow-[#D4AF37]/10" 
                onClick={e => e.stopPropagation()}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 bg-[#2D2D2D] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#D4AF37] transition-all"
                >
                    <X size={18} />
                </button>

                <div className="aspect-square rounded-xl overflow-hidden mb-5 border-2 border-[#D4AF37]/30 shadow-lg">
                    <Image 
                        src={amulet.src} 
                        alt={amulet.name} 
                        width={500} 
                        height={500} 
                        className="w-full h-full object-cover" 
                    />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] text-center mb-4">
                    {amulet.name}
                </h3>

                <div className="bg-[#0D0D0D] rounded-xl p-4 text-center border border-[#D4AF37]/20">
                    <p className="text-gray-300 text-sm mb-4">
                        สนใจพระรุ่นนี้? ส่งรูปมาสอบถามได้เลย!
                    </p>
                    <div className="flex justify-center mb-4">
                        <Image 
                            src="/line_qr.jpg" 
                            alt="LINE QR Code" 
                            width={120} 
                            height={120} 
                            className="rounded-lg border-2 border-green-500/30" 
                        />
                    </div>
                    <p className="text-[#D4AF37] font-bold">Line ID: {contactInfo.lineId}</p>
                    <p className="text-gray-400 text-xs mt-1">สแกน QR หรือคลิกปุ่มด้านล่าง</p>
                    <a 
                        href={contactInfo.lineUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-[#00B900] to-[#00A000] text-white px-5 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-green-500/30 transition-all text-sm"
                    >
                        <MessageCircle size={18} />
                        ติดต่อผ่าน LINE
                    </a>
                </div>
            </div>
        </div>
    );
}
