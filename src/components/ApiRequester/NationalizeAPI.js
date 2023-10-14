// This component call an api to get gender based on name

import { useEffect , useState } from "react"
import "./GenderizeAPI.css"

export default function NationalizeAPI({name}) {

    const [gender, setGender] = useState('');

    useEffect(() => {

        fetch(`https://api.nationalize.io?name=${name}`)
        .then(res => res.json())
        .then(data => {
                console.log(data)
                setGender(data.country[0].country_id)
        })
        .catch(err => console.log(err))

    }, [name])



  return (
    <div className='home'>
        <h3>Nationality : </h3>
        {gender?  <p>{gender}</p> : <p>Loading</p> }
    </div>
  )
}
