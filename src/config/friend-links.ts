export interface FriendLink {
	name: string;
	link?: string;
	url?: string;
	avatar?: string;
	desc?: string;
	description?: string;
	rss?: string;
}

export const FRIEND_LINKS: FriendLink[] = [
	{
		name: "Axi's Blog",
		desc: '一只可爱小猫',
		link: 'https://axi404.top',
		avatar: 'https://axi404.top/avatar/avatar.png',
	},
];
