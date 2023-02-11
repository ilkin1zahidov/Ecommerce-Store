import React from 'react'

const input = () => {
    return (
        <>
            <section id='input'>
                <div className="container">
                    <div className="input_form">

                        <form  >
                            <label className='input_name'>Search Item</label>
                            <input className='search_input' type="text" value='Apple Watch,Search S21,Mackbook Pro, ...' />
                        </form>

                    </div>
                </div>
            </section>
        </>
    )
}

export default input