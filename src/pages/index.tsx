import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { useSortedPosts, type Post } from "../hooks/useSortedPosts";
import { PostList } from "../components/PostList";
import * as styles from "../styles/index.module.css";

type DataProps = {
  allMarkdownRemark: { nodes: Post[] };
};

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const { sortedPosts, asc, toggleOrder } = useSortedPosts(
    data.allMarkdownRemark.nodes
  );

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
