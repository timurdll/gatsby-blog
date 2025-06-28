export interface Post {
  frontmatter: {
    title: string;
    date: string;
  };
  excerpt: string;
  fields: {
    slug: string;
  };
}

export interface PostTemplateData {
  markdownRemark: {
    frontmatter: {
      title: string;
      date: string;
    };
    html: string;
  };
}

export interface IndexPageData {
  allMarkdownRemark: {
    nodes: Post[];
  };
}
