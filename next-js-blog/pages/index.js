import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>You don't even know</p>
        <p>you just{' '}
          <Link href="/posts/first-post">
            <a>don't</a>
          </Link></p>
      </section>
    </Layout>
  )
}
