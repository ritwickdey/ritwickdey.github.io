import { IProject } from '../IProject';

export const SaleItData: IProject = {
  id: '6E020215-0E1A-48A0-B07E-E79B32164FED',
  name: 'Sale It 👜',
  description:
    'A Simple Vehicle Dealer App built with ASP.NET Core + Angular 4 ',
  projectLink: 'https://github.com/ritwickdey/Sale-It',
  liveUrl: 'https://ritwick-sale-it.azurewebsites.net',
  features: [
    'Only Admin/Moderator can perform Create/Edit/Delete operations & upload photos',
    'Normal User only can view the vehicle details & see report of vehicles in charts view',
    'Server Side Sorting & Pagination',
    'Role Based Athentication'
  ],
  tags: ['asp.net', 'angular'],
  techStuff: [
    'Angular 4',
    'ASP.NET Core',
    'Entity Framework Core',
    'Auth0',
    'AutoMapper',
    'Chart.js'
  ],
  additionalData: []
};
