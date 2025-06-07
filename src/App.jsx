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

  const [user, setUser] = useState(null);
    const [initData, setinitData] = useState()
  
    useEffect(() => {
      const tg = window.Telegram?.WebApp;
  
      if (tg?.initDataUnsafe?.user) {
        setUser(tg.initDataUnsafe.user);
        setinitData(tg)
        sendProfileData();
      } else {
        console.log("Telegram WebApp foydalanuvchi ma'lumotlari mavjud emas.");
      }
    }, []);

  return (
    <div className='wrap'>
      {/* <Home footerHeight={footerHeight}></Home>
      <Footer innerRef={footerRef}></Footer> */}
      <pre>{initData ? JSON.stringify(initData, null, 2) : 'Yuklanmoqda...'}</pre>
    </div>
  )
}

export default App