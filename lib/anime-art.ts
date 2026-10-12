/**
 * Single-character scene registry: Zenitsu is the only anime character in the site.
 * Secondary sections use a local, character-free thunder background.
 */
export type AnimeScene = {
  id: string;
  character: string;
  breathing: string;
  image: string;
  fallbacks: string[];
  position: string;
  mobilePosition: string;
  accent: string;
  credit: string;
  sourceUrl: string;
};

export const zenitsuScene: AnimeScene = {
  id: "zenitsu",
  character: "Zenitsu Agatsuma",
  breathing: "Thunder Breathing",
  image: "https://images.wallpapersden.com/image/download/zenitsu-agatsuma-cool-demon-slayer_bWZsbWeUmZqaraWkpJRnamtlrWZpaWU.jpg",
  fallbacks: [
    "https://stat.ameba.jp/user_images/20200130/23/mifudehitomosiha1380/97/af/j/o1200067514705091664.jpg",
    "/images/zenitsu-thunder-background.svg"
  ],
  position: "68% center",
  mobilePosition: "70% center",
  accent: "#FFD34F",
  credit: "Zenitsu Agatsuma artwork",
  sourceUrl: "https://www.wallpapersden.com/"
};

export const thunderScene: AnimeScene = {
  id: "thunder-background",
  character: "Thunder Breathing",
  breathing: "Thunder Breathing",
  image: "/images/zenitsu-thunder-background.svg",
  fallbacks: [],
  position: "center center",
  mobilePosition: "center center",
  accent: "#FFD34F",
  credit: "Original vector thunder background",
  sourceUrl: "/images/zenitsu-thunder-background.svg"
};
