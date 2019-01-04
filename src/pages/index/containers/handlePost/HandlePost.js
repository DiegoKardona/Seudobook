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

  handleSubmit = e => {
    e.preventDefault();

    const database = firebase.firestore().collection("posts");
    const data = this.state;
    const currentUser = firebase.auth().currentUser;
    const userName = currentUser.displayName;
    const userPhoto = currentUser.photoURL;
    if (data.bookCover) {
      //Adding new post
      database
        .add({
          bookTitle: data.bookTitle,
          bookCover: data.bookCover,
          post: data.post,
          postAuthor: userName,
          postAuthorPhoto: userPhoto
        })
        .then(() => {
          alert("Post publicadó con exito!");
        })
        .catch(error => {
          alert("Ocurrió un error: ", error);
        });
    } else {
      alert("Porfavor elije la portada del libro");
    }
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
