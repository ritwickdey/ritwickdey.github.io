import { IProject } from './IProject';

const LiveServerProjectData: IProject = {
  id: 1,
  name: 'Live Server - VsCode Extension',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam mollitia dolores nisi facilis voluptates! Rem',
  projectLink: 'https://github.com/ritwickdey/lorem',
  liveUrl: 'https://ritwickdey.github.io/lorem',
  features: ['bla 1', 'bla 2', 'bla 3'],
  tags: ['node.js'],
  additionalData: [
    {
      title: 'Lorem SubHeader',
      data: [
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        'Nulla voluptates architecto totam? Exercitationem, odit sapiente.'
      ]
    }
  ]
};

const LiveSassProjectData: IProject = {
  id: 2,
  name: 'Live Sass Compiler - VsCode Extension',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam mollitia dolores nisi facilis voluptates! Rem',
  projectLink: 'https://github.com/ritwickdey/lorem',
  liveUrl: 'https://ritwickdey.github.io/lorem',
  features: ['bla 1', 'bla 2', 'bla 3'],
  tags: ['node.js'],
  additionalData: [
    {
      title: 'Lorem SubHeader',
      data: [
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        'Nulla voluptates architecto totam? Exercitationem, odit sapiente.'
      ]
    }
  ]
};

const CakeShopProjectData: IProject = {
  id: 3,
  name: 'Cake Shop',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam mollitia dolores nisi facilis voluptates! Rem',
  projectLink: 'https://github.com/ritwickdey/lorem',
  liveUrl: 'https://ritwickdey.github.io/lorem',
  features: ['bla 1', 'bla 2', 'bla 3'],
  tags: ['asp.net'],
  additionalData: [
    {
      title: 'Lorem SubHeader',
      data: [
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        'Nulla voluptates architecto totam? Exercitationem, odit sapiente.'
      ]
    }
  ]
};

const OShopProjectData: IProject = {
  id: 4,
  name: 'OShop',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam mollitia dolores nisi facilis voluptates! Rem',
  projectLink: 'https://github.com/ritwickdey/lorem',
  liveUrl: 'https://ritwickdey.github.io/lorem',
  features: ['bla 1', 'bla 2', 'bla 3'],
  tags: ['angular'],
  additionalData: [
    {
      title: 'Lorem SubHeader',
      data: [
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        'Nulla voluptates architecto totam? Exercitationem, odit sapiente.'
      ]
    }
  ]
};

const SocialDiaryProjectData: IProject = {
  id: 5,
  name: 'Social Diary',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam mollitia dolores nisi facilis voluptates! Rem',
  projectLink: 'https://github.com/ritwickdey/lorem',
  liveUrl: 'https://ritwickdey.github.io/lorem',
  features: ['bla 1', 'bla 2', 'bla 3'],
  tags: ['react.js'],
  additionalData: [
    {
      title: 'Lorem SubHeader',
      data: [
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        'Nulla voluptates architecto totam? Exercitationem, odit sapiente.'
      ]
    }
  ]
};

export const ALL_PROJECT_DATA: IProject[] = [
  LiveServerProjectData,
  LiveSassProjectData,
  CakeShopProjectData,
  OShopProjectData,
  SocialDiaryProjectData,
  // LiveServerProjectData,
  // LiveSassProjectData,
  // CakeShopProjectData,
  // OShopProjectData,
  // SocialDiaryProjectData
];
