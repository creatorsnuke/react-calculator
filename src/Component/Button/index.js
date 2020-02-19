import React from 'react'

export const Button = ({ content, handleButton }) => {
  return (
    <div className={`Button ${content === '0' ? 'zero' : ''}`} onClick={handleButton(content)} key={content}>
      {content}
    </div>
  )
}
