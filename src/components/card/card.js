import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } from '../../slice/cartSlice'
import { Link } from 'react-router-dom'
import "../../assets/css/card.css"
import CheckBag from '../../assets/img/bag.svg';
const Cart = () => {

    const cart = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch])

    return (
        <div className='card-bag' >
            <div className="container">
                <div className="top">
                    <h1>Bag</h1>
                </div>
                <div className="card-all">
                {cart.map((s) => {
                    return (
                            <div className='card-img'>
                                <img src={s.picture} alt="" />
                            </div>
                    )
                })}
             </div>
                <Link to="/card-details">
                    <div className="button-bag">
                    <button className='view-bag'> <div className="card-context"><img src={CheckBag} alt="" /> <span>View Bag</span></div></button>
                    </div>
                  
                </Link>
            </div>

        </div>
    )
}

export default Cart