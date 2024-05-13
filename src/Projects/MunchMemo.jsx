import MunchMemoLogo from '../../public/munchmemo.png';

function MunchMemo() {
    return (
        <>
            <div className='grid grid-cols-3 bg-slate-300 rounded-md border-slate-500 border-2'>
            <a href='https://munch-memo.duckdns.org/'><img className='border-gray-500 rounded border-2 h-full col-span-1' src={MunchMemoLogo}/></a>
                <div className=' col-span-2 text-center p-2 rounded'>
                <div className="bg-slate-50 h-40 rounded-md border p-4 m-2 overflow-auto">
                    <p>As my capstone project for Code Platoon&apos;s full-stack software development bootcamp and my first ever full-stack application, I created Munch Memo. Munch Memo is an educational project designed to allow users to keep track of how many calories they are consuming. It uses <a className='text-blue-900 hover:text-red-900 underline' href='https://platform.fatsecret.com/platform-api'>FatSecret API</a> to keep track of the calories, and <a className='text-blue-900 hover:text-red-900 underline' href='https://platform.openai.com/'>OpenAI API</a> to allow users to generate meals based on a desired calorie count. It also allows users to view the meals of other users and to comment on these meals.
                        <br/>
                        <br/>
                        In hindsight, I recognize the need for better endpoint management within the backend of my project. While the architecture efficiently maps multiple API requests across nested components to load data within a single page, the current setup unfortunately results in sluggish loading times. Moving forward, I aim to optimize endpoint utilization to enhance the overall performance and user experience.
                    </p>
                    </div>
                     <p>For more information, check out the GitHub repo: <a className='text-blue-900 hover:text-red-900 underline' href='https://github.com/Jordan-Edgington/cp-personal-proj'>Munch Memo</a></p>
                </div>
            </div>
        </>
    )}
    export default MunchMemo;