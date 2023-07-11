import React,{useState,useEffect} from 'react';
import './details.css';
import axios from 'axios';
import {Link} from 'react-dom';
import {useParams,useSearchParams} from 'react-router-dom';

const base_url = "https://kfcapi-9az6.onrender.com";

const DetailDisplay =  () => {

    let [searchParams] = useSearchParams()
    let [restDetails, setrestDetails] = useState()
    let restId = searchParams.getAll('restId');
    const restDetail = async () => {
        const rdata = await axios.get(`${base_url}/details/${restId}`);
        setrestDetails(rdata.data[0])
    }

    useEffect(() => {
        restDetail()
    },[])


    const renderDetails = () => {
        if(restDetails){
            return(
                <>

                    <div className='container'>
                        <div className='imageSec'>
                            <img src={restDetails.item_image} alt={restDetails.item_name}/>
                        </div>
                        <div className='contentSec'>
                                <h1>{restDetails.item_name}</h1>
                        </div>  
                   </div>

                </>
            )

        }
    }

        return(
            <>
                <div className='main'>
                    {renderDetails()}
                </div>
            </>
        )
}

export default DetailDisplay