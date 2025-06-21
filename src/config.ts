import type {
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "IsLuoHui",
	subtitle: "Blog",
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "Drawn By XKError", // Credit text to be displayed
			url: "https://space.bilibili.com/512848704", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 3, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		// {
		// 	name: "GitHub",
		// 	url: "https://github.com/IsLuoHui/LuoHuiBlog",
		// 	external: true,
		// },
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "洛洃",
	bio: "𝙁𝙤𝙧 𝘼 𝘽𝙚𝙩𝙩𝙚𝙧 𝙁𝙪𝙩𝙪𝙧𝙚.",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:x-twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://x.com/IsLuoHui", // Use absolute URLs for external links
		},
		// {
		// 	name: "qq",
		// 	icon: "fa6-brands:qq",
		// 	url: "https://qm.qq.com/q/PjbRgg4tig",
		// },
		{
			name: "Bilibili",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/3493110856288400",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/IsLuoHui",
		},
		// {
		// 	name: "Steam",
		// 	icon: "fa6-brands:steam",
		// 	url: "https://steamcommunity.com/id/IsLuoHui/",
		// },
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
