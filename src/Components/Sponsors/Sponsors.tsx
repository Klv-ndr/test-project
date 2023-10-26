import './Sponsors.scss'
import AndrewPorterLogo from 'assets/Andrew-Porter-Logo.png'
import LeaderShipLogo from 'assets/Jalen-Rose-Leadership-Academy-Logo.png'
import WalbridgeLogo from 'assets/Wal.png'
import IdealLogo from 'assets/Ideal.png'
import PhalenLogo from 'assets/PhalenLeadership.png'

type Props = {}
const Sponsors = (props: Props) => {
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
        </>
    )
}
export default Sponsors
