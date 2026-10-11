/**
 * Direct image URLs and ordered fallbacks for Demon Slayer artwork.
 * Each section uses the same fallback-aware renderer so one unavailable host
 * cannot leave a broken image icon or an empty scene.
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

const hashiraImage = "https://images4.alphacoders.com/107/1079551.png";
const tanjiroImage = "https://m.media-amazon.com/images/M/MV5BMjQzYTRmYzQtOGFkMS00MzdkLThhNDUtYzAwZTBjZTIxZmY1XkEyXkFqcGc%40._V1_.jpg";
const rengokuImage = "https://kimetsu.com/anime/mugenresshahen_tv/story/SYS/CONTENTS/story_2135_photo_163728925822676990";
const nezukoImage = "https://a.storyblok.com/f/178900/1504x846/74376263b9/demon-slayer-swordsmith-village-arc-episode-4.jpg/m/filters%3Aquality%2895%29format%28webp%29";
const shinobuImage = "https://wallpapersok.com/images/hd/shinobu-kocho-demon-slayer-wa1z30li4m0a8uv0.jpg";

export const animeScenes: AnimeScene[] = [
  {
    id: "tanjiro",
    character: "Tanjiro Kamado",
    breathing: "Water Breathing",
    image: tanjiroImage,
    fallbacks: [
      "https://www.animeclick.it/prove/img_tmp/202110/0water%20dragon%20demon%20slayer.jpg",
      hashiraImage
    ],
    position: "62% 34%",
    mobilePosition: "67% 30%",
    accent: "#38D9F4",
    credit: "Demon Slayer anime still",
    sourceUrl: "https://www.animeclick.it/news/92131-demon-slayer-analisi-di-un-fenomeno"
  },
  {
    id: "nezuko",
    character: "Nezuko Kamado",
    breathing: "Blood Demon Art",
    image: nezukoImage,
    fallbacks: [
      "https://wallpapers.com/images/hd/nezukoin-demon-form-artwork-65sjg7eefcxvm2kf.jpg",
      "https://images3.alphacoders.com/141/thumb-1920-1410824.png",
      "https://www.chromethemer.com/download/hd-wallpapers/nezuko-3840x2160.jpg",
      hashiraImage
    ],
    position: "68% center",
    mobilePosition: "64% center",
    accent: "#FF68B7",
    credit: "Demon Slayer anime still",
    sourceUrl: "https://www.crunchyroll.com/es/news/guides/2023/8/27/demonios-demon-slayer"
  },
  {
    id: "zenitsu",
    character: "Zenitsu Agatsuma",
    breathing: "Thunder Breathing",
    image: "https://stat.ameba.jp/user_images/20200130/23/mifudehitomosiha1380/97/af/j/o1200067514705091664.jpg",
    fallbacks: [
      "https://images.wallpapersden.com/image/download/zenitsu-agatsuma-cool-demon-slayer_bWZsbWeUmZqaraWkpJRnamtlrWZpaWU.jpg",
      tanjiroImage,
      hashiraImage
    ],
    position: "68% center",
    mobilePosition: "70% center",
    accent: "#FFD84C",
    credit: "Demon Slayer anime still",
    sourceUrl: "https://ameblo.jp/mifudehitomosiha1380/entry-12571368703.html"
  },
  {
    id: "inosuke",
    character: "Inosuke Hashibira",
    breathing: "Beast Breathing",
    image: "https://images.alphacoders.com/133/thumb-1920-1339436.png",
    fallbacks: [
      "https://cdn.wallpapersafari.com/4/24/iOu4Im.jpg",
      hashiraImage
    ],
    position: "64% center",
    mobilePosition: "67% center",
    accent: "#91DFF1",
    credit: "Inosuke artwork",
    sourceUrl: "https://alphacoders.com/inosuke-hashibira-4k-wallpapers"
  },
  {
    id: "rengoku",
    character: "Kyojuro Rengoku",
    breathing: "Flame Breathing",
    image: rengokuImage,
    fallbacks: [
      "https://images4.alphacoders.com/107/1079551.png",
      tanjiroImage
    ],
    position: "64% 42%",
    mobilePosition: "68% 38%",
    accent: "#FF8554",
    credit: "Official Demon Slayer anime site",
    sourceUrl: "https://kimetsu.com/anime/mugenresshahen_tv/story/?id=ep6"
  },
  {
    id: "giyu",
    character: "Giyu Tomioka",
    breathing: "Water Breathing",
    image: "https://i0.hdslb.com/bfs/article/9016e3cdc57663d792d1bb84d15ee15c52b3b825.jpg",
    fallbacks: [
      "https://images6.alphacoders.com/136/thumb-1920-1367686.jpeg",
      "https://www.animeclick.it/prove/img_tmp/202110/0water%20dragon%20demon%20slayer.jpg",
      hashiraImage
    ],
    position: "68% center",
    mobilePosition: "70% center",
    accent: "#43CFF0",
    credit: "Giyu Tomioka artwork",
    sourceUrl: "https://ecywang.com/pic/"
  },
  {
    id: "tengen",
    character: "Tengen Uzui",
    breathing: "Sound Breathing",
    image: "https://cdn.shopify.com/s/files/1/0400/9767/7479/files/Demon-Slayer-Sound-Breathing-Tengen_cbe205ee-dfa2-4b95-a716-cad97db895ac.png?v=1689459989",
    fallbacks: [
      "https://w.wallhaven.cc/full/9d/wallhaven-9drgdk.png",
      hashiraImage
    ],
    position: "64% center",
    mobilePosition: "67% center",
    accent: "#FF654E",
    credit: "Tengen Uzui artwork",
    sourceUrl: "https://poggers.com/blogs/anime/demon-slayer-list-of-all-breathing-styles-techniques-forms"
  },
  {
    id: "shinobu",
    character: "Shinobu Kocho",
    breathing: "Insect Breathing",
    image: shinobuImage,
    fallbacks: [
      "https://media.wallpaperengine.space/posters/v1/demon-slayer-shinobu-kocho.webp",
      "https://haowallpaper.com/link/common/file/previewFileImg/17939269778197888",
      hashiraImage
    ],
    position: "68% center",
    mobilePosition: "64% center",
    accent: "#CBA2FF",
    credit: "Shinobu Kocho artwork",
    sourceUrl: "https://wallpapersok.com/wallpapers/shinobu-kocho-demon-slayer-wa1z30li4m0a8uv0.html"
  },
  {
    id: "hashira",
    character: "The Hashira",
    breathing: "The Demon Slayer Corps",
    image: hashiraImage,
    fallbacks: [
      "https://www.pixiewall.com/content/wallpapers/medium/60/pixiewall-demon-slayer-kimetsu-no-yaiba-hashira-4k-r3tzbg.jpg",
      rengokuImage,
      tanjiroImage
    ],
    position: "center 46%",
    mobilePosition: "58% center",
    accent: "#F2C59C",
    credit: "Hashira group artwork",
    sourceUrl: "https://wall.alphacoders.com/big.php?i=1079551"
  }
];

export const featuredScenes = [animeScenes[0], animeScenes[4], animeScenes[7]] as const;
export const missionScenes = [animeScenes[0], animeScenes[1], animeScenes[2], animeScenes[6], animeScenes[7], animeScenes[8], animeScenes[4], animeScenes[5], animeScenes[3]] as const;
