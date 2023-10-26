import './Products.scss'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

type Props = {}
const Products = (props: Props) => {
    return (
        <>
            <section className="products">
                <div className="products-description">
                    <div className="products-title">Product Design Sprint</div>
                    <div className="description-text">
                        A five-day workshop that will help you answer crucial
                        business questions
                    </div>
                    <a className="product-link" href="">
                        <ArrowRightIcon />
                        Read More
                    </a>
                </div>
                <div className="products-description">
                    <div className="products-title">Scoping Session</div>
                    <div className="description-text">
                        A workshop aimed at shaping your business idea,
                        answering questions regarding project planning
                    </div>
                    <a className="product-link" href="">
                        <ArrowRightIcon />
                        Read More
                    </a>
                </div>
                <div className="products-description">
                    <div className="products-title">UX Review</div>
                    <div className="description-text">
                        An evaluation which will help you radically improve your
                        product.
                    </div>
                    <a className="product-link" href="">
                        <ArrowRightIcon />
                        Read More
                    </a>
                </div>
                <div className="products-description">
                    <div className="products-title">Code Review</div>
                    <div className="description-text">
                        Do you know what one of the key secrets of success is
                        what makes people successful in business
                    </div>
                    <a className="product-link" href="">
                        <ArrowRightIcon />
                        Read More
                    </a>
                </div>
            </section>
        </>
    )
}
export default Products
