import * as React from "react";
import { graphql, Link } from "gatsby";
import type { PageProps } from "gatsby";

type PostProps = {
  markdownRemark: {
    frontmatter: {
      title: string;
      date: string;
    };
    html: string;
  };
};

const PostTemplate: React.FC<PageProps<PostProps>> = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <main>
      <Link to="/">← Back to posts</Link>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </main>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

export default PostTemplate;
