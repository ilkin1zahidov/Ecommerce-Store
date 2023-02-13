import React from 'react';
import DataJson from "../../data/data";

const main = ({ image }) => {
    return (
        <>
            <section id='main'>
                <div className="container">
                    <div className="card--all">
                        {
                            DataJson.map((data) => {
                                return (
                                    <div className="card">
                                     
                                            <div 
                                            
                                            key={data.id}
                                            style={{
                                                backgroundImage: `url(${data.picture})`,
                                                height: data.height,
                                                width: data.width,
                                                backgroundRepeat:data.backgroundRepeat
                                            }}
                                            />
                                  
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
                                )
                            })
                        }

                        {/* <div style={{ width: '460px', height: "360px" }} className="card">
                            <div className="card_img">
                                <img src={image.Card_five} alt="card_one" />
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
                        </div> */}


                    </div>
                </div>
            </section>
        </>
    )
}

export default main