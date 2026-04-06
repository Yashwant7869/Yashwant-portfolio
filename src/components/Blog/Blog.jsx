import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../../blogs";

const Blog = () => {
  return (
    <section
      id="blog"
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 font-sans"
    >
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          BLOGS
        </h2>
        <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
        <p className="text-gray-400 text-sm sm:text-base lg:text-lg font-medium max-w-3xl mx-auto leading-relaxed px-4">
          I write about web development, projects, and lessons from building
          real-world applications.
        </p>
      </div>

      <div className="grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="border border-gray-700 hover:border-purple-500/50 bg-gray-900/70 backdrop-blur-sm rounded-2xl p-5 sm:p-6 lg:p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="flex items-center justify-between text-xs sm:text-sm mb-4">
              <span className="text-purple-300 font-medium">{post.date}</span>
              <span className="text-gray-500">{post.readTime}</span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
              {post.title}
            </h3>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-5 line-clamp-4">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-xs font-medium text-purple-300 rounded-full px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              to={`/blog/${post.id}`}
              className="inline-flex items-center text-sm font-semibold text-purple-300 hover:text-pink-300 transition-colors duration-300"
            >
              Read Blog
              <span className="ml-2">→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
