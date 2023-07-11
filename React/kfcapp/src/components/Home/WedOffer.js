import React,{useState,useEffect} from 'react';
import './WedOffer.css';
import WedOfferDisplay from './WedOfferDisplay';

const base_url = "https://kfcapi-9az6.onrender.com";

const WedOffer = () => {

    const [wedType,setwedType] = useState();

    useEffect(() => {
        fetch(`${base_url}/wedOffer`,{method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
          setwedType(data)
        })
      },[])

    return(
        <>
        
            <div className="container-fluid">
                <div className="wedHeading">WEDNESDAY OFFERS</div>
            </div>

            <WedOfferDisplay wedData={wedType}/>



        </>
    )
}

export default WedOffer;