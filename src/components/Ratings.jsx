import {CircleRating, CircleAtive} from '../css/style'
import {useState} from 'react';

const Ratings = ({onClick}) => {

    const ratings = [1,2,3,4,5];
    const [rating, setRating] = useState('');
   
    const handleClick = ({target}) => {
        switch(target.innerText) {
            case '1':
                onClick('1')
                setRating('1')        
                break;
            case '2':
                onClick('2');
                setRating('2')
                break;
            case '3':
                onClick('3');
                setRating('3')
                break;
            case '4':
                onClick('4');
                setRating('4')
                break;
            case '5':
                onClick('5');
                setRating('5')
                break;
            default:
                break;
        }
    }
    return ( 
        <>
            {ratings.map( (item, index) => 
                rating === (index+1).toString() || '' ? <CircleAtive key={index} onClick={handleClick}>
                <span>{item}</span>
                </CircleAtive> :  <CircleRating key={index} onClick={handleClick}>
                <span>{item}</span>
                </CircleRating>
            )}
        </>);
}
 
export default Ratings;