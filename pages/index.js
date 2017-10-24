import Layout from '../components/Layout';
import Link from 'next/link';

import { getGists, getProfile } from '../lib/api';

export default () =>
  <Layout>
    <p>This is the index page</p>
  </Layout>;
