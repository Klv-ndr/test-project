import { Button, Container } from '@mui/material'
import logo from 'assets/Logo.svg'
import './Header.scss'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

type Props = {}
const Header = (props: Props) => {
    return (
        <>
            <div className="background-img">
                <Container>
                    <div className="tool-bar">
                        <img className="logo" src={logo} alt="logo" />
                        <div className="menu">
                            <Button className="btn-more"></Button>
                        </div>
                    </div>
                    <div className="main-title">
                        <div className="sub-title">A place where</div>
                        <div className="title">
                            A creative agency for redemptive brands
                        </div>
                        <div className="description-title">
                            Anteelo is a leading strategic design firm that
                            builds powerful digital solutions for startups and
                            enterprises.
                        </div>
                        <a className="touch" href="">
                            <ArrowRightIcon className="right-icon" />
                            Get in touch
                        </a>
                    </div>
                </Container>
            </div>
        </>
    )
}
export default Header
