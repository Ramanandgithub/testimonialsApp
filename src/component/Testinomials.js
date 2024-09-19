import './Testinomials.css';
import Card from './Card';
import { ImQuotesLeft,ImQuotesRight } from "react-icons/im";
import { MdKeyboardDoubleArrowLeft , MdKeyboardDoubleArrowRight} from "react-icons/md";
import { useState } from 'react';

function Testinomials(props){
    const [index,setindex] = useState(0);
    function LeftShiftHandler(){
        if(index-1<0){
            setindex(props.data.length-1);
        }else{
            setindex(index-1);
        }

    }
    function RightShiftHandler(){
        if(index+1>=props.data.length){
            setindex(0);
        }else{
            setindex(index+1);
        }

    }
    function RandomHandler(){
        let random  = Math.floor(Math.random()*props.data.length);
        setindex(random);

    }
    return (
        <div className='card'>

            <Card carddata = {props.data}  suffix = {index}/>
            
            <div className='leftrightbtn'>
                <button className='btn'><MdKeyboardDoubleArrowLeft onClick={LeftShiftHandler} /></button>
                <button className='btn'><MdKeyboardDoubleArrowRight onClick={RightShiftHandler} /></button>
            </div>

            <div className='btn-top'>
                <button className='surprise_me' onClick={RandomHandler}>Surpise Me</button>
            </div>

        </div>
    )
}
export default Testinomials;