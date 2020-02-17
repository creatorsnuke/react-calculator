import React from 'react'

export default function Button ({ content, handleButton }) {
  return (
    <div className={`Button ${content === '0' ? 'zero' : ''}`} onClick={handleButton(content)}>
      {content}
    </div>
  )
}
