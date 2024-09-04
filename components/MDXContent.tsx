// components/MDXContent.tsx
"use client";

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import React from 'react';
import MDXComponents from './MDXComponents';

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

const MDXContent: React.FC<MDXContentProps> = ({ source }) => {
  return <MDXRemote {...source} components={MDXComponents} />;
};

export default MDXContent;