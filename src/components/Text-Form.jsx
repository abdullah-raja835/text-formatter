import React,{useState} from "react";

const Form = (props)=>{
    return(
        <>
 
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"><h1>{props.head}</h1></label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
        </>
    )

}
export default Form;