"use client"
import "./page.css"
import { useState } from 'react';

import PageHeader from "../../components/PageHeader";
import GenderizeAPI from "../../components/ApiRequester/GenderizeAPI";
import NationalizeAPI from "../../components/ApiRequester/NationalizeAPI";

export default function Page() {

  const [name, setName] = useState('');
  const [input, setInput] = useState('');
  const [submitted , setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    setName(input);
    setSubmitted(true);
  }

  return (
    <div className="servicepage">
  
        <PageHeader title={"Information based on Name"}/>

        <div className="servicepage-input">
            <input type="text" id="name" name="name" placeholder="Enter Your First Name" 
            onChange={(e)=>{setInput(e.target.value); setSubmitted(false)}}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>

        {submitted && <div>
            <GenderizeAPI name={name}/>
        </div>
        }

        {submitted && <div>
            <NationalizeAPI name={name}/>
        </div>
        }

    </div>

  )
}
