import React, {useState} from "react";
import {useParams} from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import Header from '../Header';
import './PlaceOrder.css';

   const url = "https://kfcapi-9az6.onrender.com/placeOrder";

const PlaceOrder = () => {
    let params = useParams();
    let navigate = useNavigate();

    const initialValues = {
        id : Math.floor(Math.random()*100000),
        item_name : params.restName,
        name : "vicky",
        email : "vicki@gmail.com",
        cost : Math.floor(Math.random()*1000),
        phone : "8760009090",
        address : "cbe Tamilnadu",
    };  

    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name] : value,
        });
    };

    const checkout = () => {
        console.log(values)
        fetch(url,{
            method: "POST",
            headers:{
                'accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(navigate(`/viewOrder`))
    }
 

    

    return(
        <>
            <Header/>
        
            <div className="container orderContainer">
               
                <div className="orderBox">
                    <div className="orderHeading">
                        Order For {params.restName}
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-6 formGroup">
                                <label for="fname" className="control-lable">Name</label>
                                <input className="form-control" id="fname"
                                name="name" value={values.name} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 formGroup">
                                <label for="email" className="control-lable">Email</label>
                                <input className="form-control" id="email"
                                name="email" value={values.email} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 formGroup">
                                <label for="phone" className="control-lable">Phone</label>
                                <input className="form-control" id="phone"
                                name="phone" value={values.phone} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 formGroup">
                                <label for="address" className="control-lable">Address</label>
                                <input className="form-control" id="address"
                                name="address" value={values.address} onChange={handleInputChange}/>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-md-12 orderPrice">
                                <h2>Total Price is Rs.{values.cost}</h2>
                            </div>
                        </div>
                        <button className="submitBtm" onClick={checkout}>
                                Submit
                        </button>

                    </div>
                </div>
            </div>
        
        </>
    )

}

export default PlaceOrder