import './Project.scss'
import { Container } from '@mui/material'
import { FontStyles } from 'Components/Styles/FontStyles'
import Balenciaga from 'Components/Projects/Balenciaga/Balenciaga'
import Modeling from 'Components/Projects/Modeling/Modeling'
import OnlineBooking from 'Components/Projects/OnlineBooking/OnlineBooking'

type Props = { fontStyles: FontStyles }
const Project: React.FC<Props> = ({ fontStyles }) => {
    return (
        <>
            <section className="projects">
                <Container>
                    <div className="text-area">
                        <div className="title-area">
                            <div style={fontStyles.title}>
                                We Have Some Awesomr Project.
                            </div>
                        </div>
                        <div className="description-area">
                            <div style={fontStyles.description}>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s,{' '}
                            </div>
                        </div>
                    </div>
                </Container>
                <Balenciaga fontStyles={fontStyles} />
                <Modeling fontStyles={fontStyles} />
                <OnlineBooking fontStyles={fontStyles} />
            </section>
        </>
    )
}
export default Project
