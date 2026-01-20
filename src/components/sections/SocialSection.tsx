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
                    <div className="flex justify-center md:justify-start gap-3 md:gap-4">
                        {[
                            { href: contactInfo.facebook, Icon: Facebook },
                            { href: contactInfo.youtube, Icon: Youtube },
                            { href: contactInfo.tiktok, Icon: Music2 },
                        ].map(({ href, Icon }, i) => (
                            <a
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
                                    flex items-center justify-center
                                    size-12 md:size-14
                                    rounded-full
                                    bg-neutral-900
                                    border border-[#D4AF37]/30
                                    transition-all duration-300
                                    hover:bg-[#D4AF37]
                                    hover:border-[#D4AF37]
                                "
                            >
                                <Icon
                                    className="
                                    size-5 md:size-6
                                    text-[#D4AF37]
                                    transition-colors
                                    group-hover:text-black
                                    "
                                />
                            </a>
                        ))}
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
