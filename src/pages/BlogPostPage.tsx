import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPostPage = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post</h1>
          <div className="text-gray-600">Post ID: {id}</div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700">Blog post content will be loaded here...</p>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;