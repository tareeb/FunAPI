"use client"
import './page.css'
import { useState } from 'react'
import UserProfileCard from "../../components/Cards/UserProfileCard"
import PageHeader from "../../components/PageHeader"


export default function Page() {

  const [Data , setData] = useState([]);

  const getdata = async () => {
        fetch('https://randomuser.me/api/')
        .then((response) => response.json())
        .then((data) => setData(data.results))
        .catch((error) => console.log(error))
  } 

  return (
    <div className='randomuser'>

        <PageHeader title="Make a Random User" />

        <div className='button-container'>
            <button onClick={getdata}>Get Random User</button>
        </div>
        
        <div className='randomuser-container'>
            {Data.length>0 && <UserProfileCard Data={Data}/>}
        </div>
                
    </div>
  )
}
