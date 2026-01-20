import { Facebook, Youtube, Music2 } from "lucide-react";
import { contactInfo } from "@/data/amulets";

export default function SocialSection() {
    return (
        <section className="w-full bg-[#0D0D0D] py-12 md:py-20 px-4 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
                    <div className="inline-block px-4 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-xs md:text-sm tracking-wider uppercase">
                        ติดตามเราได้ที่
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        อยากได้พระแท้...<br />
                        <span className="text-[#D4AF37]">ติดตามเราได้ที่</span>
                    </h2>
                    <div className="flex gap-3 md:gap-4 justify-center md:justify-start">
                        <a
                            href={contactInfo.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 md:w-14 md:h-14 bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-full flex items-center justify-center hover:border-[#D4AF37] transition-all"
                        >
                            <Facebook size={20} className="md:w-6 md:h-6 text-[#D4AF37]" />
                        </a>
                        <a
                            href={contactInfo.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 md:w-14 md:h-14 bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-full flex items-center justify-center hover:border-[#D4AF37] transition-all"
                        >
                            <Youtube size={20} className="md:w-6 md:h-6 text-[#D4AF37]" />
                        </a>
                        <a
                            href={contactInfo.tiktok}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 md:w-14 md:h-14 bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-full flex items-center justify-center hover:border-[#D4AF37] transition-all"
                        >
                            <Music2 size={20} className="md:w-6 md:h-6 text-[#D4AF37]" />
                        </a>
                    </div>
                </div>

                {/* Facebook Reel Embed */}
                <div className="flex-1 flex justify-center relative">
                    <div className="w-[250px] md:w-[267px] h-[450px] md:h-[476px] bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/20">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2274721436388513%2F&show_text=false&width=267&t=0"
                            width="100%"
                            height="100%"
                            style={{ border: 'none', overflow: 'hidden' }}
                            scrolling="no"
                            frameBorder="0"
                            allowFullScreen={true}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
