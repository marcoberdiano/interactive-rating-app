import styled from 'styled-components';

export const Card = styled.div`
    background: var(--DarkBlue);
    border-radius: 20px;
    padding: 30px;
    width: 360px;
`

export const CardThanYouCenter = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const Img = styled.div`
`
export const RatingSelected = styled.p`
    color: var(--Orange);
    background: var(--VeryDarkBlue);
    border-radius: 30px;
    padding: 0.3rem 0.5rem;
    margin: 15px 0px
`

export const Circle = styled.div`
    background: ${props => props.isAtive ? 'var(--LightGrey)' : 'var(--VeryDarkBlue)' };
    color: ${props => props.isAtive ? 'var(--White)' : 'var(--MediumGrey)' };
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

export const ParagraphThankYou = styled(Paragraph)`
    text-align: center;
`

export const RatingContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    gap: 15px;
    margin: 15px 0px 
`

export const Button = styled.button`
    background: ${props => props.disabled ? 'var(--LightGrey)' : 'var(--Orange)'};
    border-radius: 30px;
    border: 2px solid ${props => props.disabled ? 'var(--LightGrey)' : 'var(--Orange)'};
    color: ${props => props.disabled ? 'var(--MediumGrey)'  : 'var(--White)'};
    margin: 15px 0px;
    padding: 1em 1.25em;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 3px;

    &:hover {
        background: ${props => props.disabled ? 'var(--LightGrey)' : 'var(--White)'};
        cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'}; 
        color: ${props => props.disabled ? 'var(--MediumGrey)'  : 'var(--Orange)'};
        border: 2px solid ${props => props.disabled ? 'var(--LightGrey)' : 'var(--White)'};
    }
`;
