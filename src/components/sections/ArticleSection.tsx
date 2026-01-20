"use client";
import Image from "next/image";
import { Sparkles, Star, Shield, TrendingUp, Info, AlertCircle, Coins, Heart, Zap, CheckCircle } from "lucide-react";

export default function ArticleSection() {
    return (
        <section className="w-full bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] py-12 md:py-20 px-4 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
            <div className="absolute -right-40 top-20 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl" />
            <div className="absolute -left-40 bottom-20 w-80 h-80 bg-[#8B0000]/5 rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="inline-block px-4 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-xs md:text-sm tracking-wider uppercase mb-3">
                        บทความพระเครื่อง
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                        รุ่น <span className="text-[#D4AF37]">พัฒน์ประเทืองทรัพย์</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                        วัตถุมงคลเสริมโชคลาภ ความเจริญรุ่งเรือง จากหลวงพ่อพัฒน์ วัดห้วยด้วน
                    </p>
                    <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] mx-auto rounded-full mt-4" />
                </div>

                {/* Featured Image */}
                <div className="relative mb-8 md:mb-12 group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/30 via-[#8B0000]/20 to-[#D4AF37]/30 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30 shadow-2xl max-w-md mx-auto">
                        <Image
                            src="/buddha/S__33456184_0.jpg"
                            alt="พัฒน์ประเทืองทรัพย์"
                            width={400}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                            <p className="text-[#D4AF37] font-bold text-lg md:text-xl text-center">พัฒน์ประเทืองทรัพย์</p>
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <div className="space-y-6 md:space-y-8">
                    {/* Basic Info Card */}
                    <div className="premium-card rounded-2xl p-5 md:p-8 border border-[#D4AF37]/20 bg-[#1A1A1A]/80 backdrop-blur-sm">
                        <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-6 flex items-center gap-3">
                            <Info className="w-6 h-6" />
                            ข้อมูลพื้นฐาน
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-[#0D0D0D]/50 rounded-xl p-4 border border-[#D4AF37]/10">
                                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">ชื่อรุ่น</p>
                                <p className="text-white font-bold">พัฒน์ประเทืองทรัพย์</p>
                            </div>
                            <div className="bg-[#0D0D0D]/50 rounded-xl p-4 border border-[#D4AF37]/10">
                                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">พระเกจิผู้ปลุกเสก</p>
                                <p className="text-white font-bold">หลวงพ่อพัฒน์ ปุญฺญกาโม</p>
                            </div>
                            <div className="bg-[#0D0D0D]/50 rounded-xl p-4 border border-[#D4AF37]/10">
                                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">วัด</p>
                                <p className="text-white font-bold">วัดห้วยด้วน อ.หนองบัว จ.นครสวรรค์</p>
                            </div>
                            <div className="bg-[#0D0D0D]/50 rounded-xl p-4 border border-[#D4AF37]/10">
                                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">ปีที่สร้าง</p>
                                <p className="text-white font-bold">ประมาณ พ.ศ. 2565</p>
                            </div>
                        </div>
                    </div>

                    {/* Name Meaning Card */}
                    <div className="premium-card rounded-2xl p-5 md:p-8 border border-[#8B0000]/20 bg-[#1A1A1A]/80 backdrop-blur-sm">
                        <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3">
                            <Sparkles className="w-6 h-6" />
                            ที่มาชื่อรุ่นและความหมาย
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                            ชื่อ <strong className="text-[#D4AF37]">"พัฒน์ประเทืองทรัพย์"</strong> ประกอบคำว่า "พัฒน์" 
                            มีรากมาจากคำว่า "พัฒนา" หรือความเจริญรุ่งเรือง ส่วน "ประเทืองทรัพย์" หมายถึง 
                            <strong className="text-white"> ความรุ่งเรืองทางทรัพย์สินและโชคลาภ</strong> 
                            ซึ่งสื่อถึงความเชื่อในการนำพาความมั่งคั่ง ความสำเร็จด้านฐานะและการงานให้แก่ผู้บูชา 
                            เหมาะสำหรับผู้ที่มุ่งหวังความเจริญทั้งด้านจิตใจและชีวิต
                        </p>
                    </div>

                    {/* Design & Materials Card */}
                    <div className="premium-card rounded-2xl p-5 md:p-8 border border-[#D4AF37]/20 bg-[#1A1A1A]/80 backdrop-blur-sm">
                        <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3">
                            <Star className="w-6 h-6" />
                            รูปแบบเหรียญและมวลสาร
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-white font-bold mb-2">รูปแบบการผลิต</h4>
                                <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#D4AF37]">•</span>
                                        เหรียญรุ่นนี้มีทั้ง <strong className="text-white">เหรียญหล่อและเหรียญปั๊ม</strong>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#D4AF37]">•</span>
                                        มีการใช้มวลสารศักดิ์สิทธิ์รวมจากเกจิชื่อดัง <strong className="text-[#D4AF37]">139 เกจิทั่วไทย</strong>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#D4AF37]">•</span>
                                        งานออกแบบเป็นผลงานของ <strong className="text-white">ศิลปินช่างอ๊อด "มือแกะเทวดา"</strong>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-2">มวลสารหลัก</h4>
                                <div className="bg-[#D4AF37]/10 rounded-xl p-4 border border-[#D4AF37]/20">
                                    <p className="text-gray-300 text-sm md:text-base">
                                        ชนวนมวลสารศักดิ์สิทธิ์ <strong className="text-[#D4AF37]">108 มวลสาร</strong> จากพระเกจิ 
                                        และโลหะมงคลชนวนจากพิธีเททององค์หลวงพ่อพัฒน์ขนาดใหญ่
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Purpose Card */}
                    <div className="premium-card rounded-2xl p-5 md:p-8 border border-[#D4AF37]/20 bg-[#1A1A1A]/80 backdrop-blur-sm">
                        <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3">
                            <TrendingUp className="w-6 h-6" />
                            จุดประสงค์การจัดสร้าง
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="flex items-center gap-3 bg-[#0D0D0D]/50 rounded-xl p-4 border border-[#D4AF37]/10">
                                <Heart className="w-6 h-6 text-[#D4AF37]" />
                                <p className="text-gray-300 text-sm md:text-base">พุทธบูชาเสริมมงคลชีวิต</p>
                            </div>
                            <div className="flex items-center gap-3 bg-[#0D0D0D]/50 rounded-xl p-4 border border-[#D4AF37]/10">
                                <Coins className="w-6 h-6 text-[#D4AF37]" />
                                <p className="text-gray-300 text-sm md:text-base">ค้าขายดี มีโชคลาภ</p>
                            </div>
                            <div className="flex items-center gap-3 bg-[#0D0D0D]/50 rounded-xl p-4 border border-[#D4AF37]/10">
                                <Zap className="w-6 h-6 text-[#D4AF37]" />
                                <p className="text-gray-300 text-sm md:text-base">ความเจริญรุ่งเรือง</p>
                            </div>
                            <div className="flex items-center gap-3 bg-[#0D0D0D]/50 rounded-xl p-4 border border-[#D4AF37]/10">
                                <Shield className="w-6 h-6 text-[#D4AF37]" />
                                <p className="text-gray-300 text-sm md:text-base">แคล้วคลาดปลอดภัย</p>
                            </div>
                        </div>
                    </div>

                    {/* Buddha Properties Card */}
                    <div className="premium-card rounded-2xl p-5 md:p-8 border border-[#8B0000]/30 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] backdrop-blur-sm">
                        <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3">
                            <Shield className="w-6 h-6" />
                            พุทธคุณและความเชื่อ
                        </h3>
                        <div className="space-y-3">
                            <p className="text-gray-400 text-sm mb-4">ในวงการผู้บูชาพระเครื่องรุ่นนี้มักเชื่อว่า:</p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                                    <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                                    <p>ช่วยเรื่อง <strong className="text-white">โชคลาภ ค้าขายดี</strong> และความเจริญทางการงาน</p>
                                </div>
                                <div className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                                    <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                                    <p>ปรับพลังชีวิตให้ดีขึ้น และ<strong className="text-white">เสริมดวงชะตา</strong></p>
                                </div>
                                <div className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                                    <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                                    <p><strong className="text-white">แคล้วคลาด ปลอดภัย</strong>จากอันตรายต่างๆ</p>
                                </div>
                                <div className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                                    <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                                    <p>เป็นเครื่องเตือนจิตให้ตั้งมั่นในการทำความดีและ<strong className="text-white">ปฏิบัติธรรม</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="flex items-start gap-3 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-xl p-4">
                        <AlertCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                            <strong className="text-[#D4AF37]">หมายเหตุ:</strong> เรื่องพุทธคุณเป็นความเชื่อและอาศัยศรัทธาเป็นหลัก 
                            ซึ่งแต่ละบุคคลอาจมีประสบการณ์ต่างกันไป การบูชาพระควรประกอบคู่กับการทำความดี
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
