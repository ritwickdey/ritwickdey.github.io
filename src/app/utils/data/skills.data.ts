import { ISkill } from '../ISkill';

export const SKILLS_DATA: ISkill[] = [
  {
    type: 'Programming Language',
    names: [
      'C', 'C#', 'JavaScript', 'TypeScript', 'Python'
    ]
  },
  {
    type: 'Backend',
    names: [
      'Node.js & Express.js', 'ASP.NET Core/MVC/WebAPI'
    ]
  },
  {
    type: 'Frontend',
    names: [
      'Angular', 'React.js', 'CSS', 'HTML', 'jQuery'
    ]
  },
  {
    type: 'Database & ORM',
    names: [
      'SQL Server', 'MongoDB', 'Entity Framework', 'Mongoose'
    ]
  },
  {
    type: 'Cloud',
    names: [
      'Azure Web Service & Storage', 'Firebase DB & Functions', 'Heroku'
    ]
  },
  {
    type: 'Testing',
    names: [
      'Jest', 'Mocha'
    ]
  },
  {
    type: 'Others',
    names: [
      'Git & GitHub', 'CI/CD', 'REST API', 'JWT', 'Auth0'
    ]
  },
];
