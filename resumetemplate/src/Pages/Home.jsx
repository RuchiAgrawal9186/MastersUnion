import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="header"></div>

        <div className="Container">
          <div className="left">
            <h1>SOPHIA PALMER</h1>
            <div className="line"></div>

            <div className="sections">
              <div className="sectionName">PROFILE SUMMARY</div>
              <div className="sectionline"></div>
            </div>

            <div style={{ fontSize: "14px" }}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.There are many variations of passages of Lorem
              Ipsum available, but the majority have suffered alteration in some
              form, by injected humour, or randomised words which don't look
              even slightly believable.
            </div>

            <div className="sections">
              <div className="sectionName">EXPERIENCE</div>
              <div className="experinceline"></div>
            </div>

            <div className="companyDetail">
              <div>CLAREDON SMITH</div>
              <p style={{ opacity: "0.7", fontSize: "12px" }}>
                Didier Sachs, Los Santos, CA, 2008–2011
              </p>
            </div>

            <div className="sectionName">Web developer</div>

            <div className="companyDesc">
              <ul>
                <li>Manage accounts worth $4.7 million in annual sales</li>
                <li>
                  Selected to train 3 new account managers on the basis of my
                  stellar track record
                </li>
                <li>
                  Increased business volume by 150% by implementing new customer
                  service initiative
                </li>
              </ul>
            </div>

            <div className="companyDetail">
              <div style={{ margin: "1%" }}>CLAREDON SMITH</div>
              <p style={{ opacity: "0.7", fontSize: "12px" }}>
                Didier Sachs, Los Santos, CA, 2008–2011
              </p>
            </div>

            <div className="sectionName">Web developer</div>

            <div className="companyDesc">
              <ul>
                <li>Manage accounts worth $4.7 million in annual sales</li>
                <li>
                  Selected to train 3 new account managers on the basis of my
                  stellar track record
                </li>
                <li>
                  Increased business volume by 150% by implementing new customer
                  service initiative
                </li>
              </ul>
            </div>
            <div className="line"></div>

            <div className="Educations">
              <div className="sections">
                <div className="sectionName">EDUCATION</div>
                <div className="educationline"></div>
              </div>
              <div className="companyDetail">
                <div className="sectionName">Master of Computer Science</div>
                <p style={{ opacity: "0.7", fontSize: "13px" }}>(2020-2022)</p>
              </div>
              <div className="companyDesc">
                <ul>
                  <li>Graduated in 2018</li>
                  <li>
                    Managed a student project to develop a weekly IT News
                    podcast.
                  </li>
                </ul>
              </div>

              <div className="companyDetail">
                <div className="sectionName">Bachelor of Computer Science</div>
                <p style={{ opacity: "0.7", fontSize: "13px" }}>
                  ((2014-2018))
                </p>
              </div>
              <div className="companyDesc">
                <ul>
                  <li>Graduated in 2018</li>
                </ul>
              </div>
            </div>

            <div className="line"></div>

            <div className="Activities">
              <div className="sections">
                <div className="sectionName">EXTRACURRICULAR ACTIVITIES</div>
                <div className="activityline"></div>
              </div>

              <div className="Certificate">
                <div className="leftside">
                  <p>PMP - Project Management Institute</p>
                  <p>CAPM - Project Management Institute</p>
                  <p>PRINCE@ Foundation</p>
                </div>
                <div
                  className="rightside"
                  style={{ opacity: "0.7", fontSize: "13px" }}
                >
                  <p>(2010-05)</p>
                  <p>(2010-05)</p>
                  <p>(2010-05)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <div>
              <img src="./images/Rectangle 202.png" alt="" />
            </div>

            <div className="contact">
              <div className="sections">
                <div className="sectionName">CONTACT</div>
                <div className="sectionline"></div>
              </div>

              <div className="contactDetails">
                <div className="logos" style={{ marginTop: "1%" }}>
                  <img src="./images/pin.svg" alt="" />
                </div>
                <div className="desc">
                  <p style={{ marginTop: "1%" }}>Dallas,Texas</p>
                </div>
              </div>

              <div className="contactDetails">
                <div className="logos" style={{ marginTop: "1%" }}>
                  <img src="./images/envelope.svg" alt="" />
                </div>
                <div className="desc">
                  <p style={{ marginTop: "1%" }}>sophiapalmer@gmail.com</p>
                </div>
              </div>

              <div className="contactDetails">
                <div className="logos" style={{ marginTop: "1%" }}>
                  <img src="./images/phone.svg" alt="" />
                </div>
                <div className="desc">
                  <p style={{ marginTop: "1%" }}>+333888999</p>
                </div>
              </div>

              <div className="contactDetails">
                <div className="logos" style={{ marginTop: "1%" }}>
                  <img src="./images/linkedin.svg" alt="" />
                </div>
                <div className="desc">
                  <p style={{ marginTop: "1%" }}>www.linkedin.com</p>
                </div>
              </div>
            </div>

            <div className="line"></div>

            <div className="skills">
              <div className="sections">
                <div className="sectionName">SKILLS</div>
                <div className="sectionline"></div>
              </div>

              <div className="companyDesc">
                <ul>
                  <li>JIRA</li>
                  <li>Confluence</li>
                  <li>Agile/Hybrid</li>
                  <li>SDLC</li>
                </ul>
              </div>
            </div>

            <div className="line"></div>

            <div className="CERTIFICATIONS">
              <div className="sections">
                <div className="sectionName">CERTIFICATIONS</div>
                <div className="sectionline"></div>
              </div>

              <div className="companyDesc">
                <ul>
                  <li>PMP - Project Management Institute</li>
                  <li>CAPM - Project Management Institute</li>
                  <li>PRINCE@ Foundation</li>
                </ul>
              </div>
            </div>

            <div className="line"></div>

            <div className="Hobbies">
              <div className="sections">
                <div className="sectionName">HOBBIES</div>
                <div className="sectionline"></div>
              </div>

              <div className="companyDesc">
                <ul>
                  <li>Travel</li>
                  <li>Painting</li>
                  <li>Reading</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
