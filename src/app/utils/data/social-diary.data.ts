import { IProject } from '../IProject';

export const SocialDiaryData: IProject = {
  id: 'BA56C7BD-7263-4810-9EA4-04123482BBC4',
  name: 'Social Diary 📖',
  description: `A simple story app where people can share their story and can edit/delete
    only their stories and everyone can read all stories from timeline.`,
  isFeatured: true,
  projectLink: 'https://github.com/ritwickdey/social-diary',
  liveUrl: 'https://ritwickdey.github.io/social-diary/',
  features: [
    'HTML tags are supported in story',
    'Login using Google Account',
    'Searching feature of stories',
    'Sorting stories using date/title & alphabetically',
    'Filtering stories using date range',
    'Responsive UI'
  ],
  tags: ['react.js', 'css'],
  techStuff: [
    'React with Redux Architecture',
    'React Routing',
    'CSS Modules',
    'Firestore Database & Rules',
    'Firebase Authentication',
    'Responsive UI with pure CSS (No library 😄)',
    'Travis CI to deploy'
  ],
  additionalData: []
};
