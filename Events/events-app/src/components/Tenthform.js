import React, { useEffect, useRef } from 'react'

function Tenthform() {
    let FirstNameInputRef=useRef();
    let LastNameInputRef=useRef();
    let engInputRef=useRef();
    let telInputRef=useRef();
    let hindiInputRef=useRef();
    let matInputRef=useRef();
    let sciInputRef=useRef();
    let socInputRef=useRef();
    let resultParaRef=useRef();
    
    let engSpanRef=useRef();
    let telSpanRef=useRef();
    let hindiSpanRef=useRef();
    let matSpanRef=useRef();
    let sciSpanRef=useRef();
    let socSpanRef=useRef();

    useEffect=(()=>{
 alert("welcome, Please fill Details");
    },[]);
   
  return (
    <div>
      <form className='form'>
        <div>
            <label>First Name: </label>
            <input ref={FirstNameInputRef} type='text' ></input>
            <span></span>
            
        </div>
        <div>
            <label>Last Name: </label>
            <input ref={LastNameInputRef} type='text'></input>
            <span></span>
        </div>
        <div>
            <label>English: </label>
            <input ref={engInputRef} type='Number' 
             
             onFocus={()=>{
                resultParaRef.current.innerHTML="onFocus";
                engInputRef.current.style.backgroundColor="skyblue";

               }}
            onChange={()=>{ 
                resultParaRef.current.innerHTML="onChange";
                engInputRef.current.style.backgroundColor="brown";
                engSpanRef.current.innerHTML=engInputRef.current.value>34?"Pass":"Fail";
                engSpanRef.current.style.backgroundColor=engInputRef.current.value>34?"green":"Red";
            }} 
            onBlur={()=>{
                resultParaRef.current.innerHTML="";
                engInputRef.current.style.backgroundColor="";
            }}
            
            ></input>
            <span ref={engSpanRef}></span>
        </div>
        <div>
            <label>Telugu: </label>
            <input ref={telInputRef} type='Number' 
             onFocus={()=>{
                // resultParaRef.current.innerHTML="onFocus";
                telInputRef.current.style.backgroundColor="skyblue";

               }}
            onChange={()=>{ 
                // resultParaRef.current.innerHTML="onChange";
                telInputRef.current.style.backgroundColor="brown";
                telSpanRef.current.innerHTML=telInputRef.current.value>34?"Pass":"Fail";
                telSpanRef.current.style.backgroundColor=telInputRef.current.value>34?"green":"Red";
            }} 
            onBlur={()=>{
                // resultParaRef.current.innerHTML="onBlur";
                telInputRef.current.style.backgroundColor="";
            }}
            
            ></input>
            <span ref={telSpanRef}></span>
        </div>
        <div>
            <label>Hindi: </label>
            <input ref={hindiInputRef} type='Number' 
            onFocus={()=>{
                hindiInputRef.current.style.backgroundColor="skyblue";
            }}
            onChange={()=>{
                hindiInputRef.current.style.backgroundColor="brown";
                hindiSpanRef.current.innerHTML=hindiInputRef.current.value>34?"Pass":"Fail";
                hindiSpanRef.current.style.backgroundColor=hindiInputRef.current.value>34?"green":"Red";
            }}
            onBlur={()=>{
                hindiInputRef.current.style.backgroundColor=""
            }}
            
            ></input>
            <span ref={hindiSpanRef}></span>
        </div>
        <div>
            <label>Maths: </label>
            <input ref={matInputRef}  type='Number'
            onFocus={()=>{
                matInputRef.current.style.backgroundColor="skyblue";
            }}
            onChange={()=>{
                matInputRef.current.style.backgroundColor="brown";
                matSpanRef.current.innerHTML=matInputRef.current.value>34?"Pass":"Fail";
                matSpanRef.current.style.backgroundColor=matInputRef.current.value>34?"green":"Red";
            }}
            onBlur={()=>{
                matInputRef.current.style.backgroundColor=""
            }}
            ></input>
            <span ref={matSpanRef}></span>
        </div>
        <div>
            <label>Science: </label>
            <input ref={sciInputRef} type='Number'
            onFocus={()=>{
                sciInputRef.current.style.backgroundColor="skyblue";
            }}
            onChange={()=>{
                sciInputRef.current.style.backgroundColor="brown";
                sciSpanRef.current.innerHTML=sciInputRef.current.value>34?"Pass":"Fail";
                sciSpanRef.current.style.backgroundColor=sciInputRef.current.value>34?"green":"Red";
            }}
            onBlur={()=>{
                sciInputRef.current.style.backgroundColor=""
            }}
            ></input>
            <span ref={sciSpanRef}></span>
        </div>
        <div>
            <label>Social: </label>
            <input ref={socInputRef}  type='Number'
            onFocus={()=>{
                socInputRef.current.style.backgroundColor="skyblue";
            }}
            onChange={()=>{
                socInputRef.current.style.backgroundColor="brown";
                socSpanRef.current.innerHTML=socInputRef.current.value>34?"Pass":"Fail";
                socSpanRef.current.style.backgroundColor=socInputRef.current.value>34?"green":"Red";
            }}
            onBlur={()=>{
                socInputRef.current.style.backgroundColor=""
            }}
            ></input>
            <span ref={socSpanRef}></span>
        </div>
        <div>
            <button type="button" onClick={()=>{
                let engMarks=Number(engInputRef.current.value);
                let telMarks= Number(telInputRef.current.value);
                let hindiMarks= Number(hindiInputRef.current.value);
                let matMarks= Number(matInputRef.current.value);
                let sciMarks= Number(sciInputRef.current.value);
                let socMarks = Number(socInputRef.current.value);
                let totalMarks= engMarks+telMarks+hindiMarks+matMarks+sciMarks+socMarks;
                let perc=(totalMarks/600)*100;

                // alert(`TotalMarks of ${FirstNameInputRef.current.value} ${LastNameInputRef.current.value} are ${totalMarks}`);
               resultParaRef.current.innerHTML=`TotalMarks of ${FirstNameInputRef.current.value} ${LastNameInputRef.current.value} are ${totalMarks} with percentage of ${perc.toFixed(3)}%`;

            }}>Total</button>
        </div>
        <div>
            <button type="button" onMouseMove={()=>{
                let engMarks=Number(engInputRef.current.value);
                let telMarks= Number(telInputRef.current.value);
                let hindiMarks= Number(hindiInputRef.current.value);
                let matMarks= Number(matInputRef.current.value);
                let sciMarks= Number(sciInputRef.current.value);
                let socMarks = Number(socInputRef.current.value);
                let totalMarks= engMarks+telMarks+hindiMarks+matMarks+sciMarks+socMarks;
                let perc=(totalMarks/600)*100;

                alert(`TotalMarks of ${FirstNameInputRef.current.value} ${LastNameInputRef.current.value} are ${totalMarks}`);
              

            }}>Total on Move</button>
        </div>
        <div>
        <p id='para' ref={resultParaRef}></p>
        </div>
      </form>
    </div>
  )
}

export default Tenthform
