import React from "react";

import "./PostComponent.scss";

function PostComponent(props) {
  alert(props.xd);
  return (
    <div class="post-container">
      <div class="post-header">
        <div class="post-left-content">
          <img
            class="author-avatar"
            src="https://scontent.feoh3-1.fna.fbcdn.net/v/t1.0-0/p370x247/48281244_1230724860408508_8861162085980045312_n.jpg?_nc_cat=111&_nc_ht=scontent.feoh3-1.fna&oh=98256d09b6b5b765b165b00dc9f3e1b7&oe=5C9593D6"
            alt=""
          />
        </div>
        <div class="post-right-content">
          <p class="author-name">Diego Cardona</p>
          <small class="book-title">El Hobbit</small>
        </div>
      </div>
      <div class="post-body">
        <div
          class="cover-img"
          //style={{ backgroundImage: `url("${props.data.bookCover}")` }}
        />
        <p>
          Amigos, quiero recomendarles este libro, empezé a leerlo hace unos
          meses y me fascinó, detras de toda la historia se escoden secretos
          maravillosos y la trama así medieval/edad antigua es super inquietante
          y magnifica. Sin duda un libro que todos tenemos que leer.
        </p>
      </div>
    </div>
  );
}

export default PostComponent;
