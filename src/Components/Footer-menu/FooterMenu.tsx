import './FooterMenu.scss'

type Props = {}
const FooterMenu = (props: Props) => {
    return (
        <>
            <div className="menu">
                <div className="column">
                    <h1 className="article">Services</h1>
                    <ul className="main-menu">
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
                </div>
                <div className="column">
                    <h1 className="article">Help and advice</h1>
                    <ul className="main-menu">
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
                </div>
                <div className="column">
                    <h1 className="article">Company</h1>
                    <ul className="main-menu">
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
            </div>
        </>
    )
}
export default FooterMenu
