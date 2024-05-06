import React, { Component } from 'react';
import {
  HomeWrapper,
  HomeWrapperTop,
  BlogImage,
  VideoWrapper,
} from './style';
import blog1 from './blog1.json'; 

export default class Home extends Component {
  render() {
    return (
      <div>
        <HomeWrapper>
          <HomeWrapperTop>
            {blog1.blogs.map((blog, index) => (
              
              index % 2 === 0 && (
                <div key={blog.id} style={{ display: 'flex', marginBottom: '60px' }}>
                 
                  <div style={{ flex: 1, marginRight: '10px' }}>
                    <h1>{blog.title}</h1>
                    <p>{blog.body}</p>
                    <p>Author:{blog.author}</p>
              
                    {blog.image ? (
                      <BlogImage src={blog.image} alt="blog pic" />
                    ) : (
                      <VideoWrapper>
                        <video width="320" height="240" controls>
                          <source src={blog.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </VideoWrapper>
                    )}
                  </div>
                
                  {index + 1 < blog1.blogs.length && (
                    <div style={{ flex: 1, marginLeft: '10px' }}>
                      <h1>{blog1.blogs[index + 1].title}</h1>
                      <p>{blog1.blogs[index + 1].body}</p>
                      <p>Author:{blog1.blogs[index + 1].author}</p>
                  
                      {blog1.blogs[index + 1].image ? (
                        <BlogImage src={blog1.blogs[index + 1].image} alt="blog pic" />
                      ) : (
                        <VideoWrapper>
                          <video width="320" height="240" controls>
                            <source src={blog1.blogs[index + 1].video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </VideoWrapper>
                      )}
                    </div>
                  )}
                </div>
              )
            ))}
          </HomeWrapperTop>
        </HomeWrapper>
      </div>
    );
  }
}
