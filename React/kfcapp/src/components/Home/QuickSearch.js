import React,{useState,useEffect} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay';



const base_url = "https://kfcapi-9az6.onrender.com";

const QuickSearch = () => {

  const [mealType,setMealType] = useState();

  useEffect(() => {
    fetch(`${base_url}/QuickSearch`,{method: 'GET'})
    .then((res) => res.json())
    .then((data) => {
      setMealType(data)
    })
  },[])

   

    return(
        <>
        
        <div className="container-fluid">
      <div className="browseHead">
        <h1 className="browse-heading">BROWSE CATEGORIES</h1>
      </div>
    </div>
    <QuickDisplay mealData={mealType}/>

    

        </>
    )
}

export default QuickSearch;