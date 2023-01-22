import foodRestaurant from '../assets/icons_assets/restauranfood.jpg'

export default function Hero() {

    return (

        <>

            <section id="hero">

                <div className="container-fluid">

                    <div className="row">

                        <div className=" hero-box col-12 col-md-6 order-1 order-md-1 ">

                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>

                        </div>

                        <div className="col-6 col-md-6 order-3 order-md-2" >

                            <img src={foodRestaurant}  alt='food restaurant' />

                        </div>

                        <div className="col-6 col-md-6 order-2 order-md-3  txt-btn" >

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <button className='btn-reserve-a-table'>Reserve a Table</button>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}