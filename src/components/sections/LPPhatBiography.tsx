import Image from "next/image";

export default function LPPhatBiography() {
    return (
        <section className="w-full bg-[#0D0D0D] py-16 md:py-24 px-4 relative overflow-hidden">
            {/* Sacred Background */}
            <div className="absolute inset-0 sacred-pattern opacity-40 pointer-events-none" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D4AF37]/5 to-transparent pointer-events-none" />
            
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-block px-5 py-2 bg-[#8B0000]/10 border border-[#8B0000]/30 rounded-full text-[#D4AF37] text-xs md:text-sm tracking-[0.2em] uppercase mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(139,0,0,0.2)]">
                        รำลึกพระคุณครู
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
                        ประวัติ<span className="text-gold-gradient inline-block transform hover:scale-105 transition-transform duration-500 cursor-default">หลวงพ่อพัฒน์</span>
                    </h2>
                    <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mt-2 opacity-60" />
                </div>

                <div className="premium-card rounded-3xl overflow-hidden border border-[#D4AF37]/20 bg-[#1A1A1A]/80 backdrop-blur-md shadow-2xl relative group">
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent pointer-events-none" />
                    
                    <div className="flex flex-col md:flex-row">
                        {/* Buddha Image */}
                        <div className="md:w-2/5 aspect-[4/5] md:aspect-auto relative min-h-[400px]">
                            <Image
                                src="/buddha.jpg"
                                alt="หลวงพ่อพัฒน์ ปุญญกาโม"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0D0D0D]/80" />
                            
                            {/* Image Border/Frame Effect */}
                            <div className="absolute inset-4 border border-[#D4AF37]/20 rounded-2xl pointer-events-none" />
                        </div>

                        {/* Biography Text */}
                        <div className="md:w-3/5 p-8 md:p-12 space-y-6 md:space-y-8 flex flex-col justify-center relative">
                            <div className="inline-block px-4 py-1.5 bg-[#8B0000] text-white text-xs md:text-sm rounded-full font-bold tracking-wide shadow-lg self-start">
                                เทพเจ้าแห่งปากน้ำโพ
                            </div>

                            <h3 className="text-2xl md:text-4xl font-bold text-[#D4AF37] leading-tight drop-shadow-md">
                                พระราชมงคลวัชราจารย์<br />
                                <span className="text-lg md:text-2xl font-light text-gray-300 mt-2 block tracking-wide"> (หลวงพ่อพัฒน์ ปุญญกาโม)</span>
                            </h3>

                            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                                พระเกจิชื่อดัง อดีตเจ้าอาวาสวัดห้วยด้วน จ.นครสวรรค์ ท่านเป็นพระเถระชั้นผู้ใหญ่ที่มีเมตตาบารมีสูง
                                ได้ละสังขารอย่างสงบ หลังเข้ารับการรักษาอาการอาพาธ ที่โรงพยาบาลกรุงเทพ 
                                เมื่อเวลา 01.35 น. ของวันศุกร์ที่ <strong className="text-white font-medium border-b border-[#D4AF37]/50">24 พฤศจิกายน 2566</strong>
                            </p>

                            <div className="grid grid-cols-2 gap-4 md:gap-6">
                                <div className="bg-[#0D0D0D]/50 p-6 rounded-2xl border border-[#D4AF37]/10 text-center group/stat hover:border-[#D4AF37]/30 transition-all">
                                    <div className="text-3xl md:text-4xl font-bold text-gold-gradient mb-1 group-hover/stat:scale-110 transition-transform">102 ปี</div>
                                    <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">สิริอายุ</div>
                                </div>
                                <div className="bg-[#0D0D0D]/50 p-6 rounded-2xl border border-[#D4AF37]/10 text-center group/stat hover:border-[#D4AF37]/30 transition-all">
                                    <div className="text-3xl md:text-4xl font-bold text-gold-gradient mb-1 group-hover/stat:scale-110 transition-transform">78 พรรษา</div>
                                    <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">พรรษา</div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4AF37] to-transparent rounded-full opacity-50" />
                                <p className="text-gray-400 text-sm md:text-base italic pl-6 leading-relaxed">
                                    "หลวงพ่อพัฒน์ ท่านได้ชื่อว่าเป็นพระปฏิบัติดี ปฏิบัติชอบ มีอาคมเข้มขลัง
                                    สร้างสาธารณกุศลมานักต่อนัก และมีชาวบ้านให้ความเคารพศรัทธา 
                                    เปรียบเสมือนร่มโพธิ์ร่มไทรของชาวปากน้ำโพ"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
