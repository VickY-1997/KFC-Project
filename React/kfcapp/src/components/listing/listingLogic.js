import React,{useState,useEffect} from 'react';
import './listing.css';
import {useParams} from 'react-router-dom';
import ListingDisplay from  './listingDisplay';
import axios from 'axios';
import Header from '../Header';

const base_url = "https://kfcapi-9az6.onrender.com";


const Listing = () => {
    let params = useParams();

    const [restList,setRestList] = useState();

    useEffect(() => {
        let mealid = params.mealId;
        sessionStorage.setItem('mealId',mealid)
        axios.get(`${base_url}/kfcStore?mealTypes=${mealid}`)
        .then((res) => {
            setRestList(res.data)
        })
    },[])

    return(

        <>
            <Header/>

            <div className="container-fluid listingpage" >
                <div id="L_menubox"><span className="kfcmenulist"> KFC MENU</span>
                    <a href="http://localhost:3000/listing/1"><div className="menu1">BOX MEALS</div></a>
                    <a href="http://localhost:3000/listing/2"><div className="menu1">BRIYANI BUCKETS</div></a>
                    <a href="#"><div className="menu1">BURGER</div></a>
                    <a href="#"><div className="menu1">CHICKEN BUCKETS</div></a>
                    <a href="#"><div className="menu1">HOT LAUNCHES</div></a>
                    <a href="#"><div className="menu1">CHICKEN ROLLS</div></a>
                    <a href="#"><div className="menu1">SNACKS</div></a>
                    <a href="#"><div className="menu1">PERI PERI</div></a>
                    <a href="#"><div className="menu1">BEVERAGES</div></a>
                </div>
                        <div className='menulistItems'>
                               <ListingDisplay listData={restList}/>
                        </div>
                         
             </div>





            
        </>

    )
}

export default Listing;