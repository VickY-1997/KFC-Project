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
                                    <div className="col-md-5 itemImg">
                                        <img src={item.item_image} alt={item.item_name}/>
                                    </div>
                                    <div className="col-md-7 itemDetails">
                                        <div className="itemsName">
                                            <Link to={`/details?restId=${item.item_id}`}>
                                                {item.item_name}
                                            </Link>
                                        </div>
                                        <div className="description">{item.description}</div>
                                        <div className="itemTypes">{item.item_type}</div>
                                        <div className="itemPrice">Rs.{item.item_price}</div>
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
                        <center>
                            <h2>Loading</h2>
                            <img src="https://i.gifer.com/XOsX.gif" alt="loader"/>
                        </center>
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