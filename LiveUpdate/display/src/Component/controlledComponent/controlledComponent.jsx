import React, {useRef} from 'react'

function controlledComponent() {
    const inputRef = useRef()

    function handleSubmit(){
        alert(inputRef.current.value)
    }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default controlledComponent
