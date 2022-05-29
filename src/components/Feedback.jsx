import { useState } from 'react';
import ThankYouCard from './ThankYouCard';
import CarRating from './CardRating';

export const Feedback = () => {

    const [sent, SetSent] = useState(false);
    const [ratingValue, setRatingValue] = useState('0');

    const handleRating = (value) => {
        value === ratingValue ? setRatingValue('0') : setRatingValue(value)
    }

    const handleSent = () => {
        SetSent(true);
    }

    console.log(ratingValue);

    return (
        <div> 
            {!sent
             ? <CarRating handleRating = {handleRating} handleSent = {handleSent}/>
             : <ThankYouCard ratingValue={ratingValue}></ThankYouCard>
             }
        </div>
     );
}
 
export default Feedback;