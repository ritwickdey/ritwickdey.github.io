import { IProject } from './IProject';
import { liveServerData } from './data/live-server.data';
import { LiveSassData } from './data/live-sass.data';
import { CakeShopData } from './data/cake-shop.data';
import {} from './data/social-network.data';
import {} from './data/we-mate.data';
import {} from './data/social-diary.data';
import {} from './data/sale-it.data';
import { portfoliloData } from './data/portfolio.data';
import { OShopData } from './data/oshop.data';
import {} from './data/live-server-web-extension.data';
import {} from './data/large-number-factorial.data';
import {} from './data/indecition.data';
import {} from './data/face-detector-chrome-api.data';
import {} from './data/expensify.data';
import {} from './data/create-files-folder-on-the-go.data';
import { techFestData } from './data/college-tech-fest.data';
import { testUniqueness } from './utils';

const getAllProject = () => {
  const projects = [
    liveServerData,
    LiveSassData,
    CakeShopData,
    OShopData,
    techFestData,
    portfoliloData
  ];

  const result = testUniqueness(projects, project => project.id);

  if (result.error) {
    const errorLog = [];
    result.duplicates.forEach((project: IProject) => {
      errorLog.push(`Duplicate E-id ${project.id} of ${project.name} `);
    });
    throw new Error(JSON.stringify(errorLog));
  }

  return projects;
};

export const ALL_PROJECT_DATA = getAllProject();
