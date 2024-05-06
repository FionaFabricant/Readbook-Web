import React, { useState } from 'react';
import { PublishWrapper, InputSmall, InputLarge, SubmitButton, PublishH1, PublishTitle } from './style'; // 导入样式

const Publish = ({ blogs, setBlogs }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = () => {
 
    const newBlog = {
      title: title,
      body: body,
      author: author,
      id: blogs.length + 1 
    };

    
    setBlogs([...blogs, newBlog]);

  
    setTitle('');
    setBody('');
    setAuthor('');
  };

  return (
    <PublishWrapper>
      <PublishTitle>Publish page</PublishTitle>
      <PublishH1>Something else</PublishH1>

      <InputSmall type="text" placeholder="pls input the title.." value={title} onChange={handleTitleChange} />
      <InputLarge type="text" placeholder="pls input your content.." value={body} onChange={handleBodyChange} />
      <InputSmall type="text" placeholder="pls input the author.." value={author} onChange={handleAuthorChange} />

      <SubmitButton onClick={handleSubmit}>Publish</SubmitButton>
    </PublishWrapper>
  );
}

export default Publish;
