import { IProject } from '../IProject';

export const OShopData: IProject = {
  id: '5DF00C04-0DE4-4A56-B5F9-5E564BB8FF76',
  name: 'Organic Shop 🍀',
  description: 'A Shopping Website build with Angular 4 and Firebase',
  projectLink: 'https://github.com/ritwickdey/organic-shop',
  isFeatured: true,
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
