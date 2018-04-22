import { IProject } from '../IProject';

export const CakeShopData: IProject = {
  id: 'BD7972A2-197A-4236-841F-7D298A149726',
  name: 'Cake Shop',
  description:
    'A sample Cake Shop Website built with ASP.NET Core (Multi-Page Application)',
  projectLink: 'https://github.com/ritwickdey/Cake-Shop',
  liveUrl: null,
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
  tags: ['asp.net'],
  techStuff: [
    'ASP.NET Core 2.0',
    'Entity Framework Core',
    'ASP.NET Identity',
    'Razor View',
    'AutoMapper',
    'jQuery & Bootstap 4'
  ],
  additionalData: [
    // {
    //   title: 'About',
    //   data: [
    //     'This extension is installed 70K times from marketplace (by 22.04.18)',
    //     'Rating of this extension is 4.8 out of 5 (by 22.04.18)'
    //   ]
    // }
  ]
};
