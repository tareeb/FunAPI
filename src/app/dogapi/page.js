"use client"

import './page.css'
import PageHeader from '../../components/PageHeader'
import { useState } from 'react'

export default function Page() {

    const [imageData , setImageData] = useState([]);

    const getImage = async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        console.log(data);
        setImageData([...imageData , data]);
    }

    const refresh = () => {
        setImageData([]);
    }
    
  return (
    <div className='DogApi'>

        <PageHeader title={'Get Radnom Dog Images'} />

        <div className='button-container'>
            <button onClick={getImage}>Add Random Image</button>
            <button onClick={refresh}>Remove All</button>
        </div>

        <div className='gallery'>
            {
                imageData.map((image , index) => {
                    return <div key={index}><img src={image.message} alt='dog' /> </div>
                }
            )
            }
        </div>
        
    </div>
  )
}
