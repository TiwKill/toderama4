import type { Metadata, Viewport } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
    subsets: ["thai", "latin"],
    weight: ["300", "400", "600", "700"],
    variable: '--font-kanit'
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#0D0D0D',
};

export const metadata: Metadata = {
    metadataBase: new URL('https://toderama4.vercel.app'),
    // Basic SEO
    title: {
        default: "โต๊ดพระราม4 พระเครื่อง | รับเช่าพระ ให้ราคาสูง จ่ายเงินสดทันที",
        template: "%s | โต๊ดพระราม4 พระเครื่อง"
    },
    description: "โต๊ดพระราม4 พระเครื่อง ผู้เชี่ยวชาญด้านพระเครื่อง พระบูชา เครื่องราง ของสะสม รับเช่าพระแท้ ให้ราคาสูง จ่ายเงินสดทันที ประเมินราคาฟรี ประสบการณ์กว่า 20 ปี ติดต่อ Line: @t9888 โทร: 092-379-9944 ย่านพระราม4 กรุงเทพฯ",
    keywords: [
        "โต๊ดพระราม4",
        "โต๊ดพระราม4 พระเครื่อง",
        "โต๊ด พระราม4",
        "โต๊ด พระราม 4",
        "รับเช่าพระเครื่อง",
        "รับซื้อพระ",
        "รับเช่าพระ",
        "พระเครื่อง",
        "พระบูชา",
        "เครื่องราง",
        "พระแท้",
        "ขายพระ",
        "เช่าพระ",
        "รับซื้อพระเครื่อง",
        "ประมูลพระ",
        "พระเครื่องแท้",
        "รับเช่าพระ กรุงเทพ",
        "รับซื้อของโบราณ",
        "เหรียญเกจิ",
        "พระกรุ"
    ],
    authors: [{ name: "โต๊ดพระราม4 พระเครื่อง" }],
    creator: "โต๊ดพระราม4",
    publisher: "โต๊ดพระราม4 พระเครื่อง",

    // Robots
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    // Verification - สำคัญมากสำหรับการทำให้ Google เจอเว็บเร็วขึ้น
    // นำโค้ดจาก Google Search Console มาใส่ที่นี่
    verification: {
        google: 'qGIPMpnmF1JOoZnXwvCWrEhB1SsTbJZczjqkHpkLxig',
    },

    // Open Graph
    openGraph: {
        title: "โต๊ดพระราม4 พระเครื่อง | รับเช่าพระ ให้ราคาสูง จ่ายเงินสดทันที",
        description: "โต๊ดพระราม4 พระเครื่อง ผู้เชี่ยวชาญรับเช่าพระเครื่อง พระบูชา เครื่องราง ให้ราคาสูง จ่ายเงินสดทันที ประเมินราคาฟรี ประสบการณ์กว่า 20 ปี",
        type: "website",
        url: 'https://toderama4.vercel.app',
        locale: "th_TH",
        siteName: "โต๊ดพระราม4 พระเครื่อง",
        images: [
            {
                url: "/banner.jpg",
                width: 1200,
                height: 630,
                alt: "โต๊ดพระราม4 พระเครื่อง - รับเช่าพระ ให้ราคาสูง",
            },
        ],
    },

    // Twitter Card
    twitter: {
        card: "summary_large_image",
        title: "โต๊ดพระราม4 พระเครื่อง | รับเช่าพระ ให้ราคาสูง",
        description: "ผู้เชี่ยวชาญรับเช่าพระเครื่อง พระบูชา เครื่องราง ให้ราคาสูง จ่ายเงินสดทันที ประสบการณ์กว่า 20 ปี",
        images: ["/banner.jpg"],
    },

    // Alternate languages
    alternates: {
        canonical: "/",
        languages: {
            "th-TH": "/",
        },
    },

    // Category
    category: "พระเครื่อง",

    // Other
    formatDetection: {
        telephone: true,
        email: true,
        address: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="th">
            <head>
                {/* Preconnect to important origins */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.jpg" />
                <link rel="manifest" href="/manifest.json" />

                {/* Additional SEO meta tags */}
                <meta name="geo.region" content="TH-10" />
                <meta name="geo.placename" content="กรุงเทพมหานคร" />
                <meta name="geo.position" content="13.7326587;100.5498095" />
                <meta name="ICBM" content="13.7326587, 100.5498095" />
            </head>
            <body className={kanit.className}>{children}</body>
        </html>
    );
}