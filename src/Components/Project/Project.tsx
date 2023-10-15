import './Project.scss'
import { Container } from '@mui/material'
import BalenciagaImg from 'assets/Balenciaga.png'
import DModuleImg from 'assets/3dModel.png'
import OnlineBoookingImg from 'assets/onlineBooking.png'
import BalComent from 'assets/BalComent.png'
import ModComent from 'assets/ModComent.png'
import BookComent from 'assets/BookComent.png'

type Props = {}
const Project = (props: Props) => {
    return (
        <>
            <Container>
                <div className="text-area">
                    <div className="title-area">
                        <div className="title-text">
                            We Have Some Awesomr Project.
                        </div>
                    </div>
                    <div className="description-area">
                        <div className="description-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,{' '}
                        </div>
                    </div>
                </div>
            </Container>
            <div className="balenciaga">
                <div className="img-title one">
                    <img src={BalenciagaImg} alt="BalImage" />
                </div>
                <div className="text">
                    <div className="title-text">
                        The wall new Balenciaga.com
                    </div>
                    <div className="description-text">
                        This article is floated online with an aim to help you
                        find the best dvd printing solution.
                        <p className="space">
                            Dvd printing is an important feature used by large
                            and small DVD production houses to print information
                            on DVDs.
                        </p>
                    </div>
                    <a className="text-link" href="">
                        See Case Study
                    </a>
                </div>
            </div>
            <div className="coment-balenciaga">
                <div className="coment-text">
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
            </div>
            <div className="d-Model">
                <div className="text">
                    <div className="title-text">
                        Is this the future of 3D model?
                    </div>
                    <div className="description-text">
                        While it was just a TV show, that little speech at the
                        beginning of the original Star Trek show really did do a
                        good job of capturing our feelings about space.
                        <p>
                            It is those feelings that drive our love of
                            astronomy and our desire to learn more and more
                            about it.
                        </p>
                    </div>
                    <a className="text-link" href="">
                        See Case Study
                    </a>
                </div>
                <div className="img-title two">
                    <img src={DModuleImg} alt="ModelImage" />
                </div>
            </div>
            <div className="coment-d-Model">
                <div className="coment-text">
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
            </div>
            <div className="online-booking">
                <div className="img-title three">
                    <img src={OnlineBoookingImg} alt="onlineBookImage" />
                </div>
                <div className="text">
                    <div className="title-text">
                        Is this the future of Online Booking
                    </div>
                    <div className="description-text">
                        You should be able to find several indispensable facts
                        about motivation in the following paragraphs.
                        <p>
                            If there’s at least one fact you didn’t know before,
                            imagine the difference it might make.
                        </p>
                    </div>
                    <a className="text-link" href="">
                        See Case Study
                    </a>
                </div>
            </div>
            <div className="coment-online-booking">
                <div className="coment-text">
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
            </div>
        </>
    )
}
export default Project
