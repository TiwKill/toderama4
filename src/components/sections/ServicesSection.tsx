import Image from "next/image";
import { contactInfo } from "@/data/amulets";

export default function ServicesSection() {
    const services = [
        {
            image: "/services/rent.png",
            badge: "บริการยอดนิยม",
            badgeColor: "bg-[#8B0000]",
            title: "รับเช่าพระเครื่อง",
            description: "รับเช่าพระเครื่อง พระบูชา เหรียญเกจิคณาจารย์ เครื่องรางของขลัง และของสะสมทุกประเภท",
            highlight: "ให้ราคาสูง จ่ายเงินสดทันที",
            features: ["ให้ราคาสูงกว่าท้องตลาด", "จ่ายเงินสดทันที", "ประเมินราคาฟรี"],
            buttonText: "ติดต่อรับเช่า",
            buttonVariant: "red" as const,
        },
        {
            image: "/services/for-rent.png",
            badge: "พระแท้ 100%",
            badgeColor: "bg-[#D4AF37] text-black",
            title: "ให้เช่าพระเครื่อง",
            description: "มีพระเครื่องแท้ พระบูชา เครื่องรางของขลังหลากหลายให้เลือกเช่า",
            highlight: "การันตีคุณภาพ พร้อมบัตรรับรอง",
            features: ["พระแท้ 100% มีใบรับรอง", "ราคายุติธรรม", "จัดส่งทั่วประเทศ"],
            buttonText: "ดูพระให้เช่า",
            buttonVariant: "gold" as const,
        },
        {
            image: "/services/open-for-auction.png",
            badge: "ประมูลสด",
            badgeColor: "bg-gradient-to-r from-[#8B0000] to-[#D4AF37]",
            title: "เปิดประมูลพระเครื่อง",
            description: "เปิดประมูลพระเครื่องหายาก พระกรุ พระเกจิดัง",
            highlight: "ประมูลสดผ่าน Facebook Live ทุกสัปดาห์",
            features: ["ประมูลสดทุกสัปดาห์", "พระแท้ มีใบรับรอง", "ราคาเริ่มต้นถูก"],
            buttonText: "ติดตามประมูล",
            buttonVariant: "dark" as const,
            link: contactInfo.facebook,
        },
    ];

    return (
        <section className="w-full bg-[#1A1A1A] py-12 md:py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="inline-block px-4 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-xs md:text-sm tracking-wider uppercase mb-3">
                        บริการครบวงจร
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                        บริการของเรา
                    </h2>
                    <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#8B0000] to-[#D4AF37] mx-auto rounded-full" />
                </div>

                <div className="space-y-6 md:space-y-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 md:gap-8 premium-card rounded-2xl p-4 md:p-6`}
                        >
                            {/* Image */}
                            <div className="flex-1 w-full relative overflow-hidden rounded-xl border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 transition-colors">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center md:text-left space-y-3 md:space-y-4">
                                <div className={`inline-block px-3 py-1 ${service.badgeColor} text-white text-xs md:text-sm rounded-full font-medium`}>
                                    {service.badge}
                                </div>
                                <h3 className="text-xl md:text-3xl font-bold text-[#D4AF37]">{service.title}</h3>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                    {service.description} <strong className="text-white">{service.highlight}</strong>
                                </p>
                                <ul className="text-gray-400 space-y-1 md:space-y-2 text-sm md:text-base">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 justify-center md:justify-start">
                                            <span className="text-[#D4AF37]">✓</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={service.link || contactInfo.lineUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-block px-5 md:px-8 py-2 md:py-3 font-bold rounded-full shadow-lg transition-all text-sm md:text-base ${
                                        service.buttonVariant === 'red' 
                                            ? 'bg-gradient-to-r from-[#8B0000] to-[#B8860B] text-white hover:shadow-red-500/20' 
                                            : service.buttonVariant === 'gold'
                                            ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black hover:shadow-yellow-500/20'
                                            : 'bg-[#2D2D2D] text-white border border-[#D4AF37]/30 hover:border-[#D4AF37]'
                                    }`}
                                >
                                    {service.buttonText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
