import React, { useContext } from 'react'
import Banner from './Banner'
import { AuthContext } from '../context/AuthProvider'; // Assuming correct path to AuthProvider
import Card from './Card';


export const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user && (
        <>

          <Banner />
          <Card />

        </>
      )}
    </>
  )
}
