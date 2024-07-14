
import Input from "../shared/inputs/input/input";
import { 
    BackgroundImage, 
    ContainerLogin, 
    LogoImage, 
    LimitedContainer, 
    ContainerLoginScreen
 } from "../styles/login-screen.styles";

const LoginScreen = () => {

    return (
        <ContainerLoginScreen>
            <ContainerLogin>
                <LimitedContainer>
                <LogoImage src="./moto.png" />
                <Input title="USUÁRIO"/>
                <Input title="SENHA"/>
                </LimitedContainer>
            </ContainerLogin>
            <BackgroundImage src="./background.png" />
        </ContainerLoginScreen>
        
               

    );
};

export default LoginScreen;