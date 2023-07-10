import React from "react";
import {Link} from 'react-router-dom';




const ListingDisplay = (props) => {

        const renderData = ({listData}) => {
            if(listData){
                if(listData.length > 0){
                    return listData.map((item) => {
                        return(
                            <div className="item" key={item._id}>
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src={item.item_image} alt={item.item_name} className="Image"/>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="hotel_name">
                                            <Link to={'/'}>
                                                {item.item_name}
                                            </Link>
                                        </div>
                                        <div className="city_name">{item.item_price}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                }else{
                    return(
                        <h2> no data found  </h2>
                    )
                }
        
            }else{
                return(
                    <div>
                        <h2>Loading</h2>
                        <img src="https://i.gifer.com/XOsX.gif" alt="loader"/>
                    </div>
                )
            }
        }

        return(

            <div id="content">
                {renderData(props)}
            </div>

        )


}

export default ListingDisplay;