import styled from 'styled-components'

export const SearchBoxWrapper = styled.div`
width: 100%;
max-width: 960px;
margin: 20px auto;
`;

export const SearchBoxHeader = styled.div`
padding: 50px 15px 0px;

h1 {
color: white;
font-size: 2rem;
font-weight: 500;
text-align: center;
}
`;

export const SearchBox = styled.div`
padding: 15px;
`;

export const SearchInput = styled.input`
border: none;
outline: none;
display: flex;
width: 100%;
padding: 15px;
background-color: white;
border-radius: 6px;
color: black;
font-size: 1.5rem;
font-weight: 300;
transition: 0.5s ease-out;

&:focus {
    box-shadow: 0px 0px 4px 4px rgba(173,173,173,1);
}
`;