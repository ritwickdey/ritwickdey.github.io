import { IProject } from '../IProject';

export const CakeShopData: IProject = {
  id: 'BD7972A2-197A-4236-841F-7D298A149726',
  name: 'Cake Shop 🎂',
  description:
    'A sample Cake Shop Website built with ASP.NET Core (Multi-Page Application)',
  projectLink: 'https://github.com/ritwickdey/Cake-Shop',
  liveUrl: null,
  isFeatured: true,
  features: [
    'Only Admin can perform Create/Edit/Delete cakes & manage Orders.',
    'Normal User can only can buy cakes & view their orders.',
    'Managing Cart System using cookie.',
    'Client Side & Server side validation',
    'Cookie Based Authentication & Authorization - Not Session',
    'Login through either Username or Email',
    'Responsive UI',
    'Repository Pattern',
    'Application Architecture is decoupled form ORM (Entity Framework)'
  ],
  tags: ['asp.net', 'asp.net core'],
  techStuff: [
    'ASP.NET Core 2.0',
    'Entity Framework Core',
    'ASP.NET Identity',
    'Razor View',
    'AutoMapper',
    'jQuery & Bootstap 4'
  ],
  additionalData: []
};
