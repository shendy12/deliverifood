import React, { useState, useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext'; // Sesuaikan path dengan lokasi StoreContext

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, setCartItems } = useContext(StoreContext);
    const itemCount = cartItems[id] || 0; // Sinkronkan dengan cartItems[id]

    const handleAddToCart = () => {
        const updatedCartItems = { ...cartItems };
        updatedCartItems[id] = (updatedCartItems[id] || 0) + 1;
        setCartItems(updatedCartItems);
    };

    const handleRemoveFromCart = () => {
        if (cartItems[id] > 0) {
            const updatedCartItems = { ...cartItems };
            updatedCartItems[id] = updatedCartItems[id] - 1;
            setCartItems(updatedCartItems);
        }
    };

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt="" />
                {!itemCount ? (
                    <img className='adds' onClick={handleAddToCart} src={assets.add_icon_white} alt='' />
                ) : (
                    <div className='food-item-couner'>
                        <img onClick={handleRemoveFromCart} src={assets.remove_icon_red} alt="" />
                        <p>{itemCount}</p>
                        <img onClick={handleAddToCart} src={assets.add_icon_green} alt="" />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>Rp. {price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
