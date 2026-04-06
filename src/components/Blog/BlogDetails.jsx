import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../../blogs";

const BlogDetails = () => {
  const { id } = useParams();
  const blogId = Number(id);
  const post = blogPosts.find((item) => item.id === blogId);

  if (!post) {
    return (
      <section className="min-h-screen bg-[#050414] text-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Blog Not Found</h1>
          <p className="text-gray-400 mb-8">
            The blog you are trying to read does not exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-5 py-2.5 rounded-lg font-semibold transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#050414] text-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/#blog"
          className="inline-flex items-center text-sm font-semibold text-purple-300 hover:text-pink-300 transition-colors duration-300 mb-8"
        >
          ← Back to Blogs
        </Link>

        <header className="mb-10 border-b border-gray-700 pb-6">
          <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
            <span className="text-purple-300">{post.date}</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400">{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-xs font-medium text-purple-300 rounded-full px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <article className="space-y-6 text-gray-300 text-base sm:text-lg leading-8">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </div>
    </section>
  );
};

export default BlogDetails;
