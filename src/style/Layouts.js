import styled from "styled-components";

export const MainLayout = styled.div`
    padding: 2rem;
    height: 100%;
    display: flex;
    gap: 2rem;
    @media only screen and (max-width: 480px) {
    gap:0rem;
}

`;

export const InnerLayout = styled.div`
    padding: 2rem 1.5rem;
    width: 100%;
//      @media only screen and (max-width: 480px) {
//     padding:0rem;
//     display:none;
// }
`;