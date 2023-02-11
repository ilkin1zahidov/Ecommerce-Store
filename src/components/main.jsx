import React from 'react'

const main = ({ image }) => {
    return (
        <>
            <section id='main'>
                <div className="container">
                    <div className="card--all">
                        <div className="card">
                            <div className="card_img">
                                <img src={image.Card_one} alt="card_one" />
                            </div>
                            <div className="card-body">
                                <h1 className='card_name'>Apple Watch</h1>
                                <p className='card_series'>Series 5 SE</p>
                                <div className="card_money">
                                    <span className='money'>$ 529.99</span>
                                    <form id='checkout'>
                                        <button className='card_button'><img src={image.Basket} alt="" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_img">
                                <img src={image.Card_two} alt="card_one" />
                            </div>
                            <div className="card-body">
                                <h1 className='card_name'>Sony ZX330BT</h1>
                                <p className='card_series'>Light Grey</p>
                                <div className="card_money">
                                    <span className='money'>$ 39.99</span>
                                    <form id='checkout'>
                                        <button className='card_button'><img src={image.Basket} alt="" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_img">
                                <img src={image.Card_three} alt="card_one" />
                            </div>
                            <div className="card-body">
                                <h1 className='card_name'>Iphone 11</h1>
                                <p className='card_series'>Serious Black</p>
                                <div className="card_money">
                                    <span className='money'>$ 619.99</span>
                                    <form id='checkout'>
                                        <button className='card_button'><img src={image.Basket} alt="" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_img">
                                <img src={image.Card_four} alt="card_one" />
                            </div>
                            <div className="card-body">
                                <h1 className='card_name'>Iphon</h1>
                                <p className='card_series'>Subway Blue</p>
                                <div className="card_money">
                                    <span className='money'>$ 529.99</span>
                                    <form id='checkout'>
                                        <button className='card_button'><img src={image.Basket} alt="" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div style={{width:'460px',height:'360px'}} className="card">
                            <div className="card_img">
                                <img src={image.Card_five} alt="card_one" />
                            </div>
                            <div className="card-body">
                                <h1 className='card_name'>Silver - M1 Pro</h1>
                                <p className='card_series'>Silver - M1 Pro</p>
                                <div className="card_money">
                                    <span className='money'>$ 3249.99</span>
                                    <form id='checkout'>
                                        <button className='card_button'><img src={image.Basket} alt="" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_img">
                                <img src={image.Card_six} alt="card_one" />
                            </div>
                            <div className="card-body">
                                <h1 className='card_name'>Iphone 11</h1>
                                <p className='card_series'>Product RED</p>
                                <div className="card_money">
                                    <span className='money'>$ 619.99</span>
                                    <form id='checkout'>
                                        <button className='card_button'><img src={image.Basket} alt="" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_img">
                                <img src={image.Card_seven} alt="card_one" />
                            </div>
                            <div className="card-body">
                                <h1 className='card_name'>Iphone 11</h1>
                                <p className='card_series'>Milky White</p>
                                <div className="card_money">
                                    <span className='money'>$ 619.99</span>
                                    <form id='checkout'>
                                        <button className='card_button'><img src={image.Basket} alt="" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_img">
                                <img src={image.Card_eight} alt="card_one" />
                            </div>
                            <div className="card-body">
                                <h1 className='card_name'>Iphone 12</h1>
                                <p className='card_series'>Rose Pink</p>
                                <div className="card_money">
                                    <span className='money'>$ 729.99</span>
                                    <form id='checkout'>
                                        <button className='card_button'><img src={image.Basket} alt="" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_img">
                                <img src={image.Card_nine} alt="card_one" />
                            </div>
                            <div className="card-body">
                                <h1 className='card_name'>Iphone 12</h1>
                                <p className='card_series'>Navy Blue</p>
                                <div className="card_money">
                                    <span className='money'>$ 729.99</span>
                                    <form id='checkout'>
                                        <button className='card_button'><img src={image.Basket} alt="" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div style={{width:'460px',height:'360px'}} className="card">
                            <div className="card_img">
                                <img src={image.Card_ten} alt="card_one" />
                            </div>
                            <div className="card-body">
                                <h1 className='card_name'>Dell XPS 15 2-in-1</h1>
                                <p className='card_series'>Midnight Gray</p>
                                <div className="card_money">
                                    <span className='money'>$ 3199.99</span>
                                    <form id='checkout'>
                                        <button className='card_button'><img src={image.Basket} alt="" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_img">
                                <img src={image.Card_eleven} alt="card_one" />
                            </div>
                            <div className="card-body">
                                <h1 className='card_name'>Iphone 13 Pro</h1>
                                <p className='card_series'>Silly Silver</p>
                                <div className="card_money">
                                    <span className='money'>$ 1029.99</span>
                                    <form id='checkout'>
                                        <button className='card_button'><img src={image.Basket} alt="" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_img">
                                <img src={image.Card_twelve} alt="card_one" />
                            </div>
                            <div className="card-body">
                                <h1 className='card_name'>Iphone 13 Pro</h1>
                                <p className='card_series'>Grey</p>
                                <div className="card_money">
                                    <span className='money'>$ 1099.99</span>
                                    <form id='checkout'>
                                        <button className='card_button'><img src={image.Basket} alt="" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_img">
                                <img src={image.Card_thirteen} alt="card_one" />
                            </div>
                            <div className="card-body">
                                <h1 className='card_name'>Samsung Note 21 </h1>
                                <p className='card_series'>2 - Options</p>
                                <div className="card_money">
                                    <span className='money'>$ 999.99</span>
                                    <form id='checkout'>
                                        <button className='card_button'><img src={image.Basket} alt="" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_img">
                                <img src={image.Card_fourtheen} alt="card_one" />
                            </div>
                            <div className="card-body">
                                <h1 className='card_name'>Samsung Galaxy S21+</h1>
                                <p className='card_series'>Lilac Purple</p>
                                <div className="card_money">
                                    <span className='money'>$ 849.99</span>
                                    <form id='checkout'>
                                        <button className='card_button'><img src={image.Basket} alt="" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div style={{width:'460px',height:'360px'}} className="card">
                            <div className="card_img">
                                <img src={image.Card_fiftheeen} alt="card_one" />
                            </div>
                            <div className="card-body">
                                <h1 className='card_name'>Dell XPS 13</h1>
                                <p className='card_series'>White</p>
                                <div className="card_money">
                                    <span className='money'>$ 1799.99</span>
                                    <form id='checkout'>
                                        <button className='card_button'><img src={image.Basket} alt="" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div style={{width:'460px',height:'360px'}} className="card">
                            <div className="card_img">
                                <img src={image.Card_sixtheen} alt="card_one" />
                            </div>
                            <div className="card-body">
                                <h1 className='card_name'>Dell XPS 15</h1>
                                <p className='card_series'>Light Grey</p>
                                <div className="card_money">
                                    <span className='money'>$ 1899.99</span>
                                    <form id='checkout'>
                                        <button className='card_button'><img src={image.Basket} alt="" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default main