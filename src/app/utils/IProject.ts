export interface IProject {
  id: number | string;
  name: string;
  description: string;
  projectLink: string;
  liveUrl?: string;
  isFeatured?: boolean;
  features?: string[];
  tags: string[];
  techStuff: string[];
  additionalData?: { title: string; data: string[] }[];
}
