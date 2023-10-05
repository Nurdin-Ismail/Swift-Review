import React from "react";

function FilterSideBar({buttonclick}){
    
    
    
    
    return (
        <div >

            <div className="filtersidebar">
                <div className="separation">
                   <h5>Restaurants</h5>
                    <h6>Filters:</h6>

                </div>

                <div className="separation">

                    <div className="subcateg">

                        <button className="sort" onClick={(e) => buttonclick(e.target.innerText)}>
                           Indian
                        </button >
                        <button className="sort" onClick={(e) => buttonclick(e.target.innerText)}>
                           Chinese
                        </button>
                        <button className="sort" onClick={(e) => buttonclick(e.target.innerText)}>
                           Local
                        </button>
                        <button className="sort" onClick={(e) => buttonclick(e.target.innerText)}>
                           Italian
                        </button>
                    </div>

                    
                </div>

                <div className="separation">

                     <label class="container">Open Now   
                      <input type="checkbox" />
                     <span class="checkmark"></span>
                    </label>

                    <label class="container">Offers Takeout
                       <input type="checkbox"/>
                        <span class="checkmark"></span>
                     </label>

                     <label class="container">Reservations 

                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                    </label>

                    <label class="container"> Hot and New
                         <input type="checkbox"/>
                          <span class="checkmark"></span>
                    </label>

                    

                             
                

                </div>

                

            </div>

        </div>
    )
}

export default FilterSideBar