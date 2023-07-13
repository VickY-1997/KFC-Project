import React from 'react';
import {Link} from 'react-router-dom';

const WedOfferDisplay = (props) => {

    const listWed = ({wedData}) => {
        if(wedData){
            return wedData.map((item) => {
                return(
                    <Link to="/" key={item.wedOffer_id}>                           
                        <figure className="wedofferslist">
                            <img src={item.wedOffer_img} alt="wedOffer_name"/>
                            <figcaption className="wedcap">{item.wedOffer_name}</figcaption>
                        </figure>                            
                    </Link>

                )
            })
                 
            
        }else{
            return(
                    <center className='loading'>
                        <h2>Loading...</h2>
                        <img src="https://i.gifer.com/XOsX.gif" alt="loader"/>
                    </center>
            )
        }

    }

    return(

        <div className="container wedcontainer">

                {listWed(props)}

        </div>

    )

}

export default WedOfferDisplay;