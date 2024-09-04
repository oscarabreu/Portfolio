// components/TableOfContents.js
import React, { useEffect, useState } from 'react';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import rehypeToc from 'rehype-toc';

const generateTOC = async (content) => {
  const file = await unified()
    .use(rehypeParse, { fragment: true }) // Ensure we use the parser
    .use(rehypeToc)
    .use(rehypeStringify)
    .process(content);

  return String(file);
};

const TableOfContents = ({ content }) => {
  const [toc, setToc] = useState('');

  useEffect(() => {
    (async () => {
      const generatedToc = await generateTOC(content);
      setToc(generatedToc);
    })();
  }, [content]);

  return <div dangerouslySetInnerHTML={{ __html: toc }} />;
};

export default TableOfContents;