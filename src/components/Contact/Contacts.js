import React from "react";
import classes from "./Contacts.module.css";
import Button from "../../UI/Button/Button";
import ContactIcon from "../../Utils/Icons/ContactIcon";
import MapIcon from "../../Utils/Icons/MapIcon";
import EmailIcon from "../../Utils/Icons/EmailIcon";
import GithubIcon from "../../Utils/Icons/GithubIcon";
import TwitterIcon from "../../Utils/Icons/TwitterIcon";
import LinkedIcon from "../../Utils/Icons/LinkedIcon";
const Contacts = () => {
  const submitHandler = () => {};
  return (
    <div className={classes.contact_wrapper}>
      <div className={classes.contact_container}>
        <div className={classes.left_container}>
          <div className={classes.form_container}>
            <h1 style={{ fontSize: "4rem", fontFamily: "monospace" }}>
              Contact Us
            </h1>
            <p className={classes.message}>
              Feel Free to contact us any time. <br></br> We will get back to
              you as soon as we can!
            </p>
            <form className={classes.form} onSubmit={submitHandler}>
              <input type="text" placeholder="Name"></input>
              <input type="email" placeholder="Email"></input>
              <textarea placeholder="message"></textarea>
              <Button
                className={classes.send}
                text="Send"
                onClick={() => {}}
              ></Button>
            </form>
          </div>
        </div>
        <div className={classes.right_container}>
          <div className={classes.right_container_child}>
            <div className={classes.right_container_contact_info}>
              <h1>Contact Info</h1>
              <ul>
                <li>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ContactIcon></ContactIcon>
                  </span>
                  <span>+91 8847261517</span>
                </li>
                <li>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <EmailIcon></EmailIcon>
                  </span>
                  <span>sakshamyogesh@gmail.com</span>
                </li>
                <li>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MapIcon></MapIcon>
                  </span>
                  <span>
                    B-93 N.F.L Township
                    <br></br>
                    Bathinda, Punjab
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.contact_banner}>
          {" "}
          <ul>
            <li>
              <GithubIcon size="2rem" color="white"></GithubIcon>
            </li>
            <li>
              <TwitterIcon size="2rem" color="white"></TwitterIcon>
            </li>
            <li>
              <LinkedIcon size="2rem" color="white"></LinkedIcon>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.map_container}>
        <iframe
          className={classes.map_iframe}
          title="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6892.702394612743!2d74.93596574308354!3d30.255573199271495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39173319b6ae702d%3A0x9ca94cb2d029abc4!2sNFL%20Township%2C%20Bathinda%2C%20Punjab%20151003!5e0!3m2!1sen!2sin!4v1682061381298!5m2!1sen!2sin"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
