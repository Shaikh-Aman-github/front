import authService from "../auth.service"

export const getAllImages = () =>{
    return(dispatch) =>{
        authService.getUserbyEmail().then(
            ({images}) =>{
                dispatch({
                    type: 'GET_IMAGES', payload: images
                });
            }
        )
    }
}

