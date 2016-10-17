import React from "react";

export default class Projects extends React.Component {
  constructor(props) {
        super(props);
        this.state = {active: false};
    }
  render(){
    return (
      <div>
        <section>
          <div class="container">
            <h1 class="text-center">PROJECTS</h1>
            <h4 class="text-center">I am proud to have a part in building the internet, here are some my projects.</h4>
            <span class="sec-arrow"> &darr; </span>
          </div>
        </section>
        <section class="projects">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <article class="">
                  <label>NFL Super Bowl homepage</label>
                  <div>DURATION: 2 WEEKS</div>
                  <div>[HTML, JAVASCRIPT, JQUERY, CSS]</div>
                  <p>Built the Super Bowl homepage for hyundaiusa.com, the official sponser of the NFL, the page spiked at 70,000 concurrent users.</p>
                </article>
              </div>
              <div class="col-md-6">
                <article class="">
                  <label>NFL countdown timer</label>
                  <div>DURATION: 1 WEEK</div>
                  <div>[HTML, JAVASCRIPT, JQUERY, CSS]</div>
                  <p>Built custom timer that counted down to the 2015 superbowl kickoff 2015, for hyundaiusa.com</p>
                </article>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <article class="">
                  <label>NCAA page</label>
                  <div>DURATION: 1 MONTH</div>
                  <div>[HTML, JAVASCRIPT, JQUERY, CSS]</div>
                  <p>Built the interactive NCAA page, where people could download wallpapers of there favorite teams, share the page on social media, share the wallpapers on twitter or instagram, and also sign up to recieve a team cling. This page made AJAX requests to a .NET REST API.</p>
                </article>
              </div>
              <div class="col-md-6">
                <article class="">
                  <label>Sonata Plugin Hybrid page</label>
                  <div>DURATION: 1 MONTH</div>
                  <div>[HTML, JAVASCRIPT, JQUERY, CSS]</div>
                  <p>Built the interactive page showcasing the Sonata Plugin Hybrid, Application Program Inteface implementations, using the Google Maps API, and the YouTube API. This page also made AJAX requests to our .NET REST API.</p>
                </article>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <article class="">
                  <label>Android Auto page</label>
                  <div>DURATION: 1 WEEK</div>
                  <div>[HTML, JAVASCRIPT, JQUERY, CSS, YOUTUBE API]</div>
                  <p>Built the responsive interactive Android Auto page for hyundaiusa.com. It showcased the Android Auto technology Hyundai vehicles, implemented the youtube API.</p>
                </article>
              </div>
              <div class="col-md-6">
                <article class="">
                  <label>Hydrogen charging station map</label>
                  <div>DURATION: 1 WEEK</div>
                  <div>[HTML, JAVASCRIPT, JQUERY, CSS]</div>
                  <p>Built responsive, interactive map for hyundaiusa.com, with locations of hydrogen charging stations in CA.</p>
                </article>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <article class="">
                  <label>Vehicle listing page</label>
                  <div>DURATION: 1 WEEK</div>
                  <div>[HTML, JAVASCRIPT, JQUERY, CSS]</div>
                  <p>Built responsive vehicle listing price page for all vehicles for hyundaiusa.com</p>
                </article>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <article class="">
                  <label>irvinebmw.com</label>
                  <div>DURATION: 1 MONTH</div>
                  <div>[HTML, JAVASCRIPT, JQUERY, CSS, BOOTSTRAP, PHP, XML]</div>
                  <p>Lead developer for the responsive redesign for irvinebmw.com, converted a desktop only site to be cross device cross browser compatable</p>
                </article>
              </div>
              <div class="col-md-6">
                <article class="">
                  <label>yarkbmw.com</label>
                  <div>DURATION: 1 MONTH</div>
                  <div>[HTML, JAVASCRIPT, JQUERY, CSS, BOOTSTRAP, PHP, XML]</div>
                  <p>Lead developer for the responsive redesign for yarkbmw.com, converted a desktop only site to be cross device cross browser compatable</p>
                </article>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <article class="">
                  <label>jaguarmissionviejo.com</label>
                  <div>DURATION: 1 MONTH</div>
                  <div>[HTML, JAVASCRIPT, JQUERY, CSS, BOOTSTRAP, PHP, XML]</div>
                  <p>Lead developer for the responsive redesign for jaguarmissionviejo.com, converted a desktop only site to be cross device cross browser compatable</p>
                </article>
              </div>
              <div class="col-md-6">
                <article class="">
                  <label>hornburgla.com</label>
                  <div>DURATION: 1 MONTH</div>
                  <div>[HTML, JAVASCRIPT, JQUERY, CSS, BOOTSTRAP, PHP, XML]</div>
                  <p>Lead developer for the responsive redesign for hornburgla.com, converted a desktop only site to be cross device cross browser compatable</p>
                </article>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <article class="">
                  <label>hornburgjaguarsm.com</label>
                  <div>DURATION: 1 MONTH</div>
                  <div>[HTML, JAVASCRIPT, JQUERY, CSS, BOOTSTRAP, PHP, XML]</div>
                  <p>Lead developer for the responsive redesign for hornburgjaguarsm.com, converted a desktop only site to be cross device cross browser compatable</p>
                </article>
              </div>
              <div class="col-md-6">
                <article class="">
                  <label>landrovernewportbeach.com</label>
                  <div>DURATION: 1 MONTH</div>
                  <div>[HTML, JAVASCRIPT, JQUERY, CSS, BOOTSTRAP, PHP, XML]</div>
                  <p>Lead developer for the responsive redesign for landrovernewportbeach.com, converted a desktop only site to be cross device cross browser compatable</p>
                </article>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <article class="">
                  <label>landrovermissionviejo.com</label>
                  <div>DURATION: 1 MONTH</div>
                  <div>[HTML, JAVASCRIPT, JQUERY, CSS, BOOTSTRAP, PHP, XML]</div>
                  <p>Lead developer for the responsive redesign for landrovermissionviejo.com, converted a desktop only site to be cross device cross browser compatable</p>
                </article>
              </div>
              <div class="col-md-6">
                <article class="">
                  <label>hornburglandroverla.com</label>
                  <div>DURATION: 1 MONTH</div>
                  <div>[HTML, JAVASCRIPT, JQUERY, CSS, BOOTSTRAP, PHP, XML]</div>
                  <p>Lead developer for the responsive redesign for hornburglandroverla.com, converted a desktop only site to be cross device cross browser compatable</p>
                </article>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <article class="">
                  <label>hornburglandroversm.com</label>
                  <div>DURATION: 1 MONTH</div>
                  <div>[HTML, JAVASCRIPT, JQUERY, CSS, BOOTSTRAP, PHP, XML]</div>
                  <p>Lead developer for the responsive redesign for hornburglandroversm.com, converted a desktop only site to be cross device cross browser compatable</p>
                </article>
              </div>
              <div class="col-md-6">
                <article class="">
                  <label>jaguarnewportbeach.com</label>
                  <div>DURATION: 1 MONTH</div>
                  <div>[HTML, JAVASCRIPT, JQUERY, CSS, BOOTSTRAP, PHP, XML]</div>
                  <p>Lead developer for the responsive redesign for jaguarnewportbeach.com, converted a desktop only site to be cross device cross browser compatable</p>
                </article>
              </div>
            </div>
          </div>
        </section>
        <hr />
      </div>
    );
  }
};
