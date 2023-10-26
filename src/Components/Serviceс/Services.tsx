import './Services.scss'
import Visitor from 'assets/Visitor1.png'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { FontStyles } from 'Components/Styles/FontStyles'

type Props = { fontStyles: FontStyles }
const Services: React.FC<Props> = ({ fontStyles }) => {
    return (
        <>
            <div className="services">
                <section className="text-services">
                    <div className="sub-title" style={fontStyles.subtitle}>
                        What we do for you
                    </div>
                    <div className="title" style={fontStyles.title}>
                        Strategy. Design Content. Technology Development{' '}
                    </div>
                    <div className="description" style={fontStyles.description}>
                        There’s no secret sauce, no wizard behind the curtain.
                        What makes Aerolab tick is an interdisciplinary team
                        with a framework that fosters candid collaboration.
                    </div>
                    <a className="link-text" href="">
                        <ArrowRightIcon className="rigth-icon-grey" />
                        More know About us
                    </a>
                </section>
                <section className="comment-title">
                    <div className="comment-text">
                        With More than 10 Years of Knowledge and Expertise we
                        Design and Code Websites and Apps, We Build Brands and
                        Help Them Succeed
                    </div>
                    <div className="comment-name">
                        <img
                            className="visitor-1"
                            src={Visitor}
                            alt="visitor"
                        />
                        <div className="visitors">
                            <div className="name">Genevieve Rodriquez</div>
                            <div className="job">Founder & CEO, Webovio</div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Services
