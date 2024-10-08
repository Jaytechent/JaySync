import React, { useState } from 'react';

const PostForm = () => {
  const [message, setMessage] = useState('');
  const [platforms, setPlatforms] = useState({
    twitter: false,
    facebook: false,
    instagram: false,
    tiktok: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedPlatforms = Object.keys(platforms).filter(platform => platforms[platform]);

    const postData = {
      message,
      platforms: selectedPlatforms,
    };

    // Use environment variable for backend URL
    const response = await fetch(`${process.env.BACKEND_URL}/api/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      alert('Post successfully shared!');
    } else {
      alert('Error sharing the post');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Post Message</label>
        <textarea
          className="w-full border border-gray-300 rounded-lg p-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What's on your mind?"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Platforms</label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={platforms.twitter}
              onChange={() => setPlatforms({ ...platforms, twitter: !platforms.twitter })}
            />
            <span className="ml-2">Twitter</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={platforms.facebook}
              onChange={() => setPlatforms({ ...platforms, facebook: !platforms.facebook })}
            />
            <span className="ml-2">Facebook</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={platforms.instagram}
              onChange={() => setPlatforms({ ...platforms, instagram: !platforms.instagram })}
            />
            <span className="ml-2">Instagram</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={platforms.tiktok}
              onChange={() => setPlatforms({ ...platforms, tiktok: !platforms.tiktok })}
            />
            <span className="ml-2">TikTok</span>
          </label>
        </div>
      </div>

      <button className="bg-blue-500 text-white p-2 rounded-lg" type="submit">
        Post
      </button>
    </form>
  );
};

export default PostForm;
