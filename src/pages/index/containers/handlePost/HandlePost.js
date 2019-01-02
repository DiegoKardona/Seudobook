import React, { PureComponent } from "react";

/*Importing firebase*/
import firebase from "firebase";

/*Importing component to handle it*/
import NewPost from "../../components/post/NewPost";

class HandlePost extends PureComponent {
  state = {
    bookTitle: "",
    bookCover: null,
    coverUpload: 0,
    post: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const database = firebase.firestore().collection("posts");

    //Adding new post
    database
      .add({
        bookTitle: this.state.bookTitle,
        bookCover: this.state.bookCover,
        post: this.state.post
      })
      .then(() => {
        alert("Post publicadó con exito!");
      })
      .catch(error => {
        alert("Ocurrió un error: ", error);
      });
  };

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleInput = e => {
    const file = e.target.files[0];
    const date = new Date();
    const storageRef = firebase.storage().ref(`/bookCovers/${date}`);
    const task = storageRef.put(file);

    console.log(file);

    task.on(
      "state_changed",
      snapshot => {
        var progressPercentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({ coverUpload: progressPercentage });
      },
      error => {
        alert("Ha ocurrido un error: " + error.code);
      },
      () => {
        task.snapshot.ref.getDownloadURL().then(downloadURL => {
          this.setState({ bookCover: downloadURL, coverUpload: 100 });
        });
      }
    );
  };

  render() {
    return (
      <NewPost
        state={this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleInput={this.handleInput}
      />
    );
  }
}

export default HandlePost;
