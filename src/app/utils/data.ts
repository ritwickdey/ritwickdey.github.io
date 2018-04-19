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

export const ALL_PROJECT_DATA: IProject[] = [
  LiveServerProjectData,
  LiveServerProjectData,
  LiveServerProjectData,
  LiveServerProjectData
];
