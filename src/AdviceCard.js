import React from 'react'
import dividerDesktop from './images/pattern-divider-desktop.svg'

export const AdviceCard = ({ advice }) => {
  return (
    <div className="card">
      <p className="advice-number">ADVICE</p>
      <h2>{advice}</h2>
      <img src ={dividerDesktop} className='divider-desktop' alt='divider' />
    </div>
  )
}
