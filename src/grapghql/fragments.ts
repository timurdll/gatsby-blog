import { graphql } from "gatsby";

export const PostListFields = graphql`
  fragment PostListFields on MarkdownRemark {
    frontmatter {
      title
      date(formatString: "YYYY-MM-DD")
    }
    excerpt
    fields {
      slug
    }
  }
`;

export const PostTemplateFields = graphql`
  fragment PostTemplateFields on MarkdownRemark {
    frontmatter {
      title
      date(formatString: "YYYY-MM-DD")
    }
    html
  }
`;
