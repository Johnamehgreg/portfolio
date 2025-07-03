const About = () => {
  return (
    <div name='about' className='w-full h-auto my-10 text-white about_component about'>
      <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>
        <div className='pb-8' data-aos='slide-right' data-aos-delay='50' data-aos-duration='1000'>
          <p className='inline text-4xl font-bold text-black border-b-4 border-gray-500 dark:text-white color-red'>
            About Me
          </p>
        </div>

        <div>
          <p
            data-aos='zoom-in'
            data-aos-delay='30'
            data-aos-duration='700'
            className='mt-5 text-lg text-black dark:text-white'
          >
            Hi there, I'm <span style={{ color: 'tomato' }}>John Ameh</span> - a Front-End Engineer.
            I develop beautiful and user-friendly websites. I like what I’m currently doing (Web
            Development! and App Development!…).
          </p>

          <br />
          <p
            data-aos='zoom-out'
            data-aos-delay='30'
            data-aos-duration='500'
            className='text-lg text-black dark:text-white'
          >
            I am a highly skilled and experienced React.js and React Native developer with hands-on
            expertise in building robust and scalable applications. I am proficient in leveraging
            the latest technologies and frameworks to deliver efficient and user-friendly software
            solutions. My strengths lie in mobile app development, front-end web development, and
            responsive design. Additionally, I possess excellent problem-solving skills and have a
            proven ability to work effectively in fast-paced, collaborative environments.
          </p>
          <br />

          <p
            data-aos='zoom-out'
            data-aos-delay='30'
            data-aos-duration='500'
            className='text-lg text-black dark:text-white'
          >
            Talking about my personality, I describe myself as a{' '}
            <span style={{ color: 'teal' }}>result-oriented </span> person, great{' '}
            <span style={{ color: 'teal' }}> team player </span> yet competent solo worker and an{' '}
            <span style={{ color: 'teal' }}>efficient </span> individual. You can image me as a{' '}
            <span style={{ color: 'teal' }}>diligent</span> and{' '}
            <span style={{ color: 'teal' }}>easygoing</span> person with a good sense of humour.
            <br /> <br />I enjoy designing new stuff and learning new Technologies. If I'm not on my
            computer, am travelling, capturing moments or playing musical instruments.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
