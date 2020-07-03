//  Para criar: name, email, password

interface TechObjct {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObjct>;
}

export default function createUSer({name, email, password}: CreateUserData){
  const user = {
    name,
    email,
    password,
  }

  return user;
}