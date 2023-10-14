"use client"

import './page.css'
import PageHeader from '../../components/PageHeader'
import { useState } from 'react'

export default function Page() {

    const [factData , setfactData] = useState([]);

    const getfacts = async () => {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        factData.length === 0 ? setfactData([data]) : setfactData([...factData , data]);
    }

    const refresh = () => {
        setfactData([]);
    }
    
  return (
    <div className='CatApi'>

        <PageHeader title={'Get Radnom Cat Facts'} />

        <div className='button-container'>
            <button onClick={getfacts}>Add Random Facts</button>
            <button onClick={refresh}>Remove All</button>
        </div>

        <div className='facts-gallery'>
            {
                factData.map((fact , index) => {
                    return (
                        <div className='fact-card' key={index}>
                            <p>{fact.fact}</p>
                        </div>
                    )
                })
            }
        </div>
        
    </div>
  )
}
