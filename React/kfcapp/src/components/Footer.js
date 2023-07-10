import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <>
             <footer>
      <div className="footer-container">
        <div className="footer">
          <div className="footer-logo">
            <img src="https://i.ibb.co/Nxm1Twv/KFC-logo.png" alt="footer-logo" />
          </div>
          <div className="KFC-Food">
            <h3 className="footerheading">KFC Food</h3>
            <ul className="kfcfood-list">
              <li className="kfcfood-items"><a href="#">Menu </a></li>
              <li className="kfcfood-items"><a href="#">Order Lookup</a></li>
              <li className="kfcfood-items"><a href="#">Gift Card</a></li>
              <li className="kfcfood-items">
                <a href="#">Nutrition & Allergen</a>
              </li>
            </ul>
          </div>
          <div className="Support">
            <h3 className="footerheading">Support</h3>
            <ul className="support-list">
              <li className="support-items"><a href="#">Get Help</a></li>
              <li className="support-items"><a href="#">Contact Us</a></li>
              <li className="support-items"><a href="#">KFC Feedback</a></li>
              <li className="support-items"><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="Legal">
            <h3 className="footerheading">Legal</h3>
            <ul className="legal-list">
              <li className="legal-items"><a href="#">Terms and Condition</a></li>
              <li className="legal-items"><a href="#">Disclaimer</a></li>
              <li className="legal-items"><a href="#">Caution Notice</a></li>
            </ul>
          </div>
          <div className="KFC-India">
            <h3 className="footerheading">KFC India</h3>
            <ul className="kfc-india-list">
              <li className="kfc-india-items"><a href="#">About KFC</a></li>
              <li className="kfc-india-items"><a href="#">KFC Care</a></li>
              <li className="kfc-india-items"><a href="#">Careers</a></li>
              <li className="kfc-india-items"><a href="#">Our Golden Past</a></li>
            </ul>
          </div>
        </div>
        <div className="applink">
          <div className="playstore">
            <a href="https://play.google.com/store/apps/details?id=com.yum.kfc"
              ><img src="https://i.ibb.co/KVYcbkD/google.png" alt="playstore"/></a>
          </div>
          <div className="appstore">
            <a href="https://apps.apple.com/in/app/kfc-india/id915824379">
              <img src="https://i.ibb.co/FDbTdX7/apple.png" alt="appstore"/></a>
          </div>

          <div className="fb">
            <a href="#"><i className="fa-brands fa-facebook fa-beat fa-2xl"></i></a>
          </div>
          <div className="insta">
            <a href="#"
              ><i className="fa-brands fa-square-instagram fa-flip fa-2xl"></i
            ></a>
          </div>

          <div className="twitter">
            <a href="#"
              ><i className="fa-brands fa-square-twitter fa-bounce fa-2xl"></i
            ></a>
          </div>
        </div>

        <div className="copyrights">
          Copyright &#169; KFC Corporation 2023 All Rights Reserved
        </div>
      </div>
    </footer>

        </>
    )
}

export default Footer;