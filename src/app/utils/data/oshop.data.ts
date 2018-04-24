import { IProject } from '../IProject';

export const OShopData: IProject = {
  id: 'BD7972A2-197A-4236-841F-7D298A149726',
  name: 'Organic Shop',
  description: 'A Shopping Website build with Angular 4 and Firebase',
  projectLink: 'https://github.com/ritwickdey/organic-shop',
  liveUrl: 'https://oshop-ritwick.firebaseapp.com/',
  features: [
    'Login through Facebook & Gmail',
    'Cart System',
    'Realtime updates (through Firebase Realtime Database)',
    'Only Admin can perform Create/Edit/Delete operations & upload photos of items',
    'Normal User can buy items & view their own orders',
    'Admin can access all orders',
    'Responsive UI using Bootstrap 4'
  ],
  tags: ['angular', 'firebase'],
  techStuff: [
    'Angular 4',
    'Firebase Realtime Database',
    'Firebase Auth'
  ],
  additionalData: []
};
