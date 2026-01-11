import Image from "next/image";
import { Phone, Facebook, Youtube, Music2, MessageCircle } from "lucide-react";
import { contactInfo } from "@/data/amulets";

export default function Header() {
    return (
        <header className="w-full bg-gradient-to-r from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] text-white py-3 px-4 flex justify-between items-center text-sm md:text-base sticky top-0 z-50 border-b border-[#D4AF37]/20">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center shadow-lg overflow-hidden border border-[#D4AF37]">
                    <Image 
                        src="/favicon-16x16.jpg" 
                        alt="Logo" 
                        width={40} 
                        height={40} 
                        className="w-full h-full object-cover"
                    />
                </div>
                <span className="font-bold text-[#D4AF37] text-lg tracking-wide">โต๊ดพระราม4</span>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
                <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                    <Phone size={16} className="text-[#D4AF37]" />
                    <span className="hidden md:inline">{contactInfo.phone}</span>
                </a>
                <div className="flex gap-2 md:gap-3">
                    <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" 
                        className="w-8 h-8 bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all">
                        <Facebook size={14} />
                    </a>
                    <a href={contactInfo.youtube} target="_blank" rel="noopener noreferrer" 
                        className="w-8 h-8 bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-full flex items-center justify-center hover:bg-[#8B0000] transition-all">
                        <Youtube size={14} />
                    </a>
                    <a href={contactInfo.lineUrl} target="_blank" rel="noopener noreferrer" 
                        className="w-8 h-8 bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-full flex items-center justify-center hover:bg-green-500 transition-all">
                        <MessageCircle size={14} />
                    </a>
                </div>
            </div>
        </header>
    );
}
