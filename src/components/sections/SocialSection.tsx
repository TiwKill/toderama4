import { Facebook, Youtube, Music2 } from "lucide-react";
import { contactInfo } from "@/data/amulets";

export default function SocialSection() {
    return (
        <section className="w-full bg-[#0D0D0D] py-16 md:py-24 px-4 relative overflow-hidden">
            {/* Sacred Background */}
            <div className="absolute inset-0 sacred-pattern opacity-30 pointer-events-none" />
            
            {/* Decorative Lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

            <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
                
                {/* Left Content - Call to Action */}
                <div className="flex-1 space-y-8 text-center md:text-left">
                    <div className="inline-block px-5 py-2 border border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-full text-[#D4AF37] text-xs md:text-sm tracking-[0.2em] uppercase mb-2 backdrop-blur-sm">
                        ช่องทางการติดตาม
                    </div>
                    
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-xl leading-tight">
                        อยากได้พระแท้...<br />
                        <span className="text-gold-gradient relative inline-block">
                            ต้องที่นี่เท่านั้น
                            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#D4AF37] rounded-full opacity-80" />
                        </span>
                    </h2>
                    
                    <p className="text-gray-400 text-base md:text-lg font-light tracking-wide max-w-lg mx-auto md:mx-0">
                        ติดตามข่าวสาร ไลฟ์สดประมูลพระ และความรู้เรื่องวัตถุมงคลได้ทุกช่องทาง
                    </p>

                    <div className="flex justify-center md:justify-start gap-4 md:gap-6 pt-4">
                        {[
                            { href: contactInfo.facebook, Icon: Facebook, label: "Facebook", border: "hover:border-[#1877F2]", text: "group-hover:text-[#1877F2]", bg: "hover:bg-[#1877F2]" },
                            { href: contactInfo.youtube, Icon: Youtube, label: "YouTube", border: "hover:border-[#FF0000]", text: "group-hover:text-[#FF0000]", bg: "hover:bg-[#FF0000]"  },
                            { href: contactInfo.tiktok, Icon: Music2, label: "TikTok", border: "hover:border-[#00f2ea]", text: "group-hover:text-[#00f2ea]", bg: "hover:bg-black"  },
                        ].map(({ href, Icon, label, border, text, bg }, i) => (
                            <a
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                                    group relative flex flex-col items-center gap-3
                                `}
                            >
                                <div className={`
                                    relative flex items-center justify-center
                                    w-16 h-16 md:w-20 md:h-20
                                    rounded-2xl
                                    bg-[#1A1A1A]
                                    border border-[#D4AF37]/30
                                    shadow-[0_0_15px_rgba(0,0,0,0.5)]
                                    transition-all duration-300
                                    ${bg}
                                    ${border}
                                    group-hover:scale-110
                                    group-hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]
                                `}>
                                    <Icon
                                        className={`
                                            w-7 h-7 md:w-9 md:h-9
                                            text-[#D4AF37]
                                            transition-colors duration-300
                                            group-hover:text-white
                                        `}
                                    />
                                    {/* Inner Glow */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                </div>
                                <span className="text-xs text-gray-400 font-medium tracking-wider uppercase group-hover:text-[#D4AF37] transition-colors">{label}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Content - Facebook Reel Embed with Gold Frame */}
                <div className="flex-1 flex justify-center relative w-full max-w-sm mx-auto md:max-w-none">
                     {/* Glow behind the frame */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-[#D4AF37]/10 blur-[80px] rounded-full pointer-events-none" />
                    
                    <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-b from-[#D4AF37] via-[#8B4513] to-[#D4AF37] shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                        <div className="bg-[#0D0D0D] rounded-[2.3rem] p-2 overflow-hidden relative">
                             {/* Frame Shine */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent z-20" />
                            
                            <div className="w-[267px] h-[476px] bg-[#1A1A1A] rounded-[2rem] overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center bg-[#0D0D0D] z-0">
                                    <div className="w-8 h-8 border-4 border-[#D4AF37]/30 border-t-[#D4AF37] rounded-full animate-spin" />
                                </div>
                                <iframe
                                    src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2274721436388513%2F&show_text=false&width=267&t=0"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 'none', overflow: 'hidden' }}
                                    scrolling="no"
                                    frameBorder="0"
                                    allowFullScreen={true}
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    className="relative z-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
