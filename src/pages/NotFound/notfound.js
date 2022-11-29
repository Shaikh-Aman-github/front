import './notfound.css';
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import errorImge from '../../assets/zero.png';
import four from '../../assets/4.png';

import {ArrowCircleLeftTwoTone}  from '@mui/icons-material';

function Error() {

const navigate = useNavigate();

const register = () => {
  navigate('/home')
}


  return (
    <div className="Not-page">
        <div className="Not-main">
            <img src={four} alt="4"/>
            <img src={errorImge} alt="0" className='zero-img'/>
            <img src={four} alt="4"/>
        </div>
        <p>oops! looks like you are lost. <br/>The page you are looking for could not be found.</p>
        <Button className="btn-add" onClick={register} ><ArrowCircleLeftTwoTone/> Upload new image</Button>
    </div>  
  );
} 

export default Error;
