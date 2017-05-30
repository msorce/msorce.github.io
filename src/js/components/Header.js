import React from "react";

export default class Header extends React.Component {
  render(){
    return (
      <div>
        <hr />
        <header>
         <div class="container">
           <h1 class="title">Mark Sorce</h1>
           <h4><em>Front-End Software Engineer</em></h4>
           <ul class="list-inline text-center links">
             <li><a href="https://www.linkedin.com/in/msorce" target="_blank" >linkedin</a></li>
             <li><a href="https://codepen.io/msorce/" target="_blank">codepen</a></li>
             <li><a href="https://github.com/msorce" target="_blank" >github</a></li>
             <li><a href="https://goo.gl/3qfvPY" target="_blank" >resume</a></li>
             <li><a href="mailto:&#109;&#97;&#114;&#107;&#115;&#111;&#114;&#99;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">email</a></li>
           </ul>
         </div>
         <span class="arrow"> &darr; </span>
        </header>
        <hr />
      </div>
    );
  }
};
