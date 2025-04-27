import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    coverImage: string;
    author: {
      id: string;
      name: string;
      avatar: string;
    };
    publishedAt: string;
    readTime: number;
    category: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden group">
      {/* Cover Image */}
      <Link to={`/blog/${post.id}`} className="block overflow-hidden aspect-video">
        <img 
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      
      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <Link 
          to={`/blog?category=${post.category}`}
          className="inline-block text-xs font-medium text-primary-500 mb-2"
        >
          {post.category}
        </Link>
        
        {/* Title */}
        <Link to={`/blog/${post.id}`}>
          <h3 className="font-serif text-xl font-medium leading-tight mb-2 hover:text-primary-500 transition-colors">
            {post.title}
          </h3>
        </Link>
        
        {/* Excerpt */}
        <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        
        {/* Author and Meta */}
        <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
          {/* Author */}
          <Link to={`/artisans/${post.author.id}`} className="flex items-center group">
            <img 
              src={post.author.avatar}
              alt={post.author.name}
              className="h-8 w-8 rounded-full object-cover mr-2"
            />
            <span className="text-sm font-medium group-hover:text-primary-500 transition-colors">
              {post.author.name}
            </span>
          </Link>
          
          {/* Meta */}
          <div className="flex items-center text-xs text-neutral-500">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
              })}
            </time>
            <span className="mx-1">•</span>
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;