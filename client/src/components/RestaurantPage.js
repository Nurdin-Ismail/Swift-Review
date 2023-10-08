import React, { useEffect, useState } from "react";
import FilterSideBar from "./FilterSideBar";
import BusinessList from "./Businesslist";

function RestaurantArea({dropcateg}){

    
    const [categ, setcateg] = useState()
    const [clicked, setclicked] = useState(false)
    const [businesses, setBusinesses] = useState([]);
    const [backup, setbackup] = useState()
    const [loading, setLoading] = useState(true);
    const categoryofroute = 'Restaurants'
    const [checkbus, setcheck] = useState()

  useEffect(() => {
    
    const apiUrl = 'https://swift-review-api-5vgv.onrender.com/restaurants';

    // Fetch data from the API using Axios 
    
    fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data)
     setBusinesses(data);
     setLoading(false);
     setbackup(data)
  }
  
  )
  .catch(error => {

    console.error(error)
  setLoading(false)
  }
    
    
  );
      
      
  }, [categ]);



    

    function handlebuttonclick(sub_category){
        if (sub_category == 'Indian' ){
            
            console.log(sub_category)
            if(businesses == false){

                let filtered = backup.filter((x) => x.sub_category == sub_category )

                setBusinesses(filtered)
                console.log(backup)
                
            }else{
                let filtered = backup.filter((x) => x.sub_category == sub_category )
                console.log(filtered)
                setBusinesses(filtered)
                console.log(businesses)
            }
            
            


        }else if(sub_category == 'Italian' ){
            console.log(sub_category)
            if(businesses == false){

                let filtered = backup.filter((x) => x.sub_category == sub_category )

                setBusinesses(filtered)
                console.log(backup)
                
            }else{
                let filtered = backup.filter((x) => x.sub_category == sub_category )
                console.log(filtered)
                setBusinesses(filtered)
                console.log(businesses)
            }
            
            


        }else if(sub_category == 'Chinese'){
            console.log(sub_category)
            if(businesses == false){

                let filtered = backup.filter((x) => x.sub_category == sub_category )

                setBusinesses(filtered)
                console.log(backup)
                
            }else{
                let filtered = backup.filter((x) => x.sub_category == sub_category )
                console.log(filtered)
                setBusinesses(filtered)
                console.log(businesses)
            }
            

        }else if(sub_category == 'Local' ){
            console.log(sub_category)
            if(businesses == false){

                let filtered = backup.filter((x) => x.sub_category == sub_category )

                setBusinesses(filtered)
                console.log(backup)
                
            }else{
                let filtered = backup.filter((x) => x.sub_category == sub_category )
                console.log(filtered)
                setBusinesses(filtered)
                console.log(businesses)
            }

            


        }else{
            setBusinesses(backup)
        }

        

    }

    

    

    return(
        <div className="page" onClick={() => console.log('page clicked')}>
            <div>
                <FilterSideBar buttonclick = {handlebuttonclick} categoryofroute= {categoryofroute} specificcateg={categ}/>
            </div>

            <main className="main">
                <BusinessList  categ={categ} businesses={businesses} loading= {loading} categoryofroute ={categoryofroute} />

            </main>
            

        </div>
    )
}

export default RestaurantArea;