import Link from "next/link";
import Image from "next/image";
import React from "react";
import data from "../data.json";
import { Bio } from "./components/bio";
import LoadingIndicator from "./components/loading-indicator";
import ParticlesBackground from "./components/particles-background";

const navigation = [
];

export default function Home(props) {
    return (
		<LandingComponent />
	)
}

const UserIcon = () => {
	return (
		<Image alt='👨‍💻' width={100} height={100} src={data.avatarUrl} className="float-right rounded-full mx-4" />
	);
};

const UserText = () => {
	return (
		<div>
			<p>Hi, my name is Paresh Natarajan. Machine Learning Engineer. Computer Vision. Avid Sports lover. It's football not soccer.</p>
			<p className="mt-2 text-white">I'm building stuff at <a href="https://www.easelapps.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/30 hover:decoration-blue-300 transition-colors duration-200">Easel AI.</a></p>
		</div>
	);
};

const TryYourself = ({ customUsername }) => {
	const href = customUsername ? '/' : '/search';
	return <Link
		href={href}
		className="text-lg duration-500 text-zinc-500 hover:text-zinc-300 border-dashed p-2 rounded-sm border-2 border-zinc-500 hover:border-zinc-300"
	>
		{
			customUsername ? 'Showing: ' + customUsername + ', click to cancel ❌' : 'Try yourself'
		}
	</Link>;
};

const LandingComponent = () => {
	return (
		<div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-y-auto bg-linear-to-tl from-black via-zinc-600/20 to-black">
			<ParticlesBackground />
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-lg duration-500 text-zinc-500 hover:text-blue-400 transition-colors"
						>
							<span className="inline-flex items-center">
								{item.name} <LoadingIndicator />
							</span>
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-linear-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

			<h1 className="flex items-center z-10 text-4xl hover:scale-110 text-transparent duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text bg-white p-5">
				Paresh
				<UserIcon />
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-linear-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-2 text-center animate-fade-in">
				<h2 className="text-lg text-zinc-500">
					<div className="w-full h-px min-h-28">
						<UserText />
					</div>
				</h2>
			</div>

			{/* Profile Links Section */}
			<div className="flex flex-col sm:flex-row gap-6 mb-8 animate-fade-in">
				{/* GitHub Profile Link */}
				<a
					href="https://github.com/Paresh1879"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-4 px-8 py-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg transition-all duration-200 text-zinc-300 hover:text-white hover:border-blue-400/30 group shadow-2xl"
				>
					<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
					</svg>
					<div className="text-left">
						<div className="font-semibold text-lg group-hover:text-white transition-colors">
							GitHub
						</div>
					</div>
				</a>

				{/* Hugging Face Profile Link */}
				<a
					href="https://huggingface.co/Paresh1879"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-3 px-6 py-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg transition-all duration-200 text-zinc-300 hover:text-white hover:border-blue-400/30 group shadow-2xl"
				>
					<Image 
						src="/hf-logo-with-white-title.png" 
						alt="Hugging Face" 
						width={120} 
						height={32}
						className="h-8 w-auto object-contain"
					/>
					<div className="text-left">
						<div className="font-semibold text-lg group-hover:text-white transition-colors"> </div>
					</div>
				</a>
			</div>

			{/* Bio Section */}
			<div className="animate-fade-in">
				<Bio />
			</div>

		</div>
	);
}
