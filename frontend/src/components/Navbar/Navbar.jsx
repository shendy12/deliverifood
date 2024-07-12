import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
const Navbar = ({setShowLogin}) => {
const[menu,setMenu] = useState("menu");

const{getToatlCarAmound} = useContext(StoreContext)

  return (
    <div className='navbar'>
       <Link to='/'><img src={assets.logo} alt="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-downloads' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>aplikasi</a>
        <a href='#footer' onClick={()=>setMenu("contatc-us")} className={menu==="contatc-us"?"active":""}>contatc us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <Link to='/cart' ><img src={assets.basket_icon} alt="" /></Link>
            <div className={getToatlCarAmound()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>


      </div>
    </div>
  )
}

export default Navbar
