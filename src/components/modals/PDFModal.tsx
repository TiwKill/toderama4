"use client";
import { X } from "lucide-react";
import { companyInfo } from "@/data/amulets";

interface PDFModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PDFModal({ isOpen, onClose }: PDFModalProps) {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-sm" 
            onClick={onClose}
        >
            <div 
                className="bg-[#1A1A1A] rounded-2xl max-w-4xl w-full h-[85vh] p-3 md:p-4 relative border border-[#D4AF37]/30 shadow-2xl" 
                onClick={e => e.stopPropagation()}
            >
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[#D4AF37] font-bold text-sm md:text-base">
                        ใบจดทะเบียนบริษัท - {companyInfo.name}
                    </h3>
                    <button 
                        onClick={onClose} 
                        className="w-8 h-8 bg-[#2D2D2D] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#D4AF37] transition-all"
                    >
                        <X size={18} />
                    </button>
                </div>
                <iframe 
                    src={companyInfo.pdfPath}
                    className="w-full h-[calc(100%-3rem)] rounded-xl border border-[#D4AF37]/10"
                    title="ใบจดทะเบียนบริษัท"
                />
            </div>
        </div>
    );
}
