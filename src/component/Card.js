import './Card.css';
import { ImQuotesLeft,ImQuotesRight } from "react-icons/im";
import { MdKeyboardDoubleArrowLeft , MdKeyboardDoubleArrowRight} from "react-icons/md";

function Card({carddata,suffix}){
    return (
        <div className='topcard' >
            <div style={{position:'relative'}} >
                <img style={{position:'absolute',top:"-80px",left:0,}} src={carddata[suffix].image} width="100px" height="100px" className='image'/>
                <div className='backimage'></div>
            </div>
            <div>
                <p className='name'>
                    {carddata[suffix].name}

                </p>
            </div>
            <div>
                <p className='job'>
                    {carddata[suffix].job}
                </p>
            </div>
            <div className='quotes'>
                <ImQuotesLeft className='leftright'  />
            </div>
            <div className='review'>
                {carddata[suffix].review}

            </div>
            <div className='quotes'>
                <ImQuotesRight className='leftright' />
            </div>
            


        </div>
    )
}

export default Card;