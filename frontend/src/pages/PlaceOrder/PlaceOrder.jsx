import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const {getToatlCarAmound} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="tile">Informasi Pengiriman</p>
        <div className="multi-fields">
          <input type="text" placeholder='Nama depan' />
          <input type="text" placeholder='Nama Belakang'/>
        </div>
        <input type="enmail" placeholder=' Alamat email'/>
        <input type="text" placeholder=' Jalan' />
        <div className="multi-fields">
          <input type="text" placeholder='Kabupaten' />
          <input type="text" placeholder='Kecamatan'/>
        </div>

        <div className="multi-fields">
          <input type="text" placeholder='Kode Pos' />
          <input type="text" placeholder='Desa'/>
        </div>

        <input type="text" placeholder='Nomor telephone' />


      </div>

      <div className="place-order-right">

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
            <button>Tekan Untuk Pembayaran</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
