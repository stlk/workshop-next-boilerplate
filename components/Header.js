import Link from 'next/link';
import styled from 'styled-components';
import '../lib/progress'

import Title from './Title';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Anchor = styled(({ href, className, children }) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
)`
  margin-right: 15px;
`;

export default () =>
<Header>
  <Title />
  <nav>
      <Anchor href="/">
        Home
      </Anchor>
      <Anchor href="/about">
        About
      </Anchor>
  </nav>
</Header>
