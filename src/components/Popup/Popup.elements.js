import styled from 'styled-components'

export const PopupWrapper = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: #232323;
overflow-y: scroll;
padding: 20px 20px;
`;

export const PopupContent = styled.div`
width: 100%;
max-width: 800px;
margin: 20px auto;
`;

export const PopupUpper = styled.div`
display: flex;
justify-content: space-between;
margin: 20px auto;
font-size: 1.5rem;

@media screen and (max-width: 660px) {
    flex-direction: column;
}
`;

export const PopupBottom = styled.div`
display: flex;
margin: 20px auto;

@media screen and (max-width: 660px) {
    flex-direction: column;
    align-items: center;
}
`;

export const PopupTitle = styled.div`
color: white;
margin-right: 10px;
`;

export const PopupRating = styled.div`
color: white;

@media screen and (max-width: 660px) {
    margin-top: 10px;
}
`;

export const PopupPoster = styled.div`
width: 100%;
text-align: center;

img {
    width: 100%;
    height: auto;
    max-width: 300px;
}

@media screen and (max-width: 660px) {
    width: 100%;
}
`;

export const PopupPlot = styled.div`
text-align: justify;
color: white;
width: 100%;
font-size: 1.2rem;

p {
    justify-content: center;
}

@media screen and (max-width: 660px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 10px;
}
`;

export const Button = styled.button`
padding: 10px 20px;
margin: 20px 0;
width: 100%;
font-size: 1.2rem;
background-color: #0099cc;
outline: none;
border: none;
cursor: pointer;
color: white;

@media screen and (max-width: 660px) {
    width: 100%;
}
`;

export const PopupLeft = styled.div`
width: 50%;

@media screen and (max-width: 660px) {
    width: 100%;
}
`;

export const PopupRight = styled.div`
width: 50%;

@media screen and (max-width: 660px) {
    width: 100%;
}
`;

export const PopupButton = styled.div`
width: 100%;

@media screen and (max-width: 660px) {
    width: 100%;
}
`;