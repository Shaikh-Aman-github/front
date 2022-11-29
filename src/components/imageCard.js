import './imageCard.css';
import images from '../assets/testimg.png'

function Card() {
  return (
    <div className="Image-Card"> 
        <div className="card-body">
            <input type="checkbox" name="" id="" />
              <div className="head">
                  <img src={images} alt="imges"/>
              </div>
            <div className="footer">
              <p>File Name</p>
              <span>file type</span>
            </div>
        </div>
    </div>
  );
}

export default Card;
