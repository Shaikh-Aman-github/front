import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import {connect, useSelector, useDispatch} from 'react-redux';
// import axios from 'axios';

import './Home.css';
import '../../components/imageCard.css';

import profile from '../../assets/profile.png'
import upload from '../../assets/up-bg.png';
import {Button} from '@mui/material';
import {DeleteOutline, PowerSettingsNew}  from '@mui/icons-material';
import UpoloadBtn from '../../components/modal'

import imageService from '../../services/image-service';
import authService from '../../services/auth.service';

import { getAllImages } from '../../services/actions/action';

function Home(props) {
  const dispatch = useDispatch();
  const userDataImg  = useSelector((state) => state.UserDataImg);
  console.log("data => ", userDataImg);

  const [userimages, setImages] = useState([]);
  const [isChecked, setIsChecked] = useState([]);

  const navigate = useNavigate();


  const userImg = JSON.parse(localStorage.getItem('images'))

  const getImages = async () =>{
    const infos = userImg;
    setImages(infos);
  }
  
  // const  images = useSelector((state) => {
  //   return state.images;
  // })
  // console.log(images);

  useEffect(() =>{
    getImages();
    // dispatch(getAllImages());
  }, []);

  const handleCheckbox =(e) =>{
    const {value} = e.target;
      if (isChecked) {
          setIsChecked([...isChecked, value]);
       }
       else{
          setIsChecked(isChecked.filter((e)=> e!== value));
      }
    console.log("arr", isChecked);
}

  const deleteImages = () =>{
    imageService.deleteAllCheckedImages(isChecked).then(
      (res) => {
        setIsChecked();
      }
    )
  }

  const logOut = async (e) => {
    e.preventDefault();
    authService.logout()
        navigate("/");
  };

  return (
<>
    <div className="userInfo">

      <div className="profile gradient-border">
          <img src={profile} alt="pic" />
      </div>
      <div>
      <Button id="btn-logout" onClick={logOut} title="logout"><PowerSettingsNew/></Button>
      </div>
   
    </div>

    <div className="Home-page"> 
      
      <div className="main-head">
        <div className="l-head">
            <span>
            <h2>Media Library</h2>
            <p>0 Image</p>
            </span>
          </div>
        <div className="r-head">
            <UpoloadBtn/>
            <Button id="btn-del" onClick={deleteImages}><DeleteOutline/> Delete selected</Button>
          </div>
      </div>

      <div className="Home-body">
        {
          userimages.length ?
        (
        <div id="Image-Card">
          {
              userimages.map((item, id) => {
                return (
                  <div id="card-body" key={id}>
                    <input type="checkbox" value={item.id} 
                        checked={item.isChecked}
                        onChange={handleCheckbox}                     
                        />
                      <div id="head">
                          <img src={item.images} alt={item.images}/>
                      </div>
                    <div id="footer">
                      <p>File Name</p>
                      <span>file type</span>
                    </div>
                </div>
              )})
            }
        </div>
        ):(
            <div id="upload">
              <img src={upload} alt="icon" />
              <p>Click on ‘Upload’ to start adding images</p>
          </div>
          )
        }
      </div>

    </div>
</>
  );
}

// const mapStateToProps = (state) =>{
//   return {
//     images: state.images,
//   };
// };

export default Home; //connect(mapStateToProps)
