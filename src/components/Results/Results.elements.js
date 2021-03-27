import styled from 'styled-components'

export const ResultsWrapper = styled.div`
width: 100%;
max-width: 960px;
margin: 20px auto;
display: flex;
flex-wrap: wrap;
text-align: center;
`;

export const ResultWrapper = styled.div`
width: calc(1/3*960px);
margin: 20px auto;
flex-direction: column;
cursor: pointer;
transition: all 0.4s;

img {
padding: 10px;
width: auto;
height: auto;    
}

h2 {
color: white;
font-weight: 500;
font-size: 1.5rem;
padding: 10px;
}

&:hover {
    background: #0099cc;
}
`;