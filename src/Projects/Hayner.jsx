import HaynerLogo from '../../public/hayner.jpeg';

function Hayner() {
    return (
        <>
            <div className='grid grid-cols-3 bg-slate-300 rounded-md border-slate-500 border-2'>
                <div className='col-span-2 text-center p-2 rounded'>
                <div className="bg-slate-50 h-40 rounded-md border p-4 m-2 overflow-auto">
                    <p>The first real project I ever worked on was for my father-in-law&apos;s Whiskey company: <a className='text-blue-900 hover:text-red-900 underline' href='https://www.haynerdistilling.com/'>Hayner Distilling</a>. The state of Ohio provides statewide monthy liquor sales data, but in 3 separate csv files containing approximately 800,000 entries of product, sale, and store information. I created a python script that will parse through these 3 files, and create a new file containing specifically the Hayner sales in an easy-to-understand format. 
                        <br/>
                        <br/>
                    This project taught me about using the CSV library in Python, and taught me a lesson in Refactoring. Throughout the creation process, I made many changes building off examples of extra/redundant code that could have been refactored as I went along. Because I did not do this, the end product is very hard to understand and troubleshoot. If I ever need to revisit this project, I would like to re-factor to simplify the process to be much easier to understand and manipulate.
                    </p>
                    </div>
                     <p>My code for this project is available upon request, however, the GitHub repository will remain private to address privacy concerns associated with the provided data.</p>
                </div>
                <a href='https://www.haynerdistilling.com/'><img className='border-gray-500 rounded border-2 h-full' src={HaynerLogo}/></a>
            </div>
        </>
    )}
    export default Hayner;