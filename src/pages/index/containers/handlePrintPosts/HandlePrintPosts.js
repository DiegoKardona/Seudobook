import React, { Component } from "react";

/*Importing firebase*/
import firebase from "firebase";

/*Importing component to handle*/
import PostComponent from "../../components/post/posts/PostComponent";

class HandlePrintPosts extends Component {
  render() {
    //To consultate the posts
    const database = firebase.firestore().collection("posts");
    const docRef = database
      .where("post", "==", true)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          return <PostComponent xd={doc} />;
        });
      })
      .catch(() => alert("Error obteniendo los posts"));

    return (
      <div>
        <PostComponent />
      </div>
    );
  }
}

export default HandlePrintPosts;
