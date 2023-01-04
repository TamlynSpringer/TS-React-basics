import React, { useEffect, useState } from 'react';
import './App.css';
import UserAddress from './components/UserAddress';
import UserAge from './components/UserAge';
import UserName from './components/UserName';
import UserNameChange from './components/UserNameChange';
import { UserData } from './types';

function App() {
  const [user, setUser] = useState<UserData>({name: 'Joe', age: 32, address: 'Sturegaten'});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value
    setUser({...user, name: value})
  }
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://randomuser.me/api');
      const data = await response.json();
      const firstUser = data.results[0];
      setUser((prev) => {
        return {
          ...prev,
          name: firstUser.name.first,
          age: firstUser.dob.age,
          address: firstUser.location.street.name
        }
      })
    }
    getData();
  }, [])
  return (
    <div>
      <UserName user={user} />
      <UserAge user={user} />
      <UserAddress user={user} />
      <UserNameChange user={user} onNameChanged={handleChange} />
    </div>
  );
};

export default App;
