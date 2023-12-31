import PropTypes from 'prop-types';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs';

const JsonHighlighter = (props) => {
  return (
    <SyntaxHighlighter language="json" style={vs}>
      {props.code}
    </SyntaxHighlighter>
  );
};

JsonHighlighter.propTypes = {
  code: PropTypes.string.isRequired,
};

export default JsonHighlighter;
