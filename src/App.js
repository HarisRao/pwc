import React from "react";
import pwc from "./pwc.svg";
import header from "./header.jpg";
import ipad from "./ipad.png";
import industry1 from "./industry1.jpg";
import industry2 from "./industry2.png";
import industry3 from "./industry3.jpg";
import text from "./text.png";
import text2 from "./text2.png";
import text3 from "./text3.png";
import text4 from "./text4.png";
import text5 from "./text5.png";
import ipod from "./ipod.png";
import contact1 from "./contact1.jpg";
import contact2 from "./contact2.jpg";
import contact3 from "./contact3.jpg";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="fluid-container">
          <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <a class="navbar-brand ml-5" href="#">
              <img src={pwc} width="100" height="50" alt=""></img>Industry 4.0
              Self Assessment
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse mr-5" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#welcome">
                    Welcome...
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#what">
                    What it is...
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#margin">
                    What others say...
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#fnt">
                    What we think...
                  </a>
                </li>
                <li>
                  <button class="btn" type="button">
                    Start Assessment
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="fluid-container">
          <img src={header} width="100%" id="header"></img>
          <p className="text-center text-black display-3" id="text_on_image">
            Industry 4.0 - Enabling Digital Operations
          </p>
          <p className="text-center text-black h2" id="text_center_image">
            Self Assessment
          </p>
          <i class="far fa-chevron-circle-down" id="icon_image"></i>
          <p className="text-center text-black" id="text_low">
            Scroll down for more information
          </p>
          <p className="text-center text-black" id="text_down">
            Or click here to start your self assessment{" "}
          </p>
        </div>

        <div className="row mb-5 pt-4" id="welcome">
          <div className="col-2"></div>
          <div className="col-8">
            <h1 className="text-center mb-5 mt-5" id="weight">
              Welcome To The Industry 4.0 / Digital Operations Self Assessment
            </h1>
            <p className="text-center lead" id="gray">
              The fourth industrial revolution - characterized by the increasing
              digitization and interconnection of products, value chains and
              business models - has arrived in the industrial sector and offers
              attractive opportunities. Industry 4.0 not only comprises the
              digitization of horizontal and vertical value chains but will also
              revolutionize company product and service portfolios and lead to
              the implementation of new, often disruptive business models. The
              following Self Assessment is designed to provide you with an
              understanding of your company's position regarding Industry 4.0 by
              measuring your actual against your target maturity along six
              dimensions, thereby identifying needs for action as well as
              classifying your current maturity level. In order to take your
              understanding to the next level, register for the benchmark after
              having completed the assessment to gain valuable insights on how
              you are positioned against competitors in your industry.
            </p>
          </div>
          <div className="col-2"></div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-2 col-md-4"></div>
          <div className="col-lg-2 col-md-4">
            <div class="card">
              <div class="card-body">
                <p class="card-text text-center">Conduct Self Assessment</p>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-md-12 text-center">
            <i
              className="fas fa-long-arrow-alt-right d-lg-block d-none"
              id="arrow"
            ></i>
            <i
              className="fas fa-long-arrow-alt-down d-lg-none d-sm-block "
              id="arrow"
            ></i>
          </div>
          <div className="col-md-4 d-lg-none"></div>
          <div className="col-lg-2 col-md-4">
            <div class="card">
              <div class="card-body">
                <p class="card-text text-center">Identify Needs For Action</p>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-md-12 text-center">
            <i
              className="fas fa-long-arrow-alt-right d-lg-block d-none"
              id="arrow"
            ></i>
            <i
              className="fas fa-long-arrow-alt-down d-lg-none d-sm-block "
              id="arrow"
            ></i>
          </div>
          <div className="col-md-4 d-lg-none"></div>
          <div className="col-lg-2 col-md-4">
            <div class="card">
              <div class="card-body">
                <p class="card-text text-center">Benchmark against others</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>

        <div className="text-center">
          <img src={ipad} height="100%" width="50%" id="img_hover"></img>
        </div>

        <div className="fluid-container" id="what">
          <div className="container">
            <p className="text-center h2 mb-5" id="head">
              What Industry 4.0 Is
            </p>

            <div className="row">
              <div className="col-lg-4 col-12" id="animated">
                <div class="card-body" id="crd">
                  <h1 class="card-title text-center p-2">Industry 1.0</h1>
                  <h4 class="card-subtitle text-center p-2">
                    End of 18th Century.
                  </h4>
                  <p class="card-text text-center pt-2" id="crd-text">
                    In the late 18th century, the invention of mechanical
                    production powered by water and steam started the first
                    industrial revolution.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <img src={industry1} id="radius"></img>
                <div id="h" className="d-md-block d-none"></div>
              </div>
              <div className="col-lg-4"></div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-12"></div>

              <div className="col-lg-4">
                <img src={industry2} id="radius"></img>
                <div id="h1" className="d-md-block d-none"></div>
              </div>
              <div className="col-lg-4 col-12" id="animated2">
                <div class="card-body" id="crd2">
                  <h1 class="card-title text-center p-2">Industry 1.0</h1>
                  <h4 class="card-subtitle text-center p-2">
                    Begining of 20th Century.
                  </h4>
                  <p class="card-text text-center pt-2" id="crd-text">
                    The second industrial revolution was fueled by the start of
                    mass production powered by electricity and combustion
                    engines to power machines in the beginning of the 20th
                    century. The first assembly lines were introduced, the use
                    of new materials and chemicals became possible and
                    communication was getting easier.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-12" id="animated">
                <div class="card-body" id="crd">
                  <h1 class="card-title text-center p-2">Industry 1.0</h1>
                  <h4 class="card-subtitle text-center p-2">
                    Begining of 20th Century.
                  </h4>
                  <p class="card-text text-center pt-2" id="crd-text">
                    The second industrial revolution was fueled by the start of
                    mass production powered by electricity and combustion
                    engines to power machines in the beginning of the 20th
                    century. The first assembly lines were introduced, the use
                    of new materials and chemicals became possible and
                    communication was getting easier.
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <img src={industry3} id="radius"></img>
                <div id="h3" className="d-md-block d-none"></div>
                <i class="far fa-angle-down" id="large"></i>
              </div>
              <div className="col-4"></div>
            </div>
          </div>
        </div>

        <div className="container" id="margin">
          <p className="text-center h2 mb-5">
            What Your Peers Think About Industry 4.0
          </p>
          <p className="text-center lead mt-5">
            For the PwC 2016 Global Industry 4.0 Survey we conducted interviews
            with more than 2,000 senior executives from industrial products
            companies in 26 countries across Europe, the Americas, Asia Pacific,
            Middle East and Africa. Here are our key findings:
          </p>
          <div className="row" id="margin">
            <div className="col-lg-4 col-12 text-center">
              <img src={text} width="80px" height="80px"></img>
              <p className="p-4 mr-2" id="para">
                <i class="fas fa-quote-left" id="double-quote"></i>
                <span className="ml-5">From Talk to action</span>
              </p>
            </div>
            <div className="col-lg-4 col-12 text-center">
              <img src={text2} width="80px" height="80px"></img>
              <p className="p-4 mr-2" id="para">
                <span className="mr-5">
                  <i class="fas fa-quote-left" id="double-quote"></i>
                </span>
                Digitisation drives quantum leaps in performance
              </p>
            </div>
            <div className="col-lg-4 col-12 text-center">
              <img src={text3} width="80px" height="80px"></img>
              <p className="p-4 mr-2" id="para">
                <span className="mr-5">
                  <i class="fas fa-quote-left" id="double-quote"></i>
                </span>
                Deepen digital relationships
                <span className="ml-4">with more empowered customers</span>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-4 col-12 text-center">
              <img src={text4} width="80px" height="80px"></img>
              <p className="p-4 mr-2" id="para">
                <i class="fas fa-quote-left" id="double-quote"></i>
                <span className="ml-5">
                  Industry 4.0 is accelerating globalisation, but with a
                  distinctly regional flavour
                </span>
              </p>
            </div>
            <div className="col-lg-4 col-12 text-center">
              <img src={text5} width="80px" height="80px"></img>
              <p className="p-4 mr-2" id="para">
                <i class="fas fa-quote-left" id="double-quote"></i>
                <span className="ml-5">
                  Big investments with big impacts: it's time to commit
                </span>
              </p>
            </div>
          </div>

          <div className="container mt-5">
            <p className="text-center h5 " id="clr">
              For more information visit the{" "}
              <span className="text-dark">website for the survey</span> or
              download the survey here:
            </p>
            <div className="d-flex justify-content-center mt-3">
              <button className="btn">
                <i class="fal fa-file-pdf"></i> Download
              </button>
            </div>
          </div>

          <div className="container">
            <p className="text-center h3" id="fnt">
              What We Think About Industry 4.0
            </p>
            <p className="text-center lead mt-5" id="clr">
              To describe our view on Industry 4.0 / Digital Operations we
              created a maturity model which includes the most relevant
              functional dimensions as well as the maturity stages a company can
              be in. We use it to help companies understand where they currently
              are on their digital journey and which next steps are sensible in
              respect to their current situation and the industry they are
              operating in. The maturity model serves as a basis for the Self
              Assessment, so your current maturity level will be shown as part
              of the result.
            </p>
          </div>
        </div>
        <div className="container">
          <p className="text-center h2" id="fnt">
            <i class="fa fa-rocket mr-4"></i> Start Assessment
          </p>
          <div className="text-center">
            <img src={ipod} height="100%" width="50%" id="img_hover"></img>
          </div>
        </div>
        <div className="fluid-container" id="gray1">
          <div className="row">
            <div className="col-lg-6 col-12">
              <p className="pt-4 text-white h3 mb-3 ml-5">Contact</p>

              <div className="d-flex justify-content-around mb-5">
                <img src={contact1} width="75px" height="75px" id="round"></img>
                <img src={contact2} width="75px" height="75px" id="round"></img>
                <img src={contact3} width="75px" height="75px" id="round"></img>
              </div>
            </div>

            <div className="col-lg-2 col-6 mt-4">
              <p className="pt-3 text-white h4 ml-4">Additional Links</p>
              <ul id="li">
                <li>
                  <i class="far fa-angle-right p-2"></i> PwC Global
                </li>
                <li>
                  <i class="far fa-angle-right p-2"></i> PwC Germany
                </li>
              </ul>
            </div>
            <div className="col-lg-0 col-md-1"></div>
            <div className="col-lg-2 col-6 mt-4">
              <ul id="li">
                <li>
                  <i class="far fa-angle-right p-2"></i> 2016 Global Industry
                  4.0 Survey
                </li>
                <li>
                  <i class="far fa-angle-right p-2"></i> PwC Germany Industry
                  4.0 Microsite
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="fluid-container">
          <div id="dark">
            <p className="text-center p-2">
              © 2015 PwC. All rights reserved. PwC refers to the PwC network
              and/or one or more of its member firms, each of which is a
              separate legal entity. Please see www.pwc.com/structure for
              further details. Imprint | Disclaimer | Privacy
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
