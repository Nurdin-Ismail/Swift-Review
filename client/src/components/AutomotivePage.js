import React, { useEffect, useState } from "react";
import FilterSideBar from "./FilterSideBar";
import BusinessList from "./Businesslist";
import axios from 'axios';


function AutomotiveArea({dropcateg}){

    // const [indian, setclickedindian] =  useState(false)
    // const [chinese, setclickedchinese] =  useState(false)
    // const [local, setclickedlocal] =  useState(false)
    // const [italian, setclickeditalian] =  useState(false)
    const [categ, setcateg] = useState();
    const [clicked, setclicked] = useState(false);
    
    const [businesses, setBusinesses] = useState([]);
    const [loading, setLoading] = useState(true);

    const categoryofroute = 'Automotives'
    const [backup, setbackup] = useState([])

    console.log(dropcateg)

  useEffect(() => {
    
    const apiUrl = 'https://swift-review-api-5vgv.onrender.com/automotives';

    // Fetch data from the API using Axios 
    
    fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data)
     setBusinesses(data);
     setbackup(data)

     setLoading(false);
  }
  
  )
  .catch(error => {

    console.error(error)
  setLoading(false)
  }
    
    
  );
      
      
  }, [categ]);



    function handlebuttonclick(sub_category, dropcateg){
        if (sub_category == 'Auto-Repair' || dropcateg == 'Auto-Repair' ){
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
            


        }else if(sub_category == 'Car Dealers' || dropcateg == 'Car Dealers'){
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
            
            


        }else if(sub_category == 'Parking' || dropcateg == 'Parking' ){
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
            

        }else if(sub_category == 'Car Wash' || dropcateg == 'Car Wash'){
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

    return (
        <div className="page">
            <div>
                <FilterSideBar buttonclick={handlebuttonclick} categoryofroute={categoryofroute} />
            </div>

            <main className="main">
                <BusinessList categ={categ} businesses={businesses} loading={loading} categoryofroute={categoryofroute} />
            </main>
        </div>
    )
}

export default AutomotiveArea;