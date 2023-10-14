// This component call an api to get gender based on name

import { useEffect , useState } from "react"
import "./GenderizeAPI.css"

export default function GenderizeAPI({name}) {

    const [gender, setGender] = useState('');

    useEffect(() => {

        fetch(`https://api.genderize.io/?name=${name}`)
        .then(res => res.json())
        .then(data => {
                console.log(data)
                setGender(data.gender)
        })
        .catch(err => console.log(err))

    }, [name])



  return (
    <div className='home'>
        <h3>Gender : </h3>
        {gender?  <p>{gender}</p> : <p>Loading</p> }
    </div>
  )
}
