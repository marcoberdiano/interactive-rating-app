import {CircleRating} from '../css/style'
import {useState} from 'react';

const Ratings = () => {

    const [isSelect, setIsSelect] = useState(false);

    const [rating1, SetRating1] = useState(false);
    const [rating2, SetRating2] = useState(false);
    const [rating3, SetRating3] = useState(false);
    const [rating4, SetRating4] = useState(false);
    const [rating5, SetRating5] = useState(false);

    const handleClick = ({target}) => {
        switch(target.innerText) {
            case '1':
                SetRating1(!rating1)
                SetRating2(false)
                SetRating3(false)
                SetRating4(false)
                SetRating5(false)
                break;
            case '2':
                SetRating2(!rating2)
                SetRating1(false)
                SetRating3(false)
                SetRating4(false)
                SetRating5(false)
                break;
            case '3':
                SetRating3(!rating3)
                SetRating2(false)
                SetRating1(false)
                SetRating4(false)
                SetRating5(false)
                break;
            case '4':
                SetRating4(!rating4)
                SetRating2(false)
                SetRating3(false)
                SetRating1(false)
                SetRating5(false)
                break;
            case '5':
                SetRating5(!rating5)
                SetRating2(false)
                SetRating3(false)
                SetRating4(false)
                SetRating1(false)
                break;
            default:
                break;
        }
    }
    return ( 
        <>
                    <CircleRating isSelect={rating1} onClick={handleClick}>
                        <span >
                            1
                        </span>
                    </CircleRating>

                    <CircleRating isSelect={rating2} onClick={handleClick}>
                        <span >
                            2
                        </span>
                    </CircleRating>

                    <CircleRating isSelect={rating3} onClick={handleClick}>
                        <span >
                            3
                        </span>
                    </CircleRating>

                    <CircleRating isSelect={rating4} onClick={handleClick}>
                        <span >
                            4
                        </span>
                    </CircleRating>

                    <CircleRating isSelect={rating5} onClick={handleClick}>
                        <span >
                            5
                        </span>
                    </CircleRating>
        </>);
}
 
export default Ratings;