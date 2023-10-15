import { CssBaseline } from '@mui/material'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Main from '../Main/Main'

const App = () => {
    return (
        <>
            <CssBaseline>
                <Header />
                <Main />
                <Footer />
            </CssBaseline>
        </>
    )
}
export default App
