/**
 * Cinematic Demon Slayer character artwork used across the portfolio.
 * The image URLs point to their existing public source hosts; backgrounds are
 * intentionally rendered with CSS to avoid Next Image remote-host configuration.
 */
export type AnimeScene = {
  id: string;
  character: string;
  breathing: string;
  image: string;
  position: string;
  accent: string;
  credit: string;
};

export const animeScenes: AnimeScene[] = [
  {
    id: "tanjiro",
    character: "Tanjiro Kamado",
    breathing: "Water Breathing",
    image: "https://www.pixiewall.com/content/wallpapers/medium/66/pixiewall-tanjiro-demon-slayer-rooftop-battle-4k-bnl0gf.jpg",
    position: "62% 34%",
    accent: "#38D9F4",
    credit: "PixieWall"
  },
  {
    id: "nezuko",
    character: "Nezuko Kamado",
    breathing: "Blood Demon Art",
    image: "https://www.chromethemer.com/download/hd-wallpapers/nezuko-3840x2160.jpg",
    position: "68% center",
    accent: "#FF68B7",
    credit: "ChromeThemer"
  },
  {
    id: "zenitsu",
    character: "Zenitsu Agatsuma",
    breathing: "Thunder Breathing",
    image: "https://images.wallpapersden.com/image/download/zenitsu-agatsuma-cool-demon-slayer_bWZsbWeUmZqaraWkpJRnamtlrWZpaWU.jpg",
    position: "68% center",
    accent: "#FFD84C",
    credit: "Wallpapers Den"
  },
  {
    id: "inosuke",
    character: "Inosuke Hashibira",
    breathing: "Beast Breathing",
    image: "https://cdn.wallpapersafari.com/4/24/iOu4Im.jpg",
    position: "64% center",
    accent: "#91DFF1",
    credit: "WallpaperSafari"
  },
  {
    id: "rengoku",
    character: "Kyojuro Rengoku",
    breathing: "Flame Breathing",
    image: "https://kimetsu.com/anime/mugenresshahen_tv/story/SYS/CONTENTS/story_2135_photo_163728925822676990",
    position: "64% 42%",
    accent: "#FF8554",
    credit: "Demon Slayer official anime site"
  },
  {
    id: "giyu",
    character: "Giyu Tomioka",
    breathing: "Water Breathing",
    image: "https://images6.alphacoders.com/136/thumb-1920-1367686.jpeg",
    position: "68% center",
    accent: "#43CFF0",
    credit: "Wallpaper Abyss"
  },
  {
    id: "tengen",
    character: "Tengen Uzui",
    breathing: "Sound Breathing",
    image: "https://w.wallhaven.cc/full/9d/wallhaven-9drgdk.png",
    position: "64% center",
    accent: "#FF654E",
    credit: "Wallhaven"
  },
  {
    id: "shinobu",
    character: "Shinobu Kocho",
    breathing: "Insect Breathing",
    image: "https://haowallpaper.com/link/common/file/previewFileImg/17939269778197888",
    position: "68% center",
    accent: "#CBA2FF",
    credit: "HaoWallpaper"
  },
  {
    id: "hashira",
    character: "The Hashira",
    breathing: "The Demon Slayer Corps",
    image: "https://www.pixiewall.com/content/wallpapers/medium/60/pixiewall-demon-slayer-kimetsu-no-yaiba-hashira-4k-r3tzbg.jpg",
    position: "center 46%",
    accent: "#F2C59C",
    credit: "PixieWall"
  }
];

export const featuredScenes = [animeScenes[0], animeScenes[4], animeScenes[7]] as const;
export const missionScenes = [animeScenes[0], animeScenes[1], animeScenes[2], animeScenes[6], animeScenes[7], animeScenes[8], animeScenes[4], animeScenes[5], animeScenes[3]] as const;
