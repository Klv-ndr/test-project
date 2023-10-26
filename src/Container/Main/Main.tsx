import { Container } from '@mui/material'
import { FontStyles, fontStyles } from 'Components/Styles/FontStyles'
import './Main.scss'
import Services from 'Components/Serviceс/Services'
import Project from 'Components/Project/Project'
import Evaluation from 'Components/Evaluation/Evaluation'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import Sponsors from 'Components/Sponsors/Sponsors'

type Props = {}
const Main = (props: Props) => {
    return (
        <>
            <main className="main">
                <Container>
                    <Sponsors />
                    <Services fontStyles={fontStyles} />
                    <Project fontStyles={fontStyles} />
                    <Evaluation fontStyles={fontStyles} />
                    <div className="get-started">
                        <div className="title-green">
                            Let’s make something amazing together.
                        </div>
                        <a className="product-link start" href="">
                            <ArrowRightIcon />
                            Let's get started
                        </a>
                    </div>
                </Container>
            </main>
        </>
    )
}
export default Main
