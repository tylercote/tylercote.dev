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

      <main className={'container mx-auto flex flex-col justify-center items-center'}>
        
        <Image style={{ borderRadius: '30px' }} layout='fixed' objectFit="cover" src="/profile-photo.jpeg" alt="Me" width={150} height={150} />

        <div className='flex flex-col align-center justify-center'>
          <h1 className="text-center mt-3">
            Tyler Cote
          </h1>

          <h3 className='text-center text-gray-500 mb-16'>I build quality software.</h3>

          <p className='text-center text-lg max-w-xl mb-8 px-4'>
           I&apos;m a full-stack developer with frontend, backend, and mobile development experience.  Currently living in Boston, MA and building a&nbsp;
           <a className='text-green-600 hover:underline' href='https://pockets.tech/ios' _target='blank'>personal finance app</a>
           &nbsp;for the next generation.
          </p>

          <p className='text-center text-lg max-w-xl mb-8 px-4'>
           Some tools I commonly work with include Java, Node.js, TypeScript, React, React Native, Angular, Python, MySQL, Postgres, and GraphQL.
          </p>
        </div>
      </main>
    </Layout>
  )
}
