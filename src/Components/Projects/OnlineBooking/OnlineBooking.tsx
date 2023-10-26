import './OnlineBooking.scss'
import OnlineBoookingImg from 'assets/onlineBooking.png'
import BookComent from 'assets/comm3.png'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { FontStyles } from 'Components/Styles/FontStyles'

type Props = { fontStyles: FontStyles }
const OnlineBooking: React.FC<Props> = ({ fontStyles }) => {
    return (
        <>
            <section className="online-booking">
                <div className="img-title three">
                    <img src={OnlineBoookingImg} alt="onlineBookImage" />
                </div>
                <div className="text">
                    <div className="title" style={fontStyles.title}>
                        Is this the future of Online Booking
                    </div>
                    <div className="description" style={fontStyles.description}>
                        You should be able to find several indispensable facts
                        about motivation in the following paragraphs.
                        <p className="space">
                            If there’s at least one fact you didn’t know before,
                            imagine the difference it might make.
                        </p>
                    </div>
                    <a className="text-link" href="">
                        <ArrowRightIcon />
                        See Case Study
                    </a>
                </div>
            </section>
            <section className="coment-online-booking">
                <div className="comment" style={fontStyles.comment}>
                    “Exhibit Systems is not a provider. They are not a supplier.
                    They are a partner with expertise in making trade shows
                    effective.”
                </div>
                <div className="coment-name">
                    <img
                        className="com-img"
                        src={BookComent}
                        alt="BookComment"
                    />
                    <div className="visitors">
                        <div className="user">Eunice Oliver</div>
                        <div className="work">Founder & CEO, Zeem</div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default OnlineBooking
