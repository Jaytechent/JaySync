import React from 'react';
import PostForm from '../components/PostForm';

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Create a Post</h2>
      <PostForm />
    </div>
  );
};

export default Home;
