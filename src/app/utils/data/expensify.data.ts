import { IProject } from '../IProject';

export const ExpensifyData: IProject = {
  id: '81BF5A1B-D401-401E-B85A-1A5785377025',
  name: 'Expensify App 💰',
  description:
    'An Private Expense Manager. This app is built with React with Redux architecture',
  projectLink: 'https://github.com/ritwickdey/expensify-app',
  isFeatured: true,
  liveUrl: 'https://ritwickdey.github.io/expensify-app',
  features: [
    'Searching, Sorting, Filtering expenses',
    'Login using Google Account',
    'Only you can access your expenses',
    'stories using date/title & alphabetically',
    'Responsive UI'
  ],
  tags: ['react.js', 'css'],
  techStuff: [
    'React with Redux Architecture',
    'React Routing',
    'CSS - BEM Patten',
    'Firestore Realtime & Rules',
    'Firebase Authentication',
    'React Testing using Jest & Enzyme',
    'Travis CI to deploy'
  ],
  additionalData: []
};
