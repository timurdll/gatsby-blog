import * as React from "react";
import { graphql, Link } from "gatsby";
import type { PageProps } from "gatsby";
import * as styles from "../styles/post.module.css";
import type { PostTemplateData } from "../types";

const PostTemplate: React.FC<PageProps<PostTemplateData>> = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <main className={styles.container}>
      <Link to="/" className={styles.backLink}>
        ← Back to posts
      </Link>
      <h1 className={styles.title}>{post.frontmatter.title}</h1>
      <p className={styles.date}>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </main>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...PostTemplateFields
    }
  }
`;

export default PostTemplate;
