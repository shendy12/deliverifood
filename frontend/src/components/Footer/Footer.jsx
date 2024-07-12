import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>

        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Kami adalah restoran yang telah berdiri sejak tahun 1945 dan terus berkomitmen untuk membuka lapangan pekerjaan bagi masyarakat umum. Sejak awal berdiri, kami tidak hanya fokus pada penyajian makanan berkualitas tinggi, tetapi juga berupaya memberikan kontribusi positif kepada komunitas sekitar. Dengan terus berkembang, kami bertekad untuk menciptakan lebih banyak peluang kerja dan mendukung pertumbuhan ekonomi lokal. Kami percaya bahwa kesuksesan kami tidak hanya diukur dari kepuasan pelanggan, tetapi juga dari dampak positif yang kami berikan kepada masyarakat.</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className="footer-content-center">
                <h2>MariMakan</h2>
                <ul>
                    <li>Home</li>
                    <li>About-Us</li>
                    <li>Delivery</li>
                    <li>Pryfacy Police</li>
                </ul>

            </div>
            
            <div className="footer-content-right">
                <h2>HUBUNGI KAMI</h2>
                <ul>
                    <li>+62-857-4786-3723</li>
                    <li>shendyfilanzi1@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">© 2024 Restoran Mari Makan. Semua Hak Dilindungi.</p>
    </div>
  )
}


export default Footer
