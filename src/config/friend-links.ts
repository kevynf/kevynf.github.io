export interface FriendLink {
  name: string;
  link?: string;
  url?: string;
  avatar?: string;
  desc?: string;
  description?: string;
}

export const FRIEND_LINKS: FriendLink[] = [
  {
    name: "Axi's Blog",
    desc: "一只可爱小猫",
    link: "https://axi404.top",
    avatar: "https://axi404.top/avatar/avatar.png",
  },
  {
    name: "Danny's Blog",
    desc: "Cogito, ergo sum.",
    link: "https://dannyshi.pages.dev/",
    avatar: "https://dannyshi.pages.dev/head.jpg",
  },
  {
    name: "xjhjtzac 的 Blog",
    desc: "待到山花烂漫时",
    link: "https://xjhjtz.github.io",
    avatar: "https://cdn.jsdmirror.com/gh/xjhjtz/xjhjtzac-photos-bed@main/avatar.webp",
  },
];
