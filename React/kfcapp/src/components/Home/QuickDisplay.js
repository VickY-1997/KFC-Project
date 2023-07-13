import React from 'react';
import {Link} from 'react-router-dom';
 
const QuickDisplay = (props) => {

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(
                    <Link to={`/listing/${item.mealtype_id}`}>                       
                                <figure className="browse-img">
                                    <img src={item.meal_image} alt={item.mealtype}/>
                                    <figcaption className="menuCaption">{item.mealtype}</figcaption>
                                </figure>           
                    </Link>

                )
            })
                 
            
        }
        else{
            return(
                <center className='loading'>
                    <h2>Loading...</h2>
                    <img src="https://i.gifer.com/XOsX.gif" alt="loader"/>
                </center>
            )
        }

    }

    return(


        <div className="container browContainer ">
      <div className="container ">
      
        
         
         {listMeal(props)}
          
       
      </div>
    </div>
    )
}

export default QuickDisplay;