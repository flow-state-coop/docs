import { visit } from "unist-util-visit";

export default function plugin() {
  const transformer = async (ast) => {
    visit(ast, "text", (node, index, parent) => {
      if (node.value !== "!(") {
        return;
      }

      let newNode = {};

      if (
        parent.children[1].url.includes("x.com") ||
        parent.children[1].url.includes("twitter.com")
      ) {
        newNode = {
          type: "blockquote",
          data: {
            hName: "blockquote",
            hProperties: {
              class: "twitter-tweet",
            },
          },
          children: [
            {
              type: "link",
              title: null,
              url: parent.children[1].url,
              children: [{ type: "text", value: "" }],
              position: parent.children[1].position,
            },
          ],
        };
      } else {
        newNode = {
          type: "iframe",
          data: {
            hName: "iframe",
            hProperties: {
              src: parent.children[1].url,
              width: "100%",
              style: { "aspect-ratio": "16/9" },
              allowfullscreen: true,
              frameborder: "0",
            },
          },
        };
      }

      parent.children.splice(index, 1, newNode);
      parent.children.pop();
      parent.children.pop();
    });
  };

  return transformer;
}
