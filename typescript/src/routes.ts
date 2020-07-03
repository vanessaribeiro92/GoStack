import { Request, Response } from 'express';
import createUser from './services/CreateUser';

// string, number, boolean, object, Array
// interfaces

export function helloWorld( request: Request, response: Response ) {
  const user = createUser({
    email: 'vanessa.ribeiro2492@gmail.com',
    password: '1234',
    techs: [
      'Node.js',
      'React.JS',
      { title: 'Javascript', experience: 100 },
    ],
  });

  
  return response.json({ message: 'hello world '});
}
