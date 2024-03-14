function HomePage() {
    return (
        <div className='h-full w-full flex flex-col align-middle justify-center items-center  '>
            <img src='./profile.jpg' className='size-1/3 md:size-1/6 rounded-full m-4'/>
            <p className='text-4xl md:text-6xl'>Jordan Edgington</p>
            <p className='text-2xl md:text-3xl mt-4'>Full-Stack Software Developer</p>
            <p className='text-lg md:text-1xl mt-4'>I make things on the internet.</p>
            <p className='text-lg md:text-1xl text-blue-800 hover:text-red-900'><a href='mailto:jordan.edgington.dev@gmail.com'>jordan.edgington.dev@gmail.com</a></p>

      </div>
    )}

    export default HomePage;