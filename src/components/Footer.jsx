import React, { useState } from "react"

const Footer = () => {
  const [text, setText] = useState("")
  const helloWorld = () => {
    alert("hello world")
    setText("text")
  }
  if (!text) {
    return <button onClick={helloWorld}>CLICK ME to show text</button>
  }
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

export default Footer
