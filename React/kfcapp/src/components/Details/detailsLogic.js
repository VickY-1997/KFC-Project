import React,{useState,useEffect} from 'react';
import './details.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useParams,useSearchParams, useNavigate} from 'react-router-dom';
import Header from '../Header';

const base_url = "https://kfcapi-9az6.onrender.com";

const DetailDisplay =  () => {

    let navigate = useNavigate()
    let [searchParams] = useSearchParams()
    let [restDetails, setrestDetails] = useState()
    let [mealId] = useState(sessionStorage.getItem('mealId'))


    let restId = searchParams.getAll('restId');
    const restDetail = async () => {
        const rdata = await axios.get(`${base_url}/details/${restId}`);
        setrestDetails(rdata.data[0])
    }

    useEffect(() => {
        restDetail()
    },[])


        const proceed = () => {
            navigate(`/placeOrder/${restDetails.item_name}`)
        }



    const renderDetails = () => {
        if(restDetails){
            return(
                <>
                    <Header/>

                    <div className='container detailsCointainer'>
                        <div className='imageSec'>
                            <img src={restDetails.item_image} alt={restDetails.item_name}/>
                        </div>
                        <div className='contentSec'>
                                <div className="itemsName_d">{restDetails.item_name}</div>
                                <div className="description_d">{restDetails.description}</div>
                                <div className="itemTypes_d">{restDetails.item_type}</div>
                                <div className="itemPrice_d">Rs.{restDetails.item_price}</div>
                            <hr/>
                            <div className='col-md-12'>
                                <Link className="btn btn-danger"
                                to={`/listing/${mealId}`}>Back</Link>
                                <button className='btn btn-success'
                                onClick={proceed}>Procced</button>
                            </div>

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