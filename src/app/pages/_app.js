// pages/_app.js
import '../styles/globals.css'
import Sidebar from '../components/sidebar'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div className={`main-content ${isExpanded ? 'main-content-expanded' : 'main-content-collapsed'}`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
