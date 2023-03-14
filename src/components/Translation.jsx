import React from 'react'

const Translation = ({checkStuff , setInput , result}) => {
  return (
    <div>
        <textarea className='text-area' cols={50} rows={15} onChange={(e)=>setInput(e.target.value)}></textarea>
        <button className='action-btn'onClick={checkStuff}>Check Your Stuff</button>
        <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>
  )
}

export default Translation