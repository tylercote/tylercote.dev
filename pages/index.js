import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Tyler Cote</title>
        <meta name="description" content="Tyler Cote - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={'container mx-auto flex flex-col justify-center items-center pt-12 sm:pt-14'}>
        
        <Image style={{ borderRadius: '30px' }} layout='fixed' objectFit="cover" src="/profile-photo.jpeg" alt="Me" width={150} height={150} />

        <div className='flex flex-col align-center justify-center'>
          <h1 className="text-5xl sm:text-6xl font-bold text-center mt-8 mb-3">
            Tyler Cote
          </h1>

          <h3 className='text-2xl sm:text-3xl text-center text-gray-500 mb-12'>
            Design. Develop. Iterate.
          </h3>

          <p className='text-center text-lg max-w-xl mb-8 mx-8'>
            I&apos;m a full-stack developer with frontend, backend, and mobile development experience. I&apos;m currently living in Boston, MA and building a&nbsp;
           <a className='text-green-600 underline' href='https://apps.apple.com/us/app/pockets-budget-finance/id1554290738' _target='blank'>personal finance app</a>
           &nbsp;for the next generation.
          </p>

          <p className='text-center text-lg mx-w-xl mb-2 mx-8'>
            Some tools I commonly work with include:
          </p>

          <p className='text-center text-lg max-w-xl mb-8 mx-8'>
           Java, Node.js, TypeScript, React, React Native, Angular, Python, MySQL, Postgres, and GraphQL.
          </p>
        </div>
      </main>
    </Layout>
  )
}
