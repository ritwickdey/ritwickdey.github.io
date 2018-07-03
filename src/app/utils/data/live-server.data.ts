import { IProject } from '../IProject';

export const liveServerData: IProject = {
  id: 'D861BC2A-E9F7-4CF1-8F9B-886C255E723C',
  name: 'Live Server - VsCode Extension 💓',
  description: 'A development local Server with live reload feature.',
  projectLink: 'https://github.com/ritwickdey/vscode-live-server',
  isFeatured: true,
  liveUrl:
    'https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer',
  features: [
    'A quick development server with live browser reload.',
    'Fully customizable',
    'Remote Connect through WLAN'
  ],
  tags: ['node.js'],
  techStuff: ['Node.js', 'vscode-extension'],
  additionalData: [
    {
      title: 'About',
      data: [
        'This extension is installed more than 1M (10 lakhs) times from marketplace (by 03.07.18)',
        'Rating of this extension is 4.8 out of 5 (by 03.07.18)'
      ]
    }
  ]
};
