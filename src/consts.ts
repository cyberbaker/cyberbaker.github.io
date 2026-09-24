// Site-wide settings. Edit these to make the blog yours.

export const SITE_TITLE = 'The Cyber Baker';
export const SITE_TAGLINE = 'For defenders, and the people they defend.';
export const SITE_DESCRIPTION =
	'Clear, no-nonsense analysis of the latest cyber attacks, data breaches and threat actors, written for security professionals and curious readers alike.';
export const AUTHOR_NAME = 'Cyberbaker';

// Shown in the header and footer. Leave a value empty ('') to hide that link.
export const LINKEDIN_URL = 'https://www.linkedin.com/in/ben-baker-913643170/';
export const GITHUB_URL = '';

// Human-readable labels for the two kinds of post the pipeline writes.
export const TRACK_LABELS = {
	everyday: 'Everyday security',
	'deep-dive': 'Deep dive',
} as const;
