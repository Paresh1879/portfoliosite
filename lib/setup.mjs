import { promises as fs } from 'fs';
import path from 'path';
import dotenv from 'dotenv';

const data = {
	description: "My octo projects",
	githubUsername: "octocat",
	avatarUrl: "",
	displayName: "",
	email: "",
	socials: {},
};

(async () => {
	dotenv.config({ path: path.join(process.cwd(), '.env') });
	dotenv.config({ path: path.join(process.cwd(), '.env.local') });

	// Skip template setup for production deployments
	if (process.env.NODE_ENV === 'production' || process.env.VERCEL === '1') {
		console.log('🚀 Production deployment detected, skipping template setup');
		return;
	}

	// Only require GH_TOKEN for development/template mode
	if (!process.env.GH_TOKEN && process.env.NODE_ENV !== 'production') {
		console.log('⚠️  GH_TOKEN not set, skipping GitHub integration');
		return;
	}

	if (process.env.IS_TEMPLATE === 'false') {
		// This means it's not the template, it's my legit site
		// I orderride the env variable for my site. This means that when
		// folks clone this repo for the first time, it will delete my personal content
		return;
	}

	// Check if this is still the template (jirihofman's original)
	try {
		const dataPath = path.join(process.cwd(), 'data.json');
		const dataJson = JSON.parse(await fs.readFile(dataPath, 'utf-8'));
		
		if (dataJson.githubUsername !== 'jirihofman') {
			// This means it's not the template, it's someone's legit site
			return;
		}
	} catch (error) {
		console.log('⚠️  Could not read data.json, skipping template setup');
		return;
	}

	console.log('⚠️  This is still a template. Please update data.json file and set IS_TEMPLATE to false in .env.local to use this template');
	console.log('⚙️  Reverting personal data to template data...');

	// Remove favicon.ico
	try {
		const faviconPath = path.join(process.cwd(), 'public', 'favicon.ico');
		await fs.unlink(faviconPath);
		console.log('⚙️  Removed favicon.ico');
	} catch (error) {
		console.log('⚠️  Could not remove favicon.ico (may not exist)');
	}

	// Open data.json, merge it with data for octocat and save it to disk.
	try {
		const dataPath = path.join(process.cwd(), 'data.json');
		const dataJson = JSON.parse(await fs.readFile(dataPath, 'utf-8'));
		const newData = { ...dataJson, ...data };
		// Write it back to disk.
		await fs.writeFile(dataPath, JSON.stringify(newData, null, 4));
		console.log('⚙️  Reverted to template data (using octocat).');
	} catch (error) {
		console.log('⚠️  Could not update data.json');
	}
})();
