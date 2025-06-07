import { React, useRef, useEffect, useState } from 'react'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'

const App = () => {

  const footerRef = useRef();
  const [footerHeight, setFooterHeight] = useState(0);
   useEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.offsetHeight);
    }
  }, []);
  return (
    <div className='wrap'>
      <Home footerHeight={footerHeight}></Home>
      <Footer innerRef={footerRef}></Footer>
    </div>
  )
}

export default App