import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const contentDirectory = path.join(process.cwd(), "content");

export const getMdxContent = async () => {
  const fileNames = fs.readdirSync(contentDirectory);
  const allMdxData = fileNames.map((fileName) => {
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: fileName.replace(/\.mdx$/, ""),
      frontmatter: data,
      content,
    };
  });

  return allMdxData;
};