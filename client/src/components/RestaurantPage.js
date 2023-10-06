import React, { useEffect, useState } from "react";
import FilterSideBar from "./FilterSideBar";
import BusinessList from "./Businesslist";

function RestaurantArea({dropcateg}){

    
    const [categ, setcateg] = useState()
    const [clicked, setclicked] = useState(false)
    const [businesses, setBusinesses] = useState([]);
    const [loading, setLoading] = useState(true);
    const categoryofroute = 'Restaurants'

  useEffect(() => {
    
    const apiUrl = 'http://127.0.0.1:5555/restaurants';

    // Fetch data from the API using Axios 
    
    fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data)
     setBusinesses(data);
     setLoading(false);
  }
  
  )
  .catch(error => {

    console.error(error)
  setLoading(false)
  }
    
    
  );
      
      
  }, [categ, dropcateg]);





    function handlebuttonclick(sub_category){
        if (sub_category == 'Indian' || dropcateg == 'Indian'){
            setcateg('Indian')
            console.log(categ)
            let filtered = businesses.filter((x) => x.sub_category == categ )
            console.log(filtered)
            setBusinesses(filtered)
            


        }else if(sub_category == 'Italian' || dropcateg == 'Italian'){
            setcateg('Italian')
            console.log(categ)
            let filtered = businesses.filter((x) => x.sub_category == categ )
            console.log(filtered)
            setBusinesses(filtered)
            
            


        }else if(sub_category == 'Chinese' || dropcateg == 'Chinese'){
            setcateg('Chinese')
            console.log(categ)
            let filtered = businesses.filter((x) => x.sub_category == categ )
            console.log(filtered)
            setBusinesses(filtered)
            

        }else if(sub_category == 'Local' || dropcateg =='Local'){
            setcateg('Local')
            console.log(categ)
            let filtered = businesses.filter((x) => x.sub_category == categ )
            console.log(filtered)
            setBusinesses(filtered)

            


        }

        

    }

    

    

    return(
        <div className="page">
            <div>
                <FilterSideBar buttonclick = {handlebuttonclick} categoryofroute= {categoryofroute}/>
            </div>

            <main className="main">
                <BusinessList  categ={categ} businesses={businesses} loading= {loading} categoryofroute ={categoryofroute} />

            </main>
            

        </div>
    )
}

export default RestaurantArea;