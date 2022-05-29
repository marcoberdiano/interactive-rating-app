import { Card, CardThanYouCenter, Img, RatingSelected, Title, ParagraphThankYou } from "../css/style";
import thankyouImg from '../images/illustration-thank-you.svg'
const ThankYouCard = ({ratingValue}) => {
    return ( 
        <div>
            <Card>
                <CardThanYouCenter>
                    <Img>
                        <img src={thankyouImg} alt='thank you'></img>
                    </Img>

                    <RatingSelected>
                        You selected {ratingValue} out of 5
                    </RatingSelected>

                    <Title>Thank you!</Title>

                    <ParagraphThankYou>
                        We appreciate you taking the time to give a rating. If you ever need more support, 
                        don't hesitate to get in touch!
                    </ParagraphThankYou>
                </CardThanYouCenter>
            </Card>
        </div>
        
     );
}
 
export default ThankYouCard;