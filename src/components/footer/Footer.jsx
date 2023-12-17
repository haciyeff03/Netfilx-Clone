import React from "react"
import { homeData } from "../../dummyData"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <ul className='flex'>
              <li>İstifadə qaydaları</li>
              <li>Gizlilik Siyasəti</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Baxış Siyahısı</li>
            </ul>
            <p>© 2023 STREAMIT. Bütün hüquqlar qorunur. Bu platformadakı bütün videolar və şoular Streamit Inc-in ticarət nişanlarıdır və bütün əlaqəli şəkillər və məzmunlar Streamit Inc-in mülkiyyətidir. Bunun təkrarlanması və surəti qəti qadağandır. Bütün hüquqlar qorunur.</p>
          </div>
          <div className='box'>
            <h3>Bizi izləyin</h3>
            <i className='fab fa-facebook-f'></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-github'></i>
            <i className='fab fa-instagram'></i>
          </div>
          <div className='box'>
            <h3>Streamit Tətbiqi</h3>
            <div className='img flexSB'>
              <img src='https://img.icons8.com/color/48/000000/apple-app-store--v3.png' />
              <span>App Store</span>
              <img src='https://img.icons8.com/fluency/48/000000/google-play.png' />
              <span>Google Play Store</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
