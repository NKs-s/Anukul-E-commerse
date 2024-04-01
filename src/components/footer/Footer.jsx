import React from 'react'
import Logo from '../img/logo.jpg'
import ElectronLogo from '../img/electron.png'
import PhilipsLogo from '../img/philips.png'
import './footer.css'
function Footer() {
    return (
        <footer>
            <div className="footer-1">
                <div className="footer-left">
                    <img src={Logo} alt="Anukul logo" />
                    <div>
                        Birtamode, 4-Jhapa
                    </div>
                </div>
                <div className="footer-mid">
                    <div>
                        Jhapa Super Market
                    </div>
                    <div>
                        Pro. Sunil Chhetri
                    </div>
                    <div>
                        023-531 432 | 9842656990
                    </div>
                </div>
                <div className="footer-right">
                    <div>
                        Authorized Dealer
                    </div>
                    <div className="dealer-name">
                        <img src={ElectronLogo} alt="Electron Logo" />
                        <img src={PhilipsLogo} alt="Philips Logo" />
                    </div>
                    <div className="dealer-name">
                        <div>
                            Advin Health Care
                        </div>
                        <div>
                            Medical Point
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-2">
                <span>Designed By <a className='creators' href="https://www.nishantapoudel.com.np/" target='blank'>Nishanta</a> and <a className='creators' href="https://www.krishavkoirala.com.np/" target='blank'>Krishav</a>. </span>
                <span>&copy;Anukul Electronics {new Date().getFullYear()} | All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer