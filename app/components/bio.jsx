import React from 'react';
import data from '../../data.json';
import { EmailButton } from './email-button';
import Image from 'next/image';

export const Bio = () => {
	if (!data.bio) return null;

	// Function to parse markdown-style links and render them as proper links
	const renderWithLinks = (text) => {
		// First handle the existing Easel AI link
		const parts = text.split('Easel AI').map((part, i, arr) => {
			if (i < arr.length - 1) {
				return (
					<React.Fragment key={i}>
						{renderMarkdownLinks(part)}
						<a 
							href="https://www.easelapps.ai/" 
							target="_blank" 
							rel="noopener noreferrer"
							className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/30 hover:decoration-blue-300 transition-colors duration-200"
						>
							Easel AI
						</a>
					</React.Fragment>
				);
			}
			return renderMarkdownLinks(part);
		});
		return parts;
	};

	// Function to parse markdown-style links [text](url)
	const renderMarkdownLinks = (text) => {
		const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
		const parts = [];
		let lastIndex = 0;
		let match;

		while ((match = linkRegex.exec(text)) !== null) {
			// Add text before the link
			if (match.index > lastIndex) {
				parts.push(text.slice(lastIndex, match.index));
			}

			// Add the link
			parts.push(
				<a
					key={match.index}
					href={match[2]}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/30 hover:decoration-blue-300 transition-colors duration-200"
				>
					{match[1]}
				</a>
			);

			lastIndex = match.index + match[0].length;
		}

		// Add remaining text
		if (lastIndex < text.length) {
			parts.push(text.slice(lastIndex));
		}

		return parts.length > 0 ? parts : text;
	};

	// Split bio into paragraphs for better formatting
	const paragraphs = data.bio.split('\n\n');

	return (
		<div className="w-full max-w-4xl mx-auto px-6 mt-2 mb-8">
			<div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-8 shadow-2xl hover:border-blue-400/30 transition-all duration-200">
				<div className="space-y-4">
					{paragraphs.map((paragraph, index) => (
						<p key={index} className="text-zinc-300 leading-relaxed text-sm md:text-base">
							{renderWithLinks(paragraph)}
						</p>
					))}
				</div>
				<div className="mt-6 pt-4 border-t border-zinc-700">
					<div className="flex items-center justify-between">
						<p className="text-zinc-500 text-xs text-center italic">
							Building at the intersection of AI, vision, and scale
						</p>
						<div className="flex items-center gap-3">
							<a
								href="https://www.linkedin.com/in/pareshns99/"
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-400/30 hover:border-blue-400/50 rounded-md transition-all duration-200 hover:scale-105"
							>
								<img 
									src="/linkedin-icon-144.png" 
									alt="LinkedIn" 
									width="20" 
									height="20"
									className="w-5 h-5 group-hover:scale-110 transition-transform"
								/>
								<span className="text-white group-hover:text-white text-sm font-medium transition-colors hidden sm:inline">
									LinkedIn
								</span>
							</a>
							<EmailButton />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}; 