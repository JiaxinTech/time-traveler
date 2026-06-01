import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "京都三日旅行攻略",
  description: "清水寺、伏见稻荷、岚山竹林和锦市场的三日京都旅行路线。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
