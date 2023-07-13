import styled from "@emotion/styled";
import { Grid, Button as MaterialButton } from "@mui/material";
import { jsx, css } from '@emotion/react';
import { useNavigate } from "react-router-dom";

interface Section1Props {
    children: React.ReactNode;
}

const buttonStyles = css`
    background-color: gray;
    padding: 10px 20px;
    color : white;
    font-weight: bold; 
    font-size: 1.5rem;  
    border: none;
    weight : 50vw;
    height : 5vh;
    display: flex;
    border-radius: 10px;

    @font-face {
        font-family: 'AppleBold';
        src: url('/fonts/AppleSDGothicNeoBold.ttf') format('truetype');
    }
    font-family: 'AppleBold';

    @media (max-width: 768px) {
        font-size: 0.7rem; 
       }
`
const StyledButton = styled(MaterialButton)`
    ${buttonStyles}
`
const SectionContainer = styled(Grid)`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
`

const TextContainer = styled(Grid)`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 20px 20px 20px;
    padding: 20px 20px 20px 20px;

    /* 추가한 부분 */
    & > *:not(:last-child) {
        margin-right: 100px; /* 버튼 사이의 간격을 조정합니다. */
    }

    @media (max-width: 768px) {
        & > *:not(:last-child) {
            margin-right: 10px; /* 화면이 768px 이하일 때 간격을 줄입니다.
    }
}
`


export const Section1Inner: React.FC<Section1Props> = ({children}) => {
    const navigate = useNavigate();
    return(
    <SectionContainer container>
        <TextContainer item xs={12}>
            
            <StyledButton onClick={()=>navigate("/")} size="large">
                {"Get Started 👌🏼"}
            </StyledButton>

            <StyledButton variant="text">
                {"How to use? 🤔"}
            </StyledButton>

            <StyledButton>
                {"If No Dockerfile 🐳"}
            </StyledButton>

        </TextContainer>
    </SectionContainer>
    );
};