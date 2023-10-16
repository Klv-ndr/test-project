import { Container } from '@mui/material'
import AndrewPorterLogo from 'assets/Andrew-Porter-Logo.png'
import LeaderShipLogo from 'assets/Jalen-Rose-Leadership-Academy-Logo.png'
import WalbridgeLogo from 'assets/Wal.png'
import IdealLogo from 'assets/Ideal.png'
import PhalenLogo from 'assets/PhalenLeadership.png'
import './Main.scss'
import Services from 'Components/Serviceс/Services'
import Project from 'Components/Project/Project'
import Evaluation from 'Components/Evaluation/Evaluation'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

type Props = {}
const Main = (props: Props) => {
    return (
        <>
            <div className="sponsors">
                <img
                    className="sponsors-logo"
                    src={AndrewPorterLogo}
                    alt="AndrewPorterLogo"
                />
                <img
                    className="sponsors-logo"
                    src={LeaderShipLogo}
                    alt="LeaderShipLogo"
                />
                <img
                    className="sponsors-logo"
                    src={WalbridgeLogo}
                    alt="WalbridgeLogo"
                />
                <img
                    className="sponsors-logo"
                    src={IdealLogo}
                    alt="IdealLogo"
                />
                <img
                    className="sponsors-logo"
                    src={PhalenLogo}
                    alt="PhalenLogo"
                />
            </div>
            <Container>
                <Services />
                <hr className="horizontal-line" />
                <Project />
                <hr className="horizontal-line" />
                <Evaluation />
            </Container>
            <div className="get-started">
                <div className="title-green">
                    Let’s make something amazing together.
                </div>
                <a className="product-link start" href="">
                    <ArrowRightIcon />
                    Let's get started
                </a>
            </div>
        </>
    )
}
export default Main
