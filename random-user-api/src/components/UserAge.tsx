import { UserData } from '../types';

interface IUserAgeComponentProps {
  user: UserData;
}

const UserAge = ({ user: {age}} : IUserAgeComponentProps) => {
  return (
    <div>Age: <i>{age}</i></div>
  )
};

export default UserAge;