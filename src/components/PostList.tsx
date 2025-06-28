import * as React from "react";
import { Link } from "gatsby";
import type { Post } from "../types";
import * as styles from "../styles/index.module.css";

export const PostList: React.FC<{ posts: Post[] }> = React.memo(({ posts }) => {
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i} className={styles.post}>
          <Link to={post.fields.slug} className={styles.link}>
            <h2>{post.frontmatter.title}</h2>
            <p>{post.frontmatter.date}</p>
            <p>{post.excerpt}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
});
