import styled from 'styled-components';
import moment from 'moment';

const File = styled.div`
  pre {
    font-size: 12px;
    background: #eee;
    padding: 1rem;
    width: 700px;
    height: 100px;
    overflow: hidden;
  }

  a {
    color: #000000;
    text-decoration: none;
  }
`;

export default ({ filename, gist: { files, html_url } }) =>
<File>
  <h3>{moment().toString()}</h3>
  <h4>{filename}</h4>
  <a href={html_url} target="_blank">
    <code>
      <pre>
        {files[filename].content}
      </pre>
    </code>
  </a>
</File>
