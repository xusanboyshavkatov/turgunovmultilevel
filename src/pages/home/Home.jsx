import { React, useState, useEffect } from 'react'
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

      <div className="home-navbar">
        {user?.photo_url && <img src={user.photo_url} alt="User" />}
        <div className="home-navbar-detalies">
          <h2>Good day👋</h2>
          <h1>{user?.first_name} salom</h1>
        </div>
      </div>

      {user ? (
        <div>
          <h2 className="text-xl font-bold">Salom, {user.first_name}!</h2>
          <p>ID: {user.id}</p>
          <p>Username: @{user.username}</p>
          <p>Til: {user.language_code}</p>
          <img src={user.photo_url} alt="" />
        </div>
      ) : (
        <p>Ma'lumotlar yuklanmoqda yoki foydalanuvchi ma'lum emas...</p>
      )}
      <Footer></Footer>
    </div>
  )
}

export default Home