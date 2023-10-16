import './Footer.scss'
import { Container } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import TwitterIcon from '@mui/icons-material/Twitter'
import GoogleIcon from '@mui/icons-material/Google'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

type Props = {}
const Footer = (props: Props) => {
    return (
        <>
            <div className="footer">
                <Container>
                    <div className="contacts">
                        <div className="phone">
                            <div className="title-contact">Phone</div>
                            <div className="discription-contact">
                                <a
                                    className="discription-contact"
                                    href="tel:+3250312832"
                                >
                                    +32 50 31 28 32
                                </a>
                            </div>
                        </div>
                        <div className="adress">
                            <div className="title-contact">Adress</div>
                            <div className="discription-contact">
                                <a
                                    className="discription-contact"
                                    href="https://www.google.com/maps/dir//Merlin+Crest,+Silpara,+Purba+Barisha,+%D0%9A%D0%BE%D0%BB%D0%BA%D0%B0%D1%82%D0%B0,+%D0%97%D0%B0%D1%85%D1%96%D0%B4%D0%BD%D0%B0+%D0%91%D0%B5%D0%BD%D2%91%D0%B0%D0%BB%D1%96%D1%8F/@22.4751507,88.2282418,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a027a646caebc8b:0x9c07ab75d58a0a5f!2m2!1d88.3106427!2d22.475013?hl=uk-UK&entry=ttu"
                                >
                                    491 Merlin Crest Suite 963
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr className="horizontal-line-footer" />
                    <div className="social">
                        <div className="menu">
                            <ul className="main-menu">
                                Services
                                <li className="sub-menu">
                                    <a className="link-menu" href="">
                                        Strategy Design
                                    </a>
                                </li>
                                <li className="sub-menu">
                                    <a className="link-menu" href="">
                                        Product Design
                                    </a>
                                </li>
                                <li className="sub-menu">
                                    <a className="link-menu" href="">
                                        Content Strategy
                                    </a>
                                </li>
                                <li className="sub-menu">
                                    <a className="link-menu" href="">
                                        Brand Strategy
                                    </a>
                                </li>
                                <li className="sub-menu">
                                    <a className="link-menu" href="">
                                        Development
                                    </a>
                                </li>
                            </ul>
                            <ul className="main-menu">
                                Help and advice
                                <li className="sub-menu">
                                    <a className="link-menu" href="">
                                        How it works
                                    </a>
                                </li>
                                <li className="sub-menu">
                                    <a className="link-menu" href="">
                                        Contact Support
                                    </a>
                                </li>
                                <li className="sub-menu">
                                    <a className="link-menu" href="">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className="sub-menu">
                                    <a className="link-menu" href="">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                            <ul className="main-menu">
                                Company
                                <li className="sub-menu">
                                    <a className="link-menu" href="">
                                        About
                                    </a>
                                </li>
                                <li className="sub-menu">
                                    <a className="link-menu" href="">
                                        Blog
                                    </a>
                                </li>
                                <li className="sub-menu">
                                    <a className="link-menu" href="">
                                        Contact
                                    </a>
                                </li>
                                <li className="sub-menu">
                                    <a className="link-menu" href="">
                                        Jobs
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="info">
                            <div className="main-menu">Get in Touch</div>
                            <div className="sub-menu">
                                Feel free to get in touch with us vai email
                            </div>
                            <div className="email">
                                <a
                                    className="link-email"
                                    href="https://www.google.com/intl/ru/gmail/about/"
                                >
                                    info.webovio@gmail.com
                                </a>
                            </div>

                            <div className="sociality">
                                <a href="https://www.facebook.com/">
                                    <FacebookOutlinedIcon className="link-site" />
                                </a>
                                <a href="https://twitter.com/?lang=ru">
                                    <TwitterIcon className="link-site" />
                                </a>
                                <a href="https://www.google.com">
                                    <GoogleIcon className="link-site" />
                                </a>
                                <a href="https://www.linkedin.com/feed/">
                                    <LinkedInIcon className="link-site" />
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
export default Footer
