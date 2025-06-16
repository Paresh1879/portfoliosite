"use client";

import React, { useState } from 'react';
import data from '../../data.json';

export const EmailButton = () => {
	const [showPopup, setShowPopup] = useState(false);

	const copyEmail = () => {
		if (data.email) {
			if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
				navigator.clipboard.writeText(data.email);
				setShowPopup(true);
				setTimeout(() => setShowPopup(false), 2000);
			} else {
				// Fallback for unsupported browsers
				const textarea = document.createElement('textarea');
				textarea.value = data.email;
				document.body.appendChild(textarea);
				textarea.select();
				try {
					document.execCommand('copy');
					setShowPopup(true);
					setTimeout(() => setShowPopup(false), 2000);
				} catch (err) {
					alert('Copy to clipboard is not supported in this browser');
				}
				document.body.removeChild(textarea);
			}
		}
	};

	if (!data.email) return null;

	return (
		<div className="relative">
			<button
				onClick={copyEmail}
				className="group flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-400/30 hover:border-blue-400/50 rounded-md transition-all duration-200 hover:scale-105"
			>
				<svg 
					className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" 
					fill="none" 
					stroke="currentColor" 
					viewBox="0 0 24 24"
				>
					<path 
						strokeLinecap="round" 
						strokeLinejoin="round" 
						strokeWidth={2} 
						d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" 
					/>
				</svg>
				<span className="text-white group-hover:text-white text-sm font-medium transition-colors">
					Let's Connect!
				</span>
			</button>
			
			{showPopup && (
				<div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md shadow-lg text-xs text-zinc-300 whitespace-nowrap z-10">
					Email copied to clipboard!
					<div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-800"></div>
				</div>
			)}
		</div>
	);
}; 