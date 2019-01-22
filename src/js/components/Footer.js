import React from "react";
export default class Footer extends React.Component {
  render(){
    return (
        <footer>
          <div class="container text-center">
            <em>&copy; {new Date().getFullYear() + ' '}mark sorce </em>
          </div>
        </footer>
    );
  }
};
