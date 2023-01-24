import React,{useState} from "react";

const Form = (props)=>{

    const [text,setText] = useState("")
    const change = (event)=>{
        setText(event.target.value)
    }
    
    const upperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }    
    const lowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }    
   


    return(
        <>

<div class="mb-3">
  <label for="exampleFormControlTextarea1"  class="form-label"><h1>{props.head}</h1></label>
  <textarea class="form-control" value={text} onChange={change} id="exampleFormControlTextarea1" rows="8"></textarea>
  <button className="check" onClick={upperCase}>TO UPPERCASE</button>
  <button className="check" onClick={lowerCase}>TO UPPERCASE</button>
  <div className="container">
    <h2>Your Text Summary</h2>
    <p>{text.split().length}words and {text.length} characters </p>
    <h2>preview</h2>
    <p>{text}</p>
  </div>
</div>
        </>
    )

}
export default Form;
