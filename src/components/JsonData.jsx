import React, { useEffect } from 'react'
import { clearError, getData } from '../actions/demoAction';
import { useDispatch, useSelector } from 'react-redux';
const JsonData = () => {

    // const [data1, setData] = useState([]);
    const dispatch = useDispatch();

    const { loading, data, error } = useSelector((state) => state.data)
    console.log(loading, data, error);
    const dataHandler = () => {

        dispatch(getData("id is this"));
    }
    useEffect(() => {
        if (error) {
            dispatch(clearError());
            alert(error)


        }
    }, [error, dispatch])
    return (
        <div>

            {/* {error && <Alert severity="error">This is an error alert — check it out!</Alert>} */}
            {
                data.length === 0 ? <button onClick={dataHandler}>get Data</button>
                    : ""
            }

            {
                loading ?
                    <>
                        <div>loading......</div>
                    </>
                    :
                    <>

                        <div>
                            {JSON.stringify(data)}
                        </div>
                    </>

            }
        </div>
    )
}

export default JsonData