import React from 'react';
import { UserData } from '../types';

interface IUserAddressComponentProps {
  user: UserData
};

const UserAddress = ({user: {address}}: IUserAddressComponentProps) => {
  return (
    <p>Address: {address}</p>
  )
};

export default UserAddress;