import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg-gray-500 text-white" >{children}</body>
		</html>
	);
}
