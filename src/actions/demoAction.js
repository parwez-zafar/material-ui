import axios from 'axios';
export const getData = (id) => {
    return async (dispatch) => {
        try {
            // console.log("id", id);
            dispatch({ type: "LOAD_DATA_REQUEST" });

            const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');

            dispatch({ type: "LOAD_DATA_SUCCESS", payload: data })
        }
        catch (error) {
            dispatch({ type: "LOAD_DATA_FAIL", payload: error.message })
        }
    }
}
// export const getData = (id) => async (dispatch) => {
//     try {
//         // console.log("id", id);
//         dispatch({ type: "LOAD_DATA_REQUEST" });

//         const { data } = await axios.get('https://jsonplaceholder.typicode.com/postsss');

//         dispatch({ type: "LOAD_DATA_SUCCESS", payload: data })
//     }
//     catch (error) {
//         dispatch({ type: "LOAD_DATA_FAIL", payload: error.message })
//     }
// }

export const clearError = () => async (dispatch) => {
    console.log("clear error");
    // dispatch({ type: "CLEAR_ERRORS" });
}