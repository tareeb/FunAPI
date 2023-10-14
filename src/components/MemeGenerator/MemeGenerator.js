import React , {useEffect, useRef , useState} from 'react'
import './MemeGenerator.css'
import DraggableText from './TextDiv'
import DivtoImg from './DivtoImg'
import StylingComponent from './StyleInput'

function MultiTextinput({ text , setText}) {
    return(
        <div className='textinputs'>
            <input type='text' value={text} onChange={(e)=>{setText(e.target.value)}}></input>
        </div>
    )
}

export default function MemeGenerator({data}) {

    //usestates
    const [reset , setReset] = useState(false);
    const [textInputs, setTextInputs] = useState
                            ( Array.from({ length: data.box_count }, (_ , index) => `Input: ${index}`) );
    const [styles, setStyles] = useState({
        border:'2px solid black',
        backgroundColor: 'white',
        color: 'black',
        fontSize:"15px"
    });
    
    const divToCaptureRef = useRef(null);

    //Fucntions
    const handleReset = () => {
        setTextInputs(Array.from({ length: data.box_count }, (_ , index) => `Input: ${index}`));
        setReset(!reset);
        setStyles({
            border:'2px solid black',
            backgroundColor: 'white',
            color: 'black',
            fontSize:"15px"}
        );
    }

    //useEffects
    useEffect(() => {
        setTextInputs(Array.from({ length: data.box_count }, (_ , index) => `Input: ${index}`));
    }, [data.box_count])

    const TextDivs = Array.from({ length: data.box_count }, (_, index) => (
        <DraggableText key={index} id={index} text={textInputs[index]} styles={styles} reset={reset} />
    ));

    const MultiTextinputs = Array.from({ length: data.box_count }, (_, index) => (
        <MultiTextinput key={index} id={index} text={textInputs[index]}
        setText={(newText) => {
            const newTextInputs = [...textInputs];
            newTextInputs[index] = newText;
            setTextInputs(newTextInputs);
        }} />
    ));

    
    return (
        <div className='memegenerator'>
            <div className='left-menu' >

                <div className='canvas'>
                    <div className='image-container' ref={divToCaptureRef} >
                        <img src={data.url}></img>
                        {TextDivs} 
                    </div>
                </div>
                                
            </div>

            <div className='right-menu'>
                <div className='Inputs-container'>
                    {MultiTextinputs}
                </div>
                
                <div className='button-containers'>
                    <button onClick={handleReset}>Reset Inputs</button>
                    <DivtoImg divToCaptureRef={divToCaptureRef} />
                </div>
                <StylingComponent styles={styles} setStyles={setStyles} />
            </div>
        </div>
    )
}