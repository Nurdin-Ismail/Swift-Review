import React from "react";

function FilterSideBar({buttonclick, categoryofroute}){
    
    
   let subcategory 

        if (categoryofroute == 'Restaurants'){

            const categs= ["Indian", "Italian", "Local", "Chinese"]
 
             subcategory = categs.map((categ)=>{
                   return <button className="sort" onClick={(e) => buttonclick(e.target.innerText)}>{categ}</button>
                 });  
               
        }else if (categoryofroute == "Automotives"){
            const categs= ["Auto-repair", "Car Wash", "Car Dealers", "Parking"]
 
            subcategory = categs.map((categ)=>{
                  return <button className="sort" onClick={(e) => buttonclick(e.target.innerText)}>{categ}</button>
                }); 
        }

        let check

        if (categoryofroute == "Restaurants"){
            const checkmarks = ["Open Now","Offers Takeout","Reservations","Hot and New"]
            check = checkmarks.map((check)=>{
                return <label class="container">{check}

                <input type="checkbox"/>
                <span class="checkmark"></span>
        </label>
              });

        }else if(categoryofroute == "Automotives"){
            const checkmarks = ["Open Now","Offering a Deal",]

            check = checkmarks.map((check)=>{
                return <label class="container">{check}

                <input type="checkbox"/>
                <span class="checkmark"></span>
        </label>
              });

        }

    return (
        <div className="bach">
            <div className="filtersidebar">
                <div className="filter">
                   <h5>{categoryofroute}</h5>
                    <h6>Filters:</h6>
                </div>

                <div className="">

                    <div className="subcateg">

                    <button className="sort" onClick={(e) => buttonclick(e.target.innerText)}>{categoryofroute}</button>

                        {subcategory}
                    </div>

                    
                </div>

                <div className="filter">

                    <h6>Features</h6>
                    {check}
                </div>
            </div>
        </div>
    )
}


export default FilterSideBar;