import React, {useState} from "react";
import { useNavigate} from 'react-router-dom';
import Header from '../Header';

   const url = "http://3.17.216.66:5000/api/auth/login"

const Login = () => {
    
    let navigate = useNavigate();

    const initialValues = {
        email : "vignesh@gmail.com",
        password : '12345678'
       
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
        .then(navigate(`/login`))
    }
 

    

    return(
        <>
            <Header/>
        
            <div className="container">
               
                <div className="panel panel-info">
                    <div className="panel-heading">
                     <center><h3>Login</h3></center>
                    </div>
                    <hr/>
                    <div className="panel-body">
                       
                        <div className="row">
                            
                            <div className="col-md-6 form-group">
                                <label for="email" className="control-lable">Email</label>
                                <input className="form-control" id="email"
                                name="email" value={values.email} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="password" className="control-lable">Password</label>
                                <input className="form-control" id="password" type="password"
                                name="password" value={values.password} onChange={handleInputChange}/>
                            </div>
                           
                            
                        </div>
                       <hr/>
                        <button className="btn btn-danger" onClick={checkout}>
                                Login
                        </button>

                    </div>
                </div>
            </div>
            <hr/>
        </>
    )

}

export default Login