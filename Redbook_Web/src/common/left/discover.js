import React, { Component } from 'react';
import { DiscoverWrapper, Title } from './style'; 
import blog from './blog.json'; 
import { withRouter } from 'react-router-dom'; 

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
  }

  componentDidMount() {

    const { location } = this.props;
    
    if (location.pathname === '/discover') {
      this.setState({ blogs: blog.blogs });
    }
  }


  renderBlogs = () => {
    return this.state.blogs.map(blog => (
      <div key={blog.id}>
        <h2>{blog.title}</h2>
        <p>{blog.body}</p>
        <p>Author:{blog.author}</p>
      </div>
    ));
  };

  render() {
    return (
      <DiscoverWrapper>
        <Title>Discovery page</Title>

        
        {this.renderBlogs()}
      </DiscoverWrapper>
    );
  }
}

export default withRouter(Discover); 
