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
    const clearText = ()=>{
        //   let newText = text.toLowerCase();
        setText("");
}  

const [myStyle,setmyStyle] = useState({
    color : "black",
    backgroundColor : "white"
})

const [btn,setbtn]=useState('Enable Dark Mode')



const Dark = ()=>{
 if (setmyStyle.color === "white"){
    setmyStyle({
        color : "black",
        backgroundColor : "white"
    })
    setbtn("Enable Dark Mode")
 }
else{
    setmyStyle({
        color : "white",
        backgroundColor : "black"
    })
    setbtn("Enable Light Mode")
}
}


    return(
        <>
<div className="container" style={myStyle}>

<div class="mb-3"  >
  <label for="exampleFormControlTextarea1"  className="form-label"><h1>{props.head}</h1></label>
  <textarea className="form-control" style={myStyle} value={text} onChange={change} id="exampleFormControlTextarea1" rows="8"></textarea>
  <button className="check" style={myStyle} onClick={upperCase}>TO UPPERCASE</button>
  <button className="check" style={myStyle} onClick={lowerCase}>TO LowerCase</button>
  <button className="check" onClick={Dark} >{btn}</button>
  <button className="check btn btn-secondary btn-light bg-primary " onClick={clearText}>Clear Text</button>
  <div className="container">
    <h2>Your Text Summary</h2>
    <p>{text.split("").length}words and {text.length} characters </p>
    <h2>preview</h2>
    <p>{text}</p>
  </div>
</div>
</div>
        </>
    )

}
export default Form;
