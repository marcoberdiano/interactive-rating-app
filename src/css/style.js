import styled, {css} from 'styled-components';

export const Card = styled.div`
    background: var(--DarkBlue);
    border-radius: 20px;
    padding: 30px;
    width: 400px;
`

export const Circle = styled.div`
    background: ${props => props.isSelect ? 'var(--LightGrey)' : 'var(--VeryDarkBlue)'};
    color: ${props => props.isSelect ? 'var(--White)' : 'var(--MediumGrey)'};
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: grid;
    grid-template-columns: auto;
    place-content: center;
`

export const CircleRating = styled(Circle)`
    &:hover{
        background-color: var(--Orange);
        color: var(--White);
        cursor: pointer;
    }
`

export const Title = styled.h3`
    color: var(--White);
    margin: 15px 0px
`

export const Paragraph = styled.p`
    color: var(--MediumGrey);
    font-size: 15px;
    margin: 15px 0px;
`

export const RatingContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    gap: 15px;
    margin: 15px 0px 
`

export const Button = styled.button`
    background: transparent;
    border-radius: 30px;
    border: 2px solid var(--Orange);
    color: var(--Orange);
    margin: 15px 0px;
    padding: 1em 1.25em;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 3px;
    ${props => props.primary && css`
        color: white;
        background: var(--Orange);
    `}

    &:hover {
        background: var(--White);
        cursor: pointer;
        color: var(--Orange);
        border: 2px solid var(--White);
    }
`;