export interface Player {
  id: number;
  name: string;
  position: string;
  age: number;
  club: string;
  imageUrl: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export enum SectionId {
  HOME = "home",
  ABOUT = "about",
  PLAYERS = "players",
  NEWS = "news",
  CONTACT = "contact",
}
