/**
 * The portfolio uses one Demon Slayer character visual: Zenitsu Agatsuma.
 * Repeated scene entries keep existing section imports compatible without
 * introducing artwork or labels for other characters.
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
    "https://stat.ameba.jp/user_images/20200130/23/mifudehitomosiha1380/97/af/j/o1200067514705091664.jpg"
  ],
  position: "70% center",
  mobilePosition: "69% center",
  accent: "#F1C75B",
  credit: "Zenitsu Agatsuma artwork",
  sourceUrl: "https://ameblo.jp/mifudehitomosiha1380/entry-12571368703.html"
};

export const animeScenes: AnimeScene[] = Array.from({ length: 9 }, (_, index) => ({
  ...zenitsuScene,
  id: "zenitsu-art-" + (index + 1)
}));

export const featuredScenes = [animeScenes[0], animeScenes[1], animeScenes[2]] as const;
export const missionScenes = animeScenes;
