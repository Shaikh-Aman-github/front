import axios from "axios";
import authHeader from "./auth-header";

const API_IMG_URL = "http://localhost:8080/api";

const getAllImages = (email) =>{
    return axios.get(API_IMG_URL + `/images/${email}` );
};

const getAllByUserImages = () =>{
    return axios.get(API_IMG_URL + "/images", {
        headers: authHeader()
    });
};

const deleteAllCheckedImages = (data) =>{
    // let obj = {
    //     ids: [...data]
    // };
    return axios.delete(`${API_IMG_URL}/images`, { data: { ids: data } });
};

const imageService = {
    getAllImages,
    getAllByUserImages,
    deleteAllCheckedImages
};

export default imageService;