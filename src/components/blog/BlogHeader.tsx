import React from 'react';

const BlogHeader: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl text-left sm:text-center">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
        Latest from Our Blog
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Stay updated with the latest insights, tutorials, and best practices in software development,
        cloud computing, and digital transformation.
      </p>
    </div>
  );
};

export default BlogHeader;
