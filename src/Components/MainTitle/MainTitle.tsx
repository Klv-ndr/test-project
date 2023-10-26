import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import './MainTitle.scss'

type Props = {}
const MainTitle = (props: Props) => {
    return (
        <>
            <section className="main-title">
                <div className="sub-title">A place where</div>
                <div className="title">
                    A creative agency for redemptive brands
                </div>
                <div className="description-title">
                    Anteelo is a leading strategic design firm that builds
                    powerful digital solutions for startups and enterprises.
                </div>
                <a className="touch" href="">
                    <ArrowRightIcon className="right-icon" />
                    Get in touch
                </a>
            </section>
        </>
    )
}
export default MainTitle
