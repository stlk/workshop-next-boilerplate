import Layout from '../components/Layout';
import Link from 'next/link';

import { getGist } from '../lib/api';
import Profile from '../components/Profile'

import dynamic from 'next/dynamic'

const DynamicFile = dynamic(import('../components/File'))

const Gist = ({gist}) =>
  <Layout>
    <Profile profile={gist.owner} />
    {Object.keys(gist.files).map((filename) =>
      <DynamicFile key={filename} filename={filename} gist={gist} />)}
  </Layout>;

Gist.getInitialProps = async (context) => {
  const id = context.query.id;
  const gist = await getGist(id);

  return {
    gist
  }
}

export default Gist;
