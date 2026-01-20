"use client";
import Image from "next/image";
import { Sparkles, Star, Shield, TrendingUp, Info, AlertCircle, Coins, Heart, Zap, CheckCircle } from "lucide-react";

export default function ArticleSection() {
    return (
        <section className="w-full bg-[#0D0D0D] py-16 md:py-24 px-4 relative overflow-hidden">
            {/* Sacred Background */}
            <div className="absolute inset-0 sacred-pattern opacity-30 pointer-events-none" />
            
            {/* Ambient Light */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-[#D4AF37]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-[#8B0000]/30 to-transparent" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16 relative">
                    <div className="inline-block px-5 py-2 border border-[#D4AF37]/40 bg-[#0D0D0D]/80 backdrop-blur-md rounded-full text-[#D4AF37] text-xs md:text-sm tracking-[0.2em] uppercase mb-6 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                        บทความพระเครื่อง
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
                        รุ่น <span className="text-gold-gradient inline-block transform hover:scale-105 transition-transform duration-500 cursor-default">พัฒน์ประเทืองทรัพย์</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
                        วัตถุมงคลเสริมโชคลาภ ความเจริญรุ่งเรือง จากหลวงพ่อพัฒน์ วัดห้วยด้วน
                    </p>
                    <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mt-8 opacity-60" />
                </div>

                {/* Featured Image */}
                <div className="relative mb-12 md:mb-20 group perspective-1000">
                    <div className="absolute -inset-10 bg-gradient-to-b from-[#D4AF37]/20 via-[#8B0000]/10 to-[#D4AF37]/5 rounded-[3rem] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                    
                    <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_50px_rgba(0,0,0,0.5)] max-w-md mx-auto transform transition-all duration-700 group-hover:rotate-x-2 group-hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" />
                        <Image
                            src="/buddha/S__33456184_0.jpg"
                            alt="พัฒน์ประเทืองทรัพย์"
                            width={500}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                        
                        {/* Golden Frame Overlay */}
                        <div className="absolute inset-0 border-[1px] border-[#D4AF37]/20 m-2 rounded-xl z-20 pointer-events-none" />
                        <div className="absolute inset-0 border-[1px] border-[#D4AF37]/10 m-3 rounded-lg z-20 pointer-events-none" />
                        
                        <div className="absolute bottom-6 left-0 right-0 z-20 text-center">
                            <p className="text-gold-gradient font-bold text-xl md:text-2xl drop-shadow-md tracking-wider">พัฒน์ประเทืองทรัพย์</p>
                            <div className="w-12 h-0.5 bg-[#D4AF37]/50 mx-auto mt-2 rounded-full" />
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <div className="space-y-8 md:space-y-12">
                    {/* Basic Info Card */}
                    <div className="premium-card rounded-2xl p-6 md:p-10 border border-[#D4AF37]/20 bg-[#1A1A1A]/60 backdrop-blur-md">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-8 flex items-center gap-4 border-b border-[#D4AF37]/10 pb-4">
                            <Info className="w-8 h-8 opacity-80" />
                            ข้อมูลพื้นฐาน
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { label: "ชื่อรุ่น", value: "พัฒน์ประเทืองทรัพย์", icon: "📿" },
                                { label: "พระเกจิผู้ปลุกเสก", value: "หลวงพ่อพัฒน์ ปุญฺญกาโม", icon: "🔸" },
                                { label: "วัด", value: "วัดห้วยด้วน อ.หนองบัว จ.นครสวรรค์", icon: "🛕" },
                                { label: "ปีที่สร้าง", value: "ประมาณ พ.ศ. 2565", icon: "📆" }
                            ].map((item, index) => (
                                <div key={index} className="bg-[#0D0D0D]/40 rounded-xl p-5 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-colors group">
                                    <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2">{item.label}</p>
                                    <p className="text-white font-bold text-lg group-hover:text-[#D4AF37] transition-colors">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Name Meaning Card */}
                    <div className="premium-card rounded-2xl p-6 md:p-10 border border-[#8B0000]/20 bg-gradient-to-br from-[#1A1A1A]/80 to-[#0D0D0D]/80 backdrop-blur-md">
                        <h3 className="text-2xl md:text-3xl font-bold text-gold-gradient mb-6 flex items-center gap-4">
                            <Sparkles className="w-8 h-8 text-[#D4AF37]" />
                            ที่มาชื่อรุ่นและความหมาย
                        </h3>
                        <div className="relative pl-6 border-l-2 border-[#D4AF37]/30">
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                                ชื่อ <strong className="text-[#D4AF37] font-medium">"พัฒน์ประเทืองทรัพย์"</strong> ประกอบคำว่า "พัฒน์" 
                                มีรากมาจากคำว่า "พัฒนา" หรือความเจริญรุ่งเรือง ส่วน "ประเทืองทรัพย์" หมายถึง 
                                <span className="bg-gradient-to-r from-[#D4AF37]/10 to-transparent px-2 py-0.5 rounded ml-1 text-white font-medium">ความรุ่งเรืองทางทรัพย์สินและโชคลาภ</span> 
                                ซึ่งสื่อถึงความเชื่อในการนำพาความมั่งคั่ง ความสำเร็จด้านฐานะและการงานให้แก่ผู้บูชา 
                                เหมาะสำหรับผู้ที่มุ่งหวังความเจริญทั้งด้านจิตใจและชีวิต
                            </p>
                        </div>
                    </div>

                    {/* Design & Materials Card */}
                    <div className="premium-card rounded-2xl p-6 md:p-10 border border-[#D4AF37]/20 bg-[#1A1A1A]/60 backdrop-blur-md">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-8 flex items-center gap-4 border-b border-[#D4AF37]/10 pb-4">
                            <Star className="w-8 h-8 opacity-80" />
                            รูปแบบเหรียญและมวลสาร
                        </h3>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                                    รูปแบบการผลิต
                                </h4>
                                <ul className="space-y-4 text-gray-300 text-sm md:text-base pl-2">
                                    <li className="flex items-start gap-4 group">
                                        <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30 mt-0.5 group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                                            <span className="text-xs">•</span>
                                        </div>
                                        <span className="flex-1 pt-0.5">เหรียญรุ่นนี้มีทั้ง <strong className="text-white group-hover:text-[#D4AF37] transition-colors">เหรียญหล่อและเหรียญปั๊ม</strong></span>
                                    </li>
                                    <li className="flex items-start gap-4 group">
                                        <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30 mt-0.5 group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                                            <span className="text-xs">•</span>
                                        </div>
                                        <span className="flex-1 pt-0.5">มีการใช้มวลสารศักดิ์สิทธิ์รวมจากเกจิชื่อดัง <strong className="text-white group-hover:text-[#D4AF37] transition-colors">139 เกจิทั่วไทย</strong></span>
                                    </li>
                                    <li className="flex items-start gap-4 group">
                                        <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30 mt-0.5 group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                                            <span className="text-xs">•</span>
                                        </div>
                                        <span className="flex-1 pt-0.5">งานออกแบบเป็นผลงานของ <strong className="text-white group-hover:text-[#D4AF37] transition-colors">ศิลปินช่างอ๊อด "มือแกะเทวดา"</strong></span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="pt-6 border-t border-[#D4AF37]/10">
                                <h4 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                                    มวลสารหลัก
                                </h4>
                                <div className="bg-[#D4AF37]/5 rounded-xl p-6 border border-[#D4AF37]/20 relative overflow-hidden">
                                     <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed relative z-10">
                                        ชนวนมวลสารศักดิ์สิทธิ์ <strong className="text-[#D4AF37] text-lg mx-1">108 มวลสาร</strong> จากพระเกจิ 
                                        และโลหะมงคลชนวนจากพิธีเททององค์หลวงพ่อพัฒน์ขนาดใหญ่
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Purpose Card */}
                    <div className="premium-card rounded-2xl p-6 md:p-10 border border-[#D4AF37]/20 bg-[#1A1A1A]/60 backdrop-blur-md">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-8 flex items-center gap-4">
                            <TrendingUp className="w-8 h-8 opacity-80" />
                            จุดประสงค์การจัดสร้าง
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { text: "พุทธบูชาเสริมมงคลชีวิต", icon: Heart },
                                { text: "ค้าขายดี มีโชคลาภ", icon: Coins },
                                { text: "ความเจริญรุ่งเรือง", icon: Zap },
                                { text: "แคล้วคลาดปลอดภัย", icon: Shield }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 bg-[#0D0D0D]/60 rounded-xl p-5 border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D4AF37]/5 group">
                                    <item.icon className="w-8 h-8 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
                                    <p className="text-gray-300 text-base font-medium group-hover:text-white transition-colors">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Buddha Properties Card */}
                    <div className="premium-card rounded-2xl p-6 md:p-10 border border-[#8B0000]/30 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] backdrop-blur-md overflow-hidden relative">
                         {/* Background glow */}
                        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#8B0000]/10 rounded-full blur-[80px] pointer-events-none" />
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-gold-gradient mb-8 flex items-center gap-4 relative z-10">
                            <Shield className="w-8 h-8 text-[#D4AF37]" />
                            พุทธคุณและความเชื่อ
                        </h3>
                        
                        <p className="text-gray-400 text-sm mb-6 uppercase tracking-widest pl-1">ในวงการผู้บูชาพระเครื่องรุ่นนี้มักเชื่อว่า:</p>
                        
                        <div className="space-y-4 relative z-10">
                            {[
                                { text: "ช่วยเรื่อง โชคลาภ ค้าขายดี และความเจริญทางการงาน", highlight: "โชคลาภ ค้าขายดี" },
                                { text: "ปรับพลังชีวิตให้ดีขึ้น และเสริมดวงชะตา", highlight: "เสริมดวงชะตา" },
                                { text: "แคล้วคลาด ปลอดภัยจากอันตรายต่างๆ", highlight: "แคล้วคลาด ปลอดภัย" },
                                { text: "เป็นเครื่องเตือนจิตให้ตั้งมั่นในการทำความดีและปฏิบัติธรรม", highlight: "ปฏิบัติธรรม" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 text-gray-300 text-base md:text-lg p-3 rounded-lg hover:bg-[#D4AF37]/5 transition-colors border-l-2 border-transparent hover:border-[#D4AF37]">
                                    <CheckCircle className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                                    <p dangerouslySetInnerHTML={{ __html: item.text.replace(item.highlight, `<strong class="text-white font-medium border-b border-[#D4AF37]/30 pb-0.5">${item.highlight}</strong>`) }} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="flex items-start gap-4 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-2xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#D4AF37]/30 rounded-tr-lg" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#D4AF37]/30 rounded-bl-lg" />
                        
                        <AlertCircle className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed tracking-wide">
                            <strong className="text-[#D4AF37] text-base block mb-2 font-bold tracking-wider">หมายเหตุ:</strong> 
                            เรื่องพุทธคุณเป็นความเชื่อและอาศัยศรัทธาเป็นหลัก ซึ่งแต่ละบุคคลอาจมีประสบการณ์ต่างกันไป การบูชาพระควรประกอบคู่กับการทำความดี
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
