import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './common/header';
import { GlobalStyle } from './style';
import Home from './pages/home';
import BottomInfo from './common/bottom';
import LeftNav from './common/left';
import Discover from './common/left/discover'; 
import Publish from './common/left/publish';

class App extends Component {
  state = {
    blogs: [], 
  };


  setBlogs = (updatedBlogs) => {
    this.setState({ blogs: updatedBlogs });
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <GlobalStyle />
            <LeftNav />
            <Header />

            <Route path="/" exact component={Home} />

            <Route path="/discover" exact render={(props) => <Discover {...props} blogs={this.state.blogs} setBlogs={this.setBlogs} />} />

            <Route path="/publish" exact render={(props) => <Publish {...props} blogs={this.state.blogs} setBlogs={this.setBlogs} />} />
            <BottomInfo />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
