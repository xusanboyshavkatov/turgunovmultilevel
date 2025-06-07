import { React, useState, useEffect, use } from 'react'
import './home.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import testimg from '../../assets/test.png'
import Card from '../../components/card/Card';
import axios from 'axios';


const Home = ({ footerHeight }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (tg?.initDataUnsafe?.user) {
      setUser(tg.initDataUnsafe.user);
      sendProfileData();
    } else {
      console.log("Telegram WebApp foydalanuvchi ma'lumotlari mavjud emas.");
    }
  }, []);

  const sendProfileData = async () => {
    try {
      const response = await axios.post(
        'https://mock.codearch.uz/api/user/profile',
        {
          first_name: `${user.first_name}`,
          last_name: `${user.first_name}`,
          photo: `${user.photo_url}`,
          telegram_id: `${user.id}`
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );

      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='home' style={{ paddingBottom: footerHeight }}>

      <div className="home-navbar">
        {user?.photo_url && <img src={user.photo_url} alt="User" />}
        <div className="home-navbar-detalies">
          <h2>Good day👋</h2>
          <h1>{user?.first_name}</h1>
        </div>
      </div>

      <div className="home-search">
        <div className="home-search-bar">
          <FontAwesomeIcon icon={faMagnifyingGlass} className='home-search-icon' />
          <input type="text" placeholder='Search here' />
        </div>
      </div>

      <div className="home-categories">
        <h1>Categories</h1>
        <div className="home-categories-card">
          <div
            className="home-categories-card-item"
            style={{
              backgroundImage: `url(${testimg})`,
              backgroundSize: 'cover',          // Rasmani divni to‘liq qamrab olishi uchun
              backgroundPosition: 'center',     // Markazdan joylashishi uchun (ixtiyoriy)
              backgroundRepeat: 'no-repeat'     // Takrorlanmasligi uchun (ixtiyoriy)
            }}
          >
            <h2>Speaking</h2>

          </div>
          <div
            className="home-categories-card-item"
            style={{
              backgroundImage: `url(${testimg})`,
              backgroundSize: 'cover',          // Rasmani divni to‘liq qamrab olishi uchun
              backgroundPosition: 'center',     // Markazdan joylashishi uchun (ixtiyoriy)
              backgroundRepeat: 'no-repeat'     // Takrorlanmasligi uchun (ixtiyoriy)
            }}
          >
            <h2>Writing</h2>

          </div>
        </div>
      </div>

      <div className="home-cards">
        <div className="home-cards-reco-seeall">
          <h1>Recommended</h1>
          <a>See all</a>
        </div>
        <div className="home-cards-items">
          {/* <Card></Card> */}
          {/* <Card></Card>
          <Card></Card> */}
          <H1>{user}</H1>
        </div>
      </div>

    </div>
  )
}

export default Home