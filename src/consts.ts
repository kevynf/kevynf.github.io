// 站点基础信息，用于页头、SEO、RSS、站点地图和页脚。
export const SITE_TITLE = "K3vyn's Blog";
export const SITE_DESCRIPTION = "Welcome to my Blog!";
export const SITE_URL = "https://blog.kevy.net";
export const COPYRIGHT_NAME = "K3vyn";

// 静态页面标题和描述，同时用于页面标题区域和 SEO 描述。
export const PAGE_COPY = {
  blog: {
    title: "文章",
    description: "记录学习和实践。",
    descriptionItalic: false,
  },
  collections: {
    title: "专题",
    description: "按系列系统阅读相关文章。",
    descriptionItalic: false,
  },
  tags: {
    title: "标签",
    description: "按主题浏览全部文章。",
    descriptionItalic: false,
  },
  years: {
    title: "文章归档",
    description: "按发布时间浏览全部文章。",
    descriptionItalic: false,
  },
  friends: {
    title: "会客室",
    description: "正在播放《泛用型自动化解决方案0.3.2.9f2》",
    descriptionItalic: true,
  },
  about: {
    title: "关于",
    description: "关于作者、本站和内容授权。",
    descriptionItalic: false,
  },
} as const;

// 页头导航入口。
export const NAV_LINKS = [
  { href: "/", label: "首页" },
  { href: "/blog", label: "文章" },
  { href: "/friends", label: "会客室" },
  { href: "/about", label: "关于" },
] as const;

// 页脚社交链接，icon 对应 SocialIcon 的内置图标键名。
export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/kevynf",
    icon: "social/github",
  },
  {
    label: "Bilibili",
    href: "https://space.bilibili.com/1349097147",
    icon: "social/bilibili",
  },
] as const;

// 首页个人信息和文章数量配置。
export const HOME = {
  avatar: {
    src: "/avatar.svg",
    alt: "Kevynf Avatar",
    },
  description: "Cominciamo.",
  motto: "Facciamo una pausa?",
  recentPostsLimit: 6,
  commentsTitle: "近况",
} as const;

// 首页 GitHub 贡献图配置。
export const GH_CONTRIBUTE = {
  title: "GitHub 活跃度",
  description: "近期的贡献记录。",
  username: "kevynf",
  profileUrl: "https://github.com/kevynf",
  errorMessage: "GitHub 贡献图暂时不可用。",
} as const;

// 静态文章搜索配置，关闭后页头不渲染搜索入口。
export const SEARCH = {
  enabled: true,
  maxResults: 8,
} as const;

// 友链数据存放在独立配置文件中。
export { FRIEND_LINKS } from "./config/friend-links";

// 评论系统配置，当前使用 Giscus。
export const COMMENTS = {
  enabled: true,
  provider: "giscus",
  repo: "kevynf/kevynf.github.io",
  repoId: "R_kgDORm5yLA",
  category: "Announcements",
  categoryId: "DIC_kwDORm5yLM4C4YFb",
  mapping: "pathname",
  themeLight: "/giscus/light.css",
  themeDark: "/giscus/dark.css",
  lang: "zh-CN",
} as const;
