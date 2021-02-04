import React, { useEffect } from "react";
import "./ProjectsForYouDescription.css";
import { content } from "./Content";
import { Link } from "react-router-dom";

const ProjectsForYouDescription = ({ match }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="description__page">
      <section className="section__header">
        <Link className="section__header--link" to="/dashboard/new-projects">
          ← Back
        </Link>
      </section>
      <div className="description__main-projects">
        <div className="description__left-projects">
          <div className="description__container">
            <img
              className="description__banner-p"
              src={content[match.params.id].img}
            />

            <div className="description__content">
              <h3 className="description__title">
                {content[match.params.id].title}
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: content[match.params.id].description,
                }}
                className="description__para"
              ></p>
            </div>
          </div>
        </div>
        <div className="description__right-projects">
          <div className="description__rightContainer">
            <div className="description__svg"></div>
            <div className="description__rightContent">
              <div className="description__rightTitle">
                Project-based hiring
              </div>
              <div className="description__rightDesc">
                Complete some of the challenges of your dream companies, submit
                the proposals and get hired
              </div>
              <div className="description__submit">Submit proposal</div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="submit__proposalContainer">
        <div className="proposalContainer">
          <div className="submit__textareaTitle">Leave a message ... </div>
          <textarea className="submit__textarea" rows="4" cols="50">
            At w3schools.com you will learn how to make a website. They offer
            free tutorials in all web development technologies.
          </textarea>
          <div className="submit__proposal"></div>
        </div>
      </div> */}
    </div>
  );
};

export default ProjectsForYouDescription;
