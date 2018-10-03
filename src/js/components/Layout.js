import React from "react";

import Header from "./Header";
import Content from "./Content";
import Skills from "./Skills";
import Projects from "./Projects";
import Quote from "./Quote";
import Footer from "./Footer";

export default class Layout extends React.Component {
  render(){
    return (
      <div class="root">
        <Header />
     {/*<Content />
        <Skills />
        <Quote />*/}
        <Footer />
      </div>
    );
  }
};
