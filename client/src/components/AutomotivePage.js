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
    
    const apiUrl = 'http://127.0.0.1:5555/automotives';

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
            setcateg('Auto-Repair')
            console.log(categ)
            let filtered = businesses.filter((x) => x.sub_category == categ )
            console.log(filtered)
            setBusinesses(filtered)
            


        }else if(sub_category == 'Car Dealers' || dropcateg == 'Car Dealers'){
            setcateg('Car Dealers')
            console.log(categ)
            let filtered = businesses.filter((x) => x.sub_category == categ )
            console.log(filtered)
            setBusinesses(filtered)
            
            


        }else if(sub_category == 'Parking' || dropcateg == 'Parking' ){
            setcateg('Parking')
            console.log(categ)
            let filtered = businesses.filter((x) => x.sub_category == categ )
            console.log(filtered)
            setBusinesses(filtered)
            

        }else if(sub_category == 'Car Wash' || dropcateg == 'Car Wash'){
            setcateg('Car Wash')
            console.log(categ)
            let filtered = businesses.filter((x) => x.sub_category == categ )
            console.log(filtered)
            setBusinesses(filtered)

            


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