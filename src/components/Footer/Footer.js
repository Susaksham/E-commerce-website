import React from "react";
import classes from "./Footer.module.css";
import GithubIcon from "../../Utils/Icons/GithubIcon";
import TwitterIcon from "../../Utils/Icons/TwitterIcon";
import LinkedIcon from "../../Utils/Icons/LinkedIcon";
import { Link } from "react-router-dom";
const socialLinks = [
  {
    id: "1",
    icon: <GithubIcon size="3rem" color="white"></GithubIcon>,
    backgroundColor: "black",
    padding: "0.5rem 0.6rem 0.5rem",
    link: "https://github.com/Susaksham",
  },
  {
    id: "2",
    icon: <TwitterIcon size="2.5rem" color="white"></TwitterIcon>,
    backgroundColor: "#1DA1F2",
    padding: "0.9rem 0.8rem 0.9rem",
    link: "https://twitter.com/Susaksham08",
  },
  {
    id: "3",
    icon: <LinkedIcon size="3rem" color="#0077B5"></LinkedIcon>,
    backgroundColor: "#ffff",
    padding: "0.5rem 0.6rem 0.5rem",
    link: "https://www.linkedin.com/in/susaksham-jain/",
  },
];
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_top}>
        <div className={classes.footer_top_contacts_details}>
          <div className={classes.location_container}>
            <div className={classes.locationIcon_container}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={classes.location_icon}
                fill="#ff4c39"
              >
                <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
              </svg>
            </div>
            <div className={classes.location_description}>
              <h1 style={{ color: "white" }}>Find Us</h1>
              <p style={{ textAlign: "left" }}>
                Akshya Nagar 1st Block 1st Cross,
                <br /> Rammurthy nagar, Bangalore-560016
              </p>
            </div>
          </div>
          <div className={classes.phone_container}>
            <div className={classes.phoneIcon_container}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={classes.phone_icon}
                fill="#14ffa7"
              >
                <title>phone</title>
                <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
              </svg>
            </div>
            <div className={classes.phone_descripton}>
              <h1 style={{ color: "white" }}>Call Us</h1>
              <p>+91 1234567890</p>
            </div>
          </div>
          <div className={classes.email_container}>
            <div className={classes.emailIcon_container}>
              <svg
                className={classes.emailIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#ffd700"
              >
                <title>email-open-outline</title>
                <path d="M21.03 6.29L12 .64L2.97 6.29C2.39 6.64 2 7.27 2 8V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 7.27 21.61 6.64 21.03 6.29M20 18H4V10L12 15L20 10V18M12 13L4 8L12 3L20 8L12 13Z" />
              </svg>
            </div>
            <div className={classes.email_description}>
              <h1 style={{ color: "white" }}>Mail Us</h1>
              <p>contact@gmail.com</p>
            </div>
          </div>
        </div>
        <div className={classes.footer_second_container}>
          <div className={classes.footer_second_description}>
            <div>
              <div style={{ fontSize: "2rem", fontFamily: "bold" }}>
                <h1 className={classes.iconText}>
                  <span className={classes.icon}>🛍️</span> BestBuy
                </h1>
              </div>
              <p style={{ textAlign: "left" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
                <br />
                industry. Lorem Ipsum has been the industry's standard dummy{" "}
                <br />
                text ever since the 1500s, when an unknown printer took a galley{" "}
                <br />
                of type and scrambled it to make a type specimen book <br />
              </p>
              <div className={classes.followLinks}>
                <h1>Follow Us</h1>
                <div style={{ display: "flex", gap: "2rem" }}>
                  {socialLinks.map((element) => {
                    return (
                      <a href={element.link} key={element.id} target="_blank">
                        <span
                          style={{
                            borderRadius: "100%",
                            padding: `${element.padding}`,
                            boxShadow: "0.5px 0.5px 100px white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: `${element.backgroundColor}`,
                          }}
                          key={element.id}
                        >
                          {element.icon}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={classes.useFullLinks}>
              <h1 style={{ color: "white" }}>
                Userful Links
                <hr
                  style={{
                    border: "2px solid orange",
                    width: "20%",
                    marginTop: "0.8rem",
                  }}
                ></hr>
              </h1>
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  paddingLeft: "5rem",
                  paddingRight: "5rem",
                }}
              >
                <ul>
                  <li>Our team</li>

                  <li>Our gallery</li>
                  <li>FAQ</li>
                  <li>Our policies</li>
                  <li>contact us</li>
                </ul>
                <ul>
                  <li>Our team</li>

                  <li>Our gallery</li>
                  <li>FAQ</li>
                  <li>Our policies</li>
                  <li>contact us</li>
                </ul>
              </div>
            </div>
            <div>
              <h1 style={{ color: "white" }}>
                Subscribe
                <hr
                  style={{
                    border: "2px solid orange",
                    width: "50%",
                    marginTop: "0.8rem",
                  }}
                ></hr>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer_bottom}>
        <div>
          <p>Copyright © 2023, All Right Reserved Susaksham Jain</p>
        </div>
        <div>
          <ul className={classes.bottom_policy}>
            <li>Home</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Policy</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
