import * as React from "react";
import { graphql, Link } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import * as styles from "../styles/index.module.css";

type Post = {
  frontmatter: {
    title: string;
    date: string;
  };
  excerpt: string;
  fields: {
    slug: string;
  };
};

type DataProps = {
  allMarkdownRemark: {
    nodes: Post[];
  };
};

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  return (
    <main className={styles.container}>
      <h1>Gatsby Blog</h1>
      <ul>
        {data.allMarkdownRemark.nodes.map((post, i) => (
          <li key={i} className={styles.post}>
            <Link to={post.fields.slug} className={styles.link}>
              <h2>{post.frontmatter.title}</h2>
              <p>{post.frontmatter.date}</p>
              <p>{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
        }
        excerpt
        fields {
          slug
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home Page</title>;

export default IndexPage;
