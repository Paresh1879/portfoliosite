import Link from "next/link";
import Image from "next/image";
import { getUserOrganizations } from "../data";

export const ProfileOrganizations = async ({ username }) => {

	const organizations = (await getUserOrganizations(username)).data.user?.organizations.nodes;

	return (
		<p className="text-zinc-300 leading-relaxed text-sm md:text-base">
			I'm building stuff at{' '}
			<a
				href="https://www.easelapps.ai/"
				target="_blank"
				rel="noopener noreferrer"
				className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/30 hover:decoration-blue-300 transition-colors duration-200"
			>
				Easel AI.
			</a>
		</p>
	);
};
