import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { blogList } from '@/public/data/blogList';
import Layout from '@/components/Layout';

interface FrontMatter {
  title: string;
  date: string;
  category: string;
}

interface PostPageProps {
  source: MDXRemoteSerializeResult;
  frontMatter: FrontMatter;
}

const PostPage: React.FC<PostPageProps> = ({ source, frontMatter }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="py-8">
        <h1 className="text-4xl font-bold">{frontMatter.title}</h1>
        <p className="text-sm text-gray-500">
          {frontMatter.date} - {frontMatter.category}
        </p>
        <div className="prose max-w-none">
          <MDXRemote {...source} />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogList.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const blog = blogList.find((blog) => blog.slug === slug);

  if (!blog) {
    return {
      notFound: true,
    };
  }

  const markdownWithMeta = fs.readFileSync(
    path.join('content', `${slug}.mdx`),
    'utf-8'
  );
  const { content, data } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data as FrontMatter,
    },
  };
};

export default PostPage;