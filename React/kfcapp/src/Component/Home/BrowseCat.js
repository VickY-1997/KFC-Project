import React from "react";
import './BrowseCat.css'

const  BrowseCat = () => {
    return(
        <>
        
    <div className="container-fluid browsheadingweather">
      <div className="browseHead">
        <h1 className="browse-heading">BROWSE CATEGORIES</h1>
      </div>
    </div>

    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col col-sm-4 col-md-4 col-lg-3">
            <a href="#"> 
              <figure className="browse-img">
                <img src="https://i.ibb.co/4tV4PGf/BIRYANI-BUCKETS.jpg" alt="biryani"/>
                <figcaption className="browse-caption">BIRYANI BUCKETS</figcaption>
              </figure>
            </a>
          </div>
          <div className="col col-sm-4 col-md-4 col-lg-3">
            <a href="#">
              <figure className="browse-img">
                <img src="https://i.ibb.co/nszg5dp/BOX-MEALS.jpg" alt="meals"/>
                <figcaption className="browse-caption">BOX MEALS</figcaption>
              </figure>
            </a>
          </div>
          <div className="col col-sm-4 col-md-4 col-lg-3">
            <a href="#">
              <figure className="browse-img">
                <img src="https://i.ibb.co/CV5yF0j/BURGERS.jpg" alt="burger"/>
                <figcaption className="browse-caption">BURGER</figcaption>
              </figure>
            </a>
          </div>
          <div className="col col-sm-4 col-md-4 col-lg-3">
            <a href="#">
              <figure className="browse-img">
                <img src="https://i.ibb.co/j5vDGyH/CHICKEN-BUCKETS.jpg" alt="chicken buckets"/>
                <figcaption className="browse-caption">CHICKEN BUCKETS</figcaption>
              </figure>
            </a>
          </div>
          <div className="col col-sm-4 col-md-4 col-lg-3">
            <a href="#">
              <figure className="browse-img">
                <img src="https://i.ibb.co/F8Q2ZNH/CHICKEN-ROLLS.jpg" alt="rolls"/>
                <figcaption className="browse-caption">CHICKEN ROLLS</figcaption>
              </figure>
            </a>
          </div>
          <div className="col col-sm-4 col-md-4 col-lg-3">
            <a href="#">
              <figure className="browse-img">
                <img src="https://i.ibb.co/ySc7p9g/HOT-DEALS.jpg" alt="hot deals"/>
                <figcaption className="browse-caption">HOT DEALS</figcaption>
              </figure>
            </a>
          </div>
          <div className="col col-sm-4 col-md-4 col-lg-3">
            <a href="#">
              <figure className="browse-img">
                <img src="https://i.ibb.co/rk92dHz/HOT-LUNCHES.jpg" alt="hot launches"/>
                <figcaption className="browse-caption">HOT LAUNCHES</figcaption>
              </figure>
            </a>
          </div>
          <div className="col col-sm-4 col-md-4 col-lg-3">
            <a href="#">
              <figure className="browse-img">
                <img src="https://i.ibb.co/fpynGV7/View-All-Menu.jpg" alt="allmenu"/>
                <figcaption className="browse-caption">View All Menu</figcaption>
              </figure>
            </a>
          </div>
        </div>
      </div>
    </div>
        
        </>
    )
}

export default BrowseCat;