import { BackgroundImage, ContainerLogin, LogoImage, LimitedContainer, ContainerLoginScreen } from "../styles/login-screen.styles";

const LoginScreen = () => {

    return (<div>
        <ContainerLoginScreen>
            <ContainerLogin>
                <LimitedContainer>
                <LogoImage src="./moto.png" />
                </LimitedContainer>
            </ContainerLogin>
            <BackgroundImage src="./background.png" />
        </ContainerLoginScreen>
        
        
        

    </div>)
};

export default LoginScreen;