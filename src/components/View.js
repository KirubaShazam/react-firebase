import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class View extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blog: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('blogs').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          blog: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('blogs').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/">BLOG LIST</Link></h4>
          </div>
          <div class="panel-body">
            <dl>
			  <dt>Title:</dt>
              <dd>{this.state.blog.title}</dd>
              <dt>Description:</dt>
              <dd>{this.state.blog.description}</dd>
              <dt>Author:</dt>
              <dd>{this.state.blog.author}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default View;