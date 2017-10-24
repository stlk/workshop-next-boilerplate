import Layout from '../components/Layout';
import Link from 'next/link';

import { getGists, getProfile } from '../lib/api';
import Profile from '../components/Profile'

const Index = ({profile, gists}) =>
  <Layout>
    <Profile profile={profile} />
    <ul>
      {gists.map((gist) =>
        <li key={gist.id}>
          <Link as={`/gist/${gist.id}`} href={`/gist?id=${gist.id}`}>
            <a>{Object.keys(gist.files)[0]}</a>
          </Link>
        </li>
      )}
    </ul>
  </Layout>;

Index.getInitialProps = async () => {
  const profile = await getProfile('stlk');
  const gists = await getGists('stlk');

  console.log('getInitialProps called fetched ', gists.length);

  return {
    profile,
    gists
  }
}

export default Index;
