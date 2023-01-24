import React,{useState} from "react";

const Form = (props)=>{

    const [text,setText] = useState("")
    const change = (event)=>{
        // ye hm ne likha k hu hee koi key press ho us ki val likhny jaye 
        setText(event.target.value)
    }
    
    const upperCase = ()=>{
        // new text ma jo value ka var ha wo likh kr method lga diya ha 
        let newText = text.toUpperCase();
        // ab us var ko yha set ma enter kr diya th wo khud uppercase ma kr dy ga
        setText(newText)
    }


    return(
        <>

<div class="mb-3">
  <label for="exampleFormControlTextarea1"  class="form-label"><h1>{props.head}</h1></label>
  {/* yha val ma text ha aur uper is text ko hm ne var ma store kr k uprcase method lga diya */}
  <textarea class="form-control" value={text} onChange={change} id="exampleFormControlTextarea1" rows="8"></textarea>
  <button className="check" onClick={upperCase}>TO UPPERCASE</button>
</div>
        </>
    )

}
export default Form;
