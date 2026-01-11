import { Facebook, Youtube, Music2 } from "lucide-react";
import { contactInfo } from "@/data/amulets";

export default function Footer() {
    return (
        <footer className="w-full bg-[#0D0D0D] text-white py-12 md:py-16 px-4 border-t border-[#D4AF37]/20">
            <div className="max-w-6xl mx-auto">
                <div className="premium-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & Brand */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center text-black font-bold text-xl md:text-2xl shadow-lg">
                                ท4
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37]">โต๊ดพระราม4</h3>
                                <p className="text-gray-400 text-sm">ผู้เชี่ยวชาญพระเครื่อง</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center md:text-left space-y-2">
                        <h4 className="text-[#D4AF37] font-bold mb-3">ช่องทางติดต่อ</h4>
                        <p className="text-gray-300">📱 โทร: <strong>{contactInfo.phone}</strong></p>
                        <p className="text-gray-300">💬 Line ID: <strong>{contactInfo.lineId}</strong></p>
                        <p className="text-gray-300">📍 ย่านพระราม 4 กรุงเทพฯ</p>
                    </div>

                    {/* Social Links */}
                    <div className="text-center">
                        <h4 className="text-[#D4AF37] font-bold mb-3">ติดตามเรา</h4>
                        <div className="flex gap-3 justify-center">
                            <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 bg-[#2D2D2D] rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href={contactInfo.youtube} target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 bg-[#2D2D2D] rounded-full flex items-center justify-center hover:bg-red-600 transition-all">
                                <Youtube size={18} />
                            </a>
                            <a href={contactInfo.tiktok} target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 bg-[#2D2D2D] rounded-full flex items-center justify-center hover:bg-pink-600 transition-all">
                                <Music2 size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-6 md:mt-8 pt-6 md:pt-8 border-t border-[#D4AF37]/10">
                    <p className="text-gray-500 text-sm">© 2024 โต๊ดพระราม4 พระเครื่อง. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
