import { UserData } from '../types';

interface IUserNameComponentProps {
  user: UserData
};

const UserName = ({ user: { name } }: IUserNameComponentProps) => {
  return (
    <h1>Welcome, {name}</h1>
  )
};

export default UserName;