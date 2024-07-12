import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
const Cart = () => {

  const { cartItems, food_list, removeFromCart, getToatlCarAmound} = useContext(StoreContext)

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Peoduk</p>
          <p>Harga</p>
          <p>Jumlah</p>
          <p>Total</p>
          <p>Hapus</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>Rp.{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Rp.{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cros'>x</p>
                </div>
                <hr />
              </div>

            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Total belanjaan</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rp.{getToatlCarAmound()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Biaya antar</p>
              <p>Rp.{getToatlCarAmound()===0?0:5000}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rp.{getToatlCarAmound()===0?0:getToatlCarAmound()+5000}</b>
            </div>
            <button onClick={()=>navigate('/order')}>Tekan Untuk Pemesanan</button>
          </div>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Jika kamu punya kode promo, Masukan di sini</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promocode' />
              <button>Submit</button>
            </div>
          </div>
        </div>
        </div>
      </div>
      )
}

      export default Cart
