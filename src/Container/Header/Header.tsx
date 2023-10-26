import { Button, Container } from '@mui/material'
import logo from 'assets/Logo.svg'
import './Header.scss'
import MainTitle from 'Components/MainTitle/MainTitle'
import { styled } from '@mui/system'

const CustomButton = styled(Button)({
    minWidth: '40px',
    borderRadius: '20px',
})

type Props = {}
const Header = (props: Props) => {
    return (
        <>
            <header className="header">
                <div className="background-img">
                    <Container className="header">
                        <section className="tool-bar">
                            <a href="">
                                <img className="logo" src={logo} alt="logo" />
                            </a>
                            <div className="fake-menu">
                                <CustomButton className="btn-more"></CustomButton>
                            </div>
                        </section>
                        <MainTitle />
                    </Container>
                </div>
            </header>
        </>
    )
}
export default Header
