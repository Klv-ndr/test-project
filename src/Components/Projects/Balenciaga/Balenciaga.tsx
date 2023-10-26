import './Balenciaga.scss'
import BalenciagaImg from 'assets/Balenciaga.png'
import BalComent from 'assets/comm1.png'
import { FontStyles } from 'Components/Styles/FontStyles'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

type Props = { fontStyles: FontStyles }
const Balenciaga: React.FC<Props> = ({ fontStyles }) => {
    return (
        <>
            <section className="balenciaga">
                <div className="img-title one">
                    <img src={BalenciagaImg} alt="BalImage" />
                </div>
                <div className="text">
                    <div className="title" style={fontStyles.title}>
                        The wall new Balenciaga.com
                    </div>
                    <div className="description" style={fontStyles.description}>
                        This article is floated online with an aim to help you
                        find the best dvd printing solution.
                        <p className="space">
                            Dvd printing is an important feature used by large
                            and small DVD production houses to print information
                            on DVDs.
                        </p>
                    </div>
                    <a className="text-link" href="">
                        <ArrowRightIcon />
                        See Case Study
                    </a>
                </div>
            </section>
            <section className="coment-balenciaga">
                <div className="comment" style={fontStyles.comment}>
                    “In my history of working with trade show vendors, I can
                    honestly say that there is not one company that I've ever
                    worked with that has better service than Exhibit Systems.”
                </div>
                <div className="coment-name">
                    <img className="com-img" src={BalComent} alt="BalComment" />
                    <div className="visitors">
                        <div className="user">Angel Armstrong</div>
                        <div className="work">Founder & CEO, Google</div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Balenciaga
