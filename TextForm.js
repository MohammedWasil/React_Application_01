import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = () =>{
      console.log("Lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
  }

  const handleClearClick = () =>{
      let newText = '';
      setText(newText)
  }
  const handleCopy = () =>{
      console.log("Copycase was clicked");
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
  }

  const handleOnChange = (event) =>{
    console.log("On change");
    setText(event.target.value);
  }

    const [text, setText] = useState('');
   
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8">
        </textarea>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p><b>{text.split(" ").length} words, and {text.length} characters</b></p>
      <p>{0.008 * text.split(" ").length} Minute read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
