import React from "react";
import Navbar from "../components/layout/Navbar";
import EmailBar from "../components/layout/EmailBar";
import SocialMediaBar from "../components/layout/SocialMediaBar";
import pic from "../assets/Bewerbungsfoto.jpg";
import RepoList from "../components/repos/RepoList";

function Home() {
  return (
    <div>
      <Navbar />
      {/*<SocialMediaBar />*/}
      <EmailBar />
      <main className="container-xl">
        <section className="container row justify-content-center" id="Introduction">
            <div className="d-flex justify-content-center align-items-center col-lg-4 col-8">
              <div>
                <p className="highlight">Welcome, my name is</p>
                <h1 className="highlight">Thanh Cong Huynh</h1>
                <h2>This is Biography page with different topics.</h2>
                <div className="home-text">
                  I am a software engineer, building web applications for fun.
                  You know that stereo type of asian Weeb. I like to create
                  content on Youtube, Twitch and other platforms.
                </div>
              </div>
            </div>
        </section>
        <section className="row justify-content-center" id="About_Me">
          <div className="d-flex justify-content-center align-items-center col-lg-5 col-8">
            <div>
              <h3 className="highlight">About Me</h3>
              <div>
                <img id="bewerbungsfoto" src={pic} alt="blabla" />
                <div className="home-text">
                  Hi guys! My name is Thanh Cong. Most people call me just
                  Thanh. I am interested in japanese culture, art, content
                  creating in gaming area and have a stoic view regarding my
                  lifestyle.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="row justify-content-center" id="Experience">
          <div className="d-flex justify-content-center align-items-center col-lg-4 col-8">
            <div>
              <h3 className="highlight">Experience</h3>
              <div>
                <div className="home-text">
                  Within the study I was part of a team to build an online
                  version of a board game using Unity and React. Next to my
                  major in computer science my minor contains visualization and
                  simulations in Big Data. I have recently started to learn
                  developing Web applications using MERN Stack with React 18 and
                  MongoDB 5. Take a look on my Github repository.
                </div>
                <RepoList />
              </div>
            </div>
          </div>
        </section>                

        <section className="row justify-content-center" id="Work">
          <div className="d-flex align-items-center col-lg-4 col-sm-6 col-5">
            <div>
              <h3 className="highlight">Work</h3>
              <div>
                <div className="home-text">
                  During my internship my project was to develop a feature
                  recommending to recruit team member with certain missing
                  competences for startup companies. The core of this project
                  was to create a machine learning model for the recommendation.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-5 row justify-content-center" id="Contact">
          <div className="row justify-content-start">
            <div className="d-flex align-items-center col-lg-4 col-sm-7 col-6">
              <div>
                <h3 className="highlight">Contact</h3>
                <div>
                  <div className="home-text">
                    If you have any questions, write me an <a className='highlight' href="mailto: thc.huynh@protonmail.com">email</a> or get in touch
                    by any of my social media links on the left.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
