
import React,{ useState } from "react";
import DataJson from "../../data/data";

function Main() {
  const [filter, setFilter] = useState('');
  const searchText = (event) => {
    setFilter(event.target.value);
  } 
  let dataSearch = DataJson.cardData.filter(data =>{
      return Object.keys(data).some(key=>
        data[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
      )
  });
  return (
    <>
    <main>
    <section id='input'>
                <div className="container">
                    <div className="input_form">
                        <form  >
                            <label className='input_name'>Search Item</label>
                            <input 
                            className='search_input' 
                            type="text" 
                            placeholder="Apple watch, Samsung S21, Macbook Pro, ..."
                            value={filter}
                            onChange={searchText.bind(this)}
                            />
                          
                        </form>

                    </div>
                </div>
    </section>
    <section id="main">
        <div className="container">
          <div className="card--all">
            {dataSearch.map((data) => {
              return (
                <div key ={data.id}className="card">
                  <div       
                    style={{
                      width: data.size,
                      height: data.sizeHeight,
                      background: data.background,
                      borderRadius: data.borderRadius,
                      padding: data.padding,
                    }}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${data.picture})`,
                        height: data.height,
                        width: data.width,
                        backgroundRepeat: data.backgroundRepeat,
                        borderRadius: data.borderRadius,
                      }}
                    />
                  </div>         
                  <div className="card-body"  >
                    <h1 className="card_name">{data.name}</h1>
                    <p className="card_series">{data.series}</p>
                    <div className="card_money">
                      <span className="money">${data.money}</span>
                      <form id="checkout">
                        <button className="card_button">
                          <img src={data.basket} alt="basket" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>   
              );
            })}
          </div>
        </div>
    </section>
    </main>

    </>
  );
}

export default Main;
