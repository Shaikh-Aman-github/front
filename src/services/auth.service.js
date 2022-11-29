import axios from "axios";

const API_URL = "http://localhost:8080/auth";

const signup = (fname, lname, email, password, phone, agree) =>{
    return axios
        .post(API_URL + "/signup",{
            fname, lname, email, password, phone, agree
        })
        .then((res) =>{
            if(res.data.accessToken){
                localStorage.setItem("user", JSON.stringify(res.data));
            }
            return res.data;
    });
};

const login = (email, password) =>{
    return axios
        .post(API_URL + "/login", {
            email, password
        })
        .then((res) =>{
            if (res.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(res.data));
            }
            getUserbyEmail(email);
        return res.data;
    });
};

const getUserbyEmail = (email) =>{
    return axios
        .get(API_URL + `/users/${email}`)
        .then((res) =>{
            // const userImages = res.data[0].images;
            // console.log("new ====", userImages);
            // // return res.data;
            const userImages = res.data[0].images;
            localStorage.setItem("images", JSON.stringify(userImages));
    });      
};

const logout = () =>{
    localStorage.removeItem("user");
    localStorage.removeItem("images");
    // localStorage.clear();
};

const getCurrentUser = () =>{
    return JSON.parse(localStorage.getItem("user"));
}

const authService = { signup, login, logout, getCurrentUser, getUserbyEmail};

export default authService;