import styled from "styled-components";
import { Space, Typography } from 'antd';

const { Text, Title } = Typography;

export const ContainerLoginScreen = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
`;

export const BackgroundImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
`;

export const LogoImage = styled.img`
    width: 100%;
    max-width: 202px;
    
`;

export const TitleLogin = styled(Title)`
    ;
`;

export const ContainerLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    padding: 22px;
    max-width: 646px;
    width: 100%;
    height: 100vh;
    
`

export const LimitedContainer = styled.div`
 width: 100%;
 max-width: 498px;
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
 
`;