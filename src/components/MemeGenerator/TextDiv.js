import React, { useState , useEffect } from 'react';
import './TextDiv.css';
import Draggable from "react-draggable";


const DraggableText = ({text , styles , reset}) => {

    const [key , setKey] = useState(0);

    useEffect(() => {
        setKey((key)=>key+1);
    }, [reset])

    return(
        <Draggable key={key} >
            <div className='draggable-text' style={styles}><h1>{text}</h1></div>
        </Draggable>
    );
   
};

export default DraggableText;
