import Image from "next/image";
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
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center shadow-lg overflow-hidden border border-[#D4AF37]">
                                <Image 
                                    src="/favicon-16x16.jpg" 
                                    alt="Logo" 
                                    width={40} 
                                    height={40} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37]">โต๊ดพระราม4</h3>
                                <p className="text-gray-400 text-sm">ผู้เชี่ยวชาญพระเครื่อง</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center md:text-left space-y-3">
                        <h4 className="text-[#D4AF37] font-bold mb-4 uppercase tracking-wider text-sm border-b border-[#D4AF37]/20 pb-2 inline-block md:block">ช่องทางติดต่อ</h4>
                        
                        <div className="flex items-center justify-center md:justify-start gap-3 group">
                            <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20 group-hover:bg-[#D4AF37] transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#D4AF37] group-hover:text-black transition-colors">
                                    <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                                    <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125c0-.621.504-1.125 1.125-1.125h6.75c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-gray-300 text-sm">โทร: <a href={`tel:${contactInfo.phone.replace(/-/g, '')}`} className="text-white hover:text-[#D4AF37] transition-colors font-medium">{contactInfo.phone}</a></p>
                        </div>

                        <div className="flex items-center justify-center md:justify-start gap-3 group">
                            <div className="w-8 h-8 rounded-lg bg-[#06C755]/10 flex items-center justify-center border border-[#06C755]/20 group-hover:bg-[#06C755] transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#06C755] group-hover:text-white transition-colors">
                                    <path d="M21.502 9.774c0-4.04-4.256-7.391-9.5-7.391-5.245 0-9.5 3.352-9.5 7.391 0 3.655 3.238 6.804 8.125 7.304.316.07.747.215.856.492.097.246.063.633.031.883-.07.562-.437 2.18-.5 2.503-.027.13-.01.353.136.435.145.08.41.026.582-.12a20.046 20.046 0 005.419-4.832c3.086-2.072 4.351-4.484 4.351-6.666z" />
                                </svg>
                            </div>
                            <p className="text-gray-300 text-sm">Line ID: <a href={contactInfo.lineUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#06C755] transition-colors font-medium">{contactInfo.lineId}</a></p>
                        </div>

                        <div className="flex items-center justify-center md:justify-start gap-3 group">
                            <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:bg-red-500 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-500 group-hover:text-white transition-colors">
                                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-gray-300 text-sm">ย่านพระราม 4 กรุงเทพฯ</p>
                        </div>
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
                                className="w-10 h-10 bg-[#2D2D2D] rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all">
                                <Youtube size={18} />
                            </a>
                            <a href={contactInfo.tiktok} target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 bg-[#2D2D2D] rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all">
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
