import React from "react";

export default class Header extends React.Component {
  render(){
    return (
      <div>
        <hr />
        <header>
         <div class="container">
           <h1 class="title">Mark Sorce</h1>
           <h4><em>Software Engineer</em></h4>
           <ul class="list-inline text-center links">
             <li><a href="https://www.linkedin.com/in/msorce" target="_blank" >linkedin</a></li>
             <li><a href="https://codepen.io/msorce/" target="_blank">codepen</a></li>
             <li><a href="https://github.com/msorce" target="_blank" >github</a></li>
             <li><a href="https://goo.gl/3qfvPY" target="_blank" >resume</a></li>
             <li><a href='ma&#105;&#108;to&#58;%6D&#115;o&#114;c%6&#53;ma%69%6Ch%61n&#100;l&#101;r&#37;40gm&#37;61%69&#108;&#46;com'>email</a></li>
           </ul>
         </div>
         <span class="arrow"> &darr; </span>
        </header>
        <hr />
      </div>
    );
  }
};
