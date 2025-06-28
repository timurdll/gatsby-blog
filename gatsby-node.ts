import path from "path";
import type { GatsbyNode } from "gatsby";

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug =
      "/posts/" + path.basename(node.fileAbsolutePath as string, ".md");
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const result = await graphql<{
    allMarkdownRemark: {
      nodes: {
        fields: { slug: string };
      }[];
    };
  }>(`
    {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.data) {
    result.data.allMarkdownRemark.nodes.forEach((node) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/post.tsx`),
        context: {
          slug: node.fields.slug,
        },
      });
    });
  }
};
