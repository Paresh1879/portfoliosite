import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import data from "../data.json";

const username = process.env.GITHUB_USERNAME || data.githubUsername;
const displayName = data.displayName || username;

/** @type {import('next').Metadata} */
export const metadata = {
	title: {
		default: displayName + "'s Portfolio - AI/ML Engineer",
		template: "%s | " + displayName + "'s Portfolio",
	},
	description: data.description || 'AI/ML Engineer passionate about computer vision, NLP, and building scalable machine learning systems.',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: [
			{
				url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨🏽‍💻</text></svg>",
				type: "image/svg+xml",
				rel: "icon",
			},
		{
			url: "/Image from iOS.jpg",
			sizes: "any",
			type: "image/jpeg",
			rel: "icon",
		},
	]
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : ''
				}`}
			>
				{children}
			</body>
		</html>
	);
}
