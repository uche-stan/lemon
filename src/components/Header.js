import logo from '../assets/icons_assets/Logo .png'
import Nav from './Nav'

export default function Header() {


    return (

        <>
            <header id='header'>

                <div className='container-fluid bg-light'>

                    <div className='row py-3'>

                        <div className='col'>

                            <div className='d-flex justify-content-center'>
                                <img src={logo} alt="logo" />

                                <div className='d-none d-sm-block  '>
                                <Nav />
                                </div>
                            </div>

                        </div>



                    </div>

                </div>




            </header>

        </>
    )
}