import React from "react";

import "./NewPost.scss";

function NewPost(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div id="new-post">
        <div id="book-info">
          <div id="book-title">
            <input
              id="title-input"
              name="bookTitle"
              value={props.state.bookTitle}
              onChange={props.handleChange}
              placeholder="Título del libro"
            />
          </div>
          <div id="book-cover">
            <div
              id="cover-img"
              style={{ backgroundImage: `url("${props.state.bookCover}")` }}
            />
            <progress
              id="cover-progress"
              value={props.state.coverUpload}
              max="100"
            />
            <div id="input-container">
              <label for="bookCover">Seleccionar portada</label>
              <input
                id="cover-input"
                name="bookCover"
                onChange={props.handleInput}
                type="file"
              />
            </div>
          </div>
        </div>
        <div id="post-content">
          <textarea
            id="content-input"
            name="post"
            value={props.state.post}
            onChange={props.handleChange}
            placeholder="Piensa algo"
          />
          <button id="post-button" type="submit">
            Publicar
          </button>
        </div>
      </div>
    </form>
  );
}

export default NewPost;
