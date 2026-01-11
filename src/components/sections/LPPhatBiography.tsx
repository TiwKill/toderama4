import Image from "next/image";

export default function LPPhatBiography() {
    return (
        <section className="w-full bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] py-12 md:py-20 px-4 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="inline-block px-4 py-1 bg-[#8B0000]/20 border border-[#8B0000]/40 rounded-full text-[#D4AF37] text-xs md:text-sm tracking-wider uppercase mb-3">
                        รำลึกพระคุณครู
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                        ประวัติ<span className="text-[#D4AF37]">หลวงพ่อพัฒน์</span>
                    </h2>
                    <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] mx-auto rounded-full" />
                </div>

                <div className="premium-card rounded-2xl overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        {/* Buddha Image */}
                        <div className="md:w-1/3 aspect-square md:aspect-auto relative min-h-[250px] md:min-h-0">
                            <Image
                                src="/buddha/S__33456157_0.jpg"
                                alt="หลวงพ่อพัฒน์ ปุญญกาโม"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0D0D0D]/50" />
                        </div>

                        {/* Biography Text */}
                        <div className="md:w-2/3 p-5 md:p-8 space-y-4 md:space-y-6">
                            <div className="inline-block px-3 py-1 bg-[#8B0000] text-white text-xs md:text-sm rounded-full font-medium">
                                เทพเจ้าแห่งปากน้ำโพ
                            </div>

                            <h3 className="text-lg md:text-2xl font-bold text-[#D4AF37]">
                                พระราชมงคลวัชราจารย์<br className="md:hidden" />
                                <span className="text-base md:text-xl font-normal text-gray-300"> (หลวงพ่อพัฒน์ ปุญญกาโม)</span>
                            </h3>

                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                พระเกจิชื่อดัง อดีตเจ้าอาวาสวัดห้วยด้วน จ.นครสวรรค์ ได้ละสังขาร
                                หลังเข้ารับการรักษาอาการอาพาธ ที่โรงพยาบาลกรุงเทพ เมื่อเวลา 01.35 น.
                                ของวันศุกร์ที่ <strong className="text-white">24 พฤศจิกายน 2566</strong>
                            </p>

                            <div className="grid grid-cols-2 gap-3 md:gap-4">
                                <div className="bg-[#1A1A1A] p-3 md:p-4 rounded-xl border border-[#D4AF37]/20 text-center">
                                    <div className="text-xl md:text-3xl font-bold text-[#D4AF37]">102 ปี</div>
                                    <div className="text-gray-400 text-xs md:text-sm">อายุ</div>
                                </div>
                                <div className="bg-[#1A1A1A] p-3 md:p-4 rounded-xl border border-[#D4AF37]/20 text-center">
                                    <div className="text-xl md:text-3xl font-bold text-[#D4AF37]">78 พรรษา</div>
                                    <div className="text-gray-400 text-xs md:text-sm">พรรษา</div>
                                </div>
                            </div>

                            <p className="text-gray-400 text-xs md:text-sm italic border-l-2 border-[#D4AF37]/50 pl-4">
                                หลวงพ่อพัฒน์ ท่านได้ชื่อว่าเป็นพระปฏิบัติดี ปฏิบัติชอบ มีอาคมเข้มขลัง
                                สร้างสาธารณกุศลมานักต่อนัก และมีเมตตาสูง เป็น &quot;พ่อ&quot; ที่มีแต่ให้
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
