import {CircleRating} from '../css/style';
import {useState} from 'react';

const Ratings = ({onClick}) => {

    const ratings = [1,2,3,4,5];
    const [rating, setRating] = useState('');
   
    const handleClick = ({target}) => {
        
        onClick(target.innerText);
        setRating(target.innerText);
        
    }
    return ( 
        <>
            {ratings.map( (item, index) =>     
                <CircleRating key={index} onClick={handleClick} isAtive={rating === (index+1).toString()}>
                        <span>{item}</span>
                </CircleRating>
            )}
        </>);
}
 
export default Ratings;