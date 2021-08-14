import React from 'react';
import Code from '../Code';

const BeautifyJSON: React.FC = ({ children: json }) => (
    <Code>{JSON.stringify(json, null, 2)}</Code>
);

export default BeautifyJSON;
