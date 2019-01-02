import React from "react";

import "./PostComponent.scss";

function PostComponent(props) {
  return (
    <div id="post-container">
      <div id="post-header">
        <div id="post-left-content">
          <img
            id="author-avatar"
            src="https://scontent.feoh3-1.fna.fbcdn.net/v/t1.0-0/p370x247/48281244_1230724860408508_8861162085980045312_n.jpg?_nc_cat=111&_nc_ht=scontent.feoh3-1.fna&oh=98256d09b6b5b765b165b00dc9f3e1b7&oe=5C9593D6"
            alt=""
          />
        </div>
        <div id="post-right-content">
          <p id="author-name">Diego Cardona</p>
          <small id="book-title">El Hobbit</small>
        </div>
      </div>
    </div>
  );
}

export default PostComponent;
