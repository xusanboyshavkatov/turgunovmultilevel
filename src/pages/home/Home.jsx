import {React, useState, useEffect} from 'react'
import './home.css'
import Footer from '../../components/footer/Footer'

const Home = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (tg?.initDataUnsafe?.user) {
      setUser(tg.initDataUnsafe.user);
    } else {
      console.log("Telegram WebApp foydalanuvchi ma'lumotlari mavjud emas.");
    }
  }, []);

  return (
    <div className='home'>
      {user ? (
        <div>
          <h2 className="text-xl font-bold">Salom, {user.first_name}!</h2>
          <p>ID: {user.id}</p>
          <p>Username: @{user.username}</p>
          <p>Til: {user.language_code}</p>
        </div>
      ) : (
        <p>Ma'lumotlar yuklanmoqda yoki foydalanuvchi ma'lum emas...</p>
      )}
        <Footer></Footer>
    </div>
  )
}

export default Home