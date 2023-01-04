import React from 'react';
import { UserData } from '../types';

interface IUserNameChangedComponentProps {
  user: UserData,
  onNameChanged(e: React.ChangeEvent<HTMLInputElement>): void
};

const UserNameChange = ({user: {name}, onNameChanged}: IUserNameChangedComponentProps) => {
  return (
    <div>
      <h2>Change the name of '{name}' here</h2>
     <input type='text' value={name} onChange={onNameChanged} />
    </div>
  )
};

export default UserNameChange;