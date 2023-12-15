import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="topContainer">
        <div className="left">
          <h1>
            Welcome to{" "}
            <span style={{ color: "#7757F4" }}>AI Resume Maker ! </span>Your
            path to professional success
          </h1>
          <button>Start building</button>
        </div>
        <div className="right">
          <div className="topdiv">
            <h6>Font</h6>
            <h6>Rubik</h6>
            <h6>Inter</h6>
            <h6>Montserrat</h6>
            <h6>Times New Roman</h6>
            <h6>Calibri</h6>
          </div>
          <img src="./images/Professional Summary 2.png" alt="" />
          <div className="colors">
            <div className="pink"></div>
            <div className="lightgreen"></div>
            <div className="maroon"></div>
            <div className="darkgreen"></div>
            <div className="lightblue"></div>
            <div className="yellow"></div>
            <div className="purple"></div>
            <div className="cyan"></div>
            <div className="brown"></div>
            <div className="pink"></div>
          </div>
        </div>
      </div>

      <div className="resumeMaker">
        <div className="left">
          <h2 style={{ margin: "4%" }}>Why choose AI resume maker?</h2>

          <div style={{ display: "flex" }}>
            <div>
              {" "}
              <img src="./images/Template-3 2.png" alt="" />
            </div>
            <div>
              <img src="./images/Template-4@2x.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="right">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
            }}
          >
            <div className="circle">
              <img src="./images/eye1.png" alt="" />
            </div>

            <div style={{ textAlign: "left", gap: "15px" }}>
              <h5>Real-time preview</h5>
              <p>Preview the resumes real-time while adding the details.</p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
            }}
          >
            <div className="circle">
              <img src="./images/eye1.png" alt="" />
            </div>

            <div>
              <h5>Templates Library</h5>
              <p>
                Select from a wide range of templates that suits your
                professional needs.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "15px" }}>
            <div className="circle">
              <img src="./images/eye1.png" alt="" />
            </div>

            <div>
              <h5>Dynamic Content Generation</h5>
              <p>Automatically creates content based on your inputs.</p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
            }}
          >
            <div className="circle">
              <img src="./images/eye1.png" alt="" />
            </div>

            <div>
              <h5>Keyword optimization</h5>
              <p>
                Strategically select and incorporate relevant keywords within
                the content of your resume or CV.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="guidence">
        <div className="left">
          <h2>Intelligent Guidance</h2>
          <p>
            Our AI-powered platform provides step-by-step guidance as you build
            your resume. From selecting the right template to tailoring content,
            our AI ensures your resume reflects your unique strengths.
          </p>
          <button>Try now</button>
        </div>
        <div className="right">
          <img src="./images/Rectangle 155.png" alt="" />
        </div>
      </div>

      <div className="btmguidence">
        <div style={{ display: "flex", gap: "15px" }}>
          <img src="./images/task-square.svg" alt="" />
          <div>Step by step guidance</div>
        </div>

        <div style={{ display: "flex", gap: "15px" }}>
          <img src="./images/note-2.png" alt="" />
          <div>Select from curated templates</div>
        </div>

        <div style={{ display: "flex", gap: "15px" }}>
          <img src="./images/eye.png" alt="" />
          <div>Realtime resume preview</div>
        </div>
      </div>

      <div className="middlecontainer">
        <div className="left">
          <img src="./images/Expanded screen 1.png" alt="" />
        </div>

        <div className="right">
          <h1>User-Friendly Interface</h1>
          <p>
            No more struggling with complex formatting tools. Our intuitive
            interface makes it easy to enter your information, choose from a
            variety of templates, and customize your resume effortlessly.
          </p>
        </div>
      </div>

      <div className="library">
        <h1>Explore the library</h1>
        <div className="container">
          <div>
            <img src="./images/Template-4@2x.png" alt="" />
          </div>

          <div>
            <img src="./images/6.png" alt="" />
          </div>

          <div>
            <img src="./images/2.png" alt="" />
          </div>

          <div>
            <img src="./images/1.png" alt="" />
          </div>

          <div>
            <img src="./images/4.png" alt="" />
          </div>
        </div>
      </div>

      <div className="createResume">
        <h1>Join the AI-Powered Revolution in Resume Building</h1>
        <p>
          Creating an outstanding resume has never been this effortless. With AI
          Resume Maker, you're not just crafting a document—you're shaping your
          professional future.
        </p>
        <button>Get started today</button>
      </div>
    </>
  );
};

export default Home;
