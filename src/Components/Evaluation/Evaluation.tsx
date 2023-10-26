import { Container } from '@mui/material'
import './Evaluation.scss'

import { FontStyles } from 'Components/Styles/FontStyles'
import Products from 'Components/Products/Products'

type Props = { fontStyles: FontStyles }
const Evaluation: React.FC<Props> = ({ fontStyles }) => {
    return (
        <>
            <Container>
                <section className="Evaluation">
                    <div className="title-evaluation" style={fontStyles.title}>
                        Deation & Evaluation - Best Way to Kick off Your Product
                        Idea
                    </div>
                    <Products />
                </section>
            </Container>
        </>
    )
}
export default Evaluation
