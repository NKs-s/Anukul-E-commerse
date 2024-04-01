import React from 'react'
import './nopage.css'
import FourOFour from '../../components/img/404.png'
function NoPage() {
  return (
    <>
    <div className="no-page-window">
      <div>
      Woopss...
      </div>
        <img src={FourOFour} alt="404" />
      <div>
        Page Not Found 
      </div>
    </div>
    </>
  )
}

export default NoPage