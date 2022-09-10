import { FaGithub, FaEnvelope, FaTwitter, FaInstagram, FaSpotify, FaApple, FaLinkedin } from 'react-icons/fa';

export default function Layout({ children }) {
  return (
    <div className={'min-h-screen flex flex-col align-center justify-between'}>
      <nav></nav>
      {children}
      <footer className={'flex flex-col items-center justify-center'}>

        <div className={'flex items-center justify-center mb-12'}>
          <a href='mailto:tyler16cote@gmail.com' target={'_blank'} rel="noreferrer" className='text-center w-34 sm:w-60 mr-8 hover:scale-105 rounded-lg px-8 py-4 color-white font-bold text-white text-lg bg-green-500'>Email</a>
          <a href='' className='text-center w-34 sm:w-60 hover:scale-105 rounded-lg px-8 py-4 color-white font-bold text-white text-lg bg-blue-500'>Meet</a>
        </div>

        <div className={'flex items-center justify-center '}>
          <a >
            <FaEnvelope size={30} className={'text-gray-600 hover:text-gray-400 hover:scale-110 mr-4'} />
          </a>
          <a href='https://www.linkedin.com/in/tyler-cote/' target={'_blank'} rel="noreferrer">
            <FaLinkedin size={30} className={'text-gray-600 hover:text-blue-700 hover:scale-110 mr-4'} />
          </a>
          <a href='https://github.com/tylercote' target={'_blank'} rel="noreferrer">
            <FaGithub size={30} className={'text-gray-600 hover:text-black hover:scale-110 mr-4'} />
          </a>
          <a href='https://apps.apple.com/us/app/pockets-budget-finance/id1554290738' target={'_blank'} rel="noreferrer">
            <FaApple size={30} className={'text-gray-600 hover:text-gray-400 hover:scale-110 mr-4'} />
          </a>
          <a href='https://open.spotify.com/user/1239349331' target={'_blank'} rel="noreferrer">
            <FaSpotify size={30} className={'text-gray-600 hover:text-green-600 hover:scale-110 mr-4'} />
          </a>
          {/* <a href='https://twitter.com/TylerCote4' target={'_blank'} rel="noreferrer">
            <FaTwitter size={30} className={'text-gray-600 hover:text-blue-400 hover:scale-110 mr-4'} />
          </a> */}
          <a href='https://www.instagram.com/tyler_cote/' target={'_blank'} rel="noreferrer">
            <FaInstagram size={30} className={'text-gray-600 hover:text-purple-600 hover:scale-110 '} />
          </a>
        </div>
        <span className={'text-sm py-5'}>© {new Date().getFullYear()} Tyler Cote</span>
      </footer>
    </div>
  );
}