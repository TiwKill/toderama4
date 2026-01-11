import { contactInfo } from "@/data/amulets";

export default function YouTubeSection() {
    const youtubeVideos = [
        'NVRosD2k3BE',
        'D6v4yWhBtMY',
        'NtvKMRexUsE',
        'CcEN7APLTOs',
        'SOerJidkYJ4',
        'KVd9Bkd527Q'
    ];

    return (
        <section className="w-full bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] py-12 md:py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* YouTube Shorts Section */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12 md:mb-16">
                    {/* YouTube Shorts Embed */}
                    <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
                        <div className="w-[280px] md:w-[315px] h-[500px] md:h-[560px] rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/20">
                            <iframe
                                src="https://www.youtube.com/embed/69-I1RQ-YCs"
                                title="ทำไมโต๊ดพระราม4 ถึงเล่นแค่พระเครื่อง"
                                width="100%"
                                height="100%"
                                style={{ border: 'none' }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
                        <div className="inline-block px-4 py-1 bg-red-500/20 border border-red-500/40 rounded-full text-red-400 text-xs md:text-sm tracking-wider uppercase">
                            YouTube SHORTS
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                            ทำไม<span className="text-[#D4AF37]">โต๊ดพระราม4</span><br />ถึงเล่นแค่พระเครื่อง?
                        </h2>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                            ดูคลิปนี้เพื่อทำความรู้จักกับโต๊ดพระราม4 และเข้าใจว่าทำไมเราถึงมุ่งมั่น
                            เฉพาะทางด้านพระเครื่องสายหลวงพ่อพัฒน์ วัดห้วยด้วน
                        </p>
                        <a
                            href={contactInfo.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-5 md:px-8 py-2 md:py-3 bg-gradient-to-r from-[#8B0000] to-[#B8860B] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:shadow-red-500/20 transition-all text-sm md:text-base"
                        >
                            ดูวิดีโอเพิ่มเติมบน YouTube
                        </a>
                    </div>
                </div>

                {/* YouTube Grid */}
                <div>
                    <div className="text-center mb-6 md:mb-8">
                        <div className="inline-block px-4 py-1 bg-red-500/20 border border-red-500/40 rounded-full text-red-400 text-xs md:text-sm tracking-wider uppercase mb-3">
                            วิดีโอล่าสุด
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                            ฝากติดตาม <span className="text-red-500">YouTube</span>
                        </h2>
                        <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#8B0000] to-[#D4AF37] mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {youtubeVideos.map((videoId, i) => (
                            <div key={i} className="aspect-video bg-[#0D0D0D] rounded-xl overflow-hidden relative border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-colors">
                                <iframe
                                    src={`https://www.youtube.com/embed/${videoId}`}
                                    title={`YouTube video ${i + 1}`}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 'none' }}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
