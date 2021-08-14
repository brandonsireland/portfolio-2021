import React, { Fragment } from 'react';

const Code: React.FC = ({ children }) => (
    <Fragment>
        <pre>
            <code>{children}</code>
        </pre>
        <style jsx>{`
            pre {
                background: #f7f7f7;
                padding: 20px;
                white-space: pre-wrap;
                overflow: hidden;
            }

            code {
                font-family: SFMono-Regular, Menlo, Monaco, Consolas,
                    'Liberation Mono', 'Courier New', monospace;
                font-size: 14px;
            }
        `}</style>
    </Fragment>
);

export default Code;
