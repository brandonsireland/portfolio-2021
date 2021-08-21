import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

// Types
import { MarkdownProps } from './markdown.types';

const Markdown: React.FC<MarkdownProps> = ({ content }) => (
    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
);

export default Markdown;
