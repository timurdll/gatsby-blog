import * as React from "react";
import { graphql, HeadFC, PageProps, Link } from "gatsby";
import { useSortedPosts } from "../hooks/useSortedPosts";
import * as styles from "../styles/index.module.css";
import type { IndexPageData } from "../types";
import { PostList } from "../components/PostList";

const IndexPage: React.FC<PageProps<IndexPageData>> = ({ data }) => {
  const { sortedPosts, asc, toggleOrder } = useSortedPosts(
    data.allMarkdownRemark.nodes
  );

  if (sortedPosts.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <main className={styles.container}>
      <h1>Gatsby Blog</h1>
      <button onClick={toggleOrder} className={styles.sortButton}>
        Sort by date: {asc ? "Ascending" : "Descending"}
      </button>
      <PostList posts={sortedPosts} />
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
