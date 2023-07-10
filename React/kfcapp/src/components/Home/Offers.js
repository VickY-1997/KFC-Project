import React from 'react';
import './Offers.css'

const Offers = () => {
    return(
        <>
        
        <div className="container offerheadig">
      <span className="offerheading1"> OFFER & DEALS </span>
      <a href="#"> <span className="offerheading2"> View More...&rarr; </span></a>
    </div>

    

    <div className="container-fluid">
      <div className="cardflip">
        <div className="wrapper">
          <div className="singlecard">
            <div className="front">
              <img src="https://i.ibb.co/NFN9mr7/Chickenzinger.jpg" alt="img" />
            </div>

            <div className="back">
              <div className="content">
                <h4>Valid to 31/12/23</h4>
                <p>
                  1 PC FREE CHICKEN ZINGER ON A CART VALUE OF 499 OR ABOVE ON
                  FIRST ORDER. ONLY FOR REGISTERED USERS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cardflip">
        <div className="wrapper">
          <div className="singlecard">
            <div className="front">
              <img src="https://i.ibb.co/80Ryx4z/Vegzinger.jpg" alt="img" />
            </div>

            <div className="back">
              <div className="content">
                <h4>Valid to 31/12/23</h4>
                <p>
                  1 PC FREE VEG ZINGER ON A CART VALUE OF 499 OR ABOVE ON FIRST
                  ORDER. ONLY FOR REGISTERED USERS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cardflip">
        <div className="wrapper">
          <div className="singlecard">
            <div className="front">
              <img src="https://i.ibb.co/r4X1jYq/fries.jpg" alt="img" />
            </div>

            <div className="back">
              <div className="content">
                <h4>Valid to 31/12/23</h4>
                <p>
                  1 LARGE FREE FRIES ON A CART VALUE OF 499 OR ABOVE ON FIRST
                  ORDER. ONLY FOR REGISTERED USERS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cardflip">
        <div className="wrapper">
          <div className="singlecard">
            <div className="front">
              <img src="https://i.ibb.co/CHNTdX8/popcorn.jpg" alt="img" />
            </div>

            <div className="back">
              <div className="content">
                <h4>Valid to 31/12/23</h4>
                <p>
                  1 LARGE FREE POPCORN CHICKEN ON A CART VALUE OF 499 OR ABOVE
                  ON FIRST ORDER. ONLY FOR REGISTERED USERS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        
        </>
    )
}

export default Offers;