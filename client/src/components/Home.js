import React from 'react';
import RestaurantCard from "./RestaurantCard"
import AutomotiveCard from './AutomotiveCard';
import image1 from "../images/pexels-shotkit-5355642.jpg"
import image2 from "../images/pexels-thirdman-5060979.jpg"
import image3 from "../images/pexels-shotkit-5387714.jpg"
import RecentActivity from './RecentActivity';
import Footer from './Footer';


function Home({logged}){
    return(
        <div>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={image1} class="d-block w-100 hme_crsl_img" alt="..."/>
                    <div class="carousel-caption d-none d-md-block crsl_scnt">
                        <h5 className="text-uppercase hme_txt">Empowering Decisions Through Reviews</h5>
                        <p className="text-uppercase hme_txt">In a world filled with choices, reviews are your compass. They empower you to make informed decisions, ensuring your time and money are invested wisely.</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={image2} class="d-block w-100 hme_crsl_img" alt="..."/>
                    <div class="carousel-caption d-none d-md-block crsl_scnt">
                        <h5 className="text-uppercase hme_txt">Saving You Time, One Review at a Time</h5>
                        <p className="text-uppercase hme_txt">In a fast-paced world, reviews become your time-saving allies. They distill countless experiences into a few clicks, helping you find what you need quickly and efficiently.</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={image3} class="d-block w-100 hme_crsl_img" alt="..."/>
                    <div class="carousel-caption d-none d-md-block crsl_scnt">
                        <h5 className="text-uppercase hme_txt">Shaping Tomorrow's Choices Today</h5>
                        <p className="text-uppercase hme_txt">Reviews aren't just about the present; they're a glimpse into the future. By reading and sharing reviews, you're helping shape the choices of tomorrow, creating a better world for all.</p>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div>
                <div className='hme_divs'>
                    <h3 className="text-center text-uppercase fw-bold">Your Destination for Honest Reviews</h3>
                    <p>Are you tired of relying on unreliable reviews when choosing where to dine or where to get your vehicle serviced? Look no further! Swift Review is here to revolutionize the way you make decisions about restaurants and automotive stores. We're your trusted source for genuine, unbiased, and up-to-date reviews from real customers. Join our community of passionate reviewers and discover the best places to eat and service your vehicle.</p>
                </div>
                <div className='hme_divs'>
                    <h3 className="text-center text-uppercase fw-bold">Your Reviews at Your Fingertips</h3>
                    <p>Take Swift Review with you wherever you go! Download our mobile app to access reviews, ratings, and recommendations on the fly. Whether you're exploring a new city or need quick information on the best local automotive store, our app has you covered.</p>
                </div>
            </div>
            <section className='section'>
                <RecentActivity logged={logged}/>
            </section>
            <div class="d-flex justify-content-evenly hme_cntr">
                <RestaurantCard />
                <AutomotiveCard />
            </div>
            <Footer  />
        </div>
    )
}

export default Home;