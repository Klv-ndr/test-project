import './Modeling.scss'
import DModuleImg from 'assets/3dModel.png'
import ModComent from 'assets/comm2.png'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { FontStyles } from 'Components/Styles/FontStyles'

type Props = { fontStyles: FontStyles }
const Modeling: React.FC<Props> = ({ fontStyles }) => {
    return (
        <>
            <section className="d-Model">
                <div className="text">
                    <div className="title" style={fontStyles.title}>
                        Is this the future of 3D model?
                    </div>
                    <div className="description" style={fontStyles.description}>
                        While it was just a TV show, that little speech at the
                        beginning of the original Star Trek show really did do a
                        good job of capturing our feelings about space.
                        <p className="space">
                            It is those feelings that drive our love of
                            astronomy and our desire to learn more and more
                            about it.
                        </p>
                    </div>
                    <a className="text-link" href="">
                        <ArrowRightIcon />
                        See Case Study
                    </a>
                </div>
                <div className="img-title two">
                    <img src={DModuleImg} alt="ModelImage" />
                </div>
            </section>
            <section className="coment-d-Model">
                <div className="comment" style={fontStyles.comment}>
                    “I know they are going to be honest with me. I am not going
                    to get a subpar product; I know it is going to be good. That
                    is the number one advantage of working with Exhibit Systems.
                </div>
                <div className="coment-name">
                    <img
                        className="com-img"
                        src={ModComent}
                        alt="ModelComment"
                    />
                    <div className="visitors">
                        <div className="user">Lina Hart</div>
                        <div className="work">Founder & CEO, Jico</div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Modeling
