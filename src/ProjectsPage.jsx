import { ScrollArea } from "@/components/ui/scroll-area"


function Projects() {
    return (
        <div className='h-screen w-2/3 flex flex-col justify-center items-center'>
            <div className='grid grid-cols-3 bg-slate-50 rounded-md'>
                <div className='col-span-2 text-center p-2 rounded'>
                <ScrollArea className="h-40 rounded-md border p-4">
                    <p>The first real project I ever worked on was for my father-in-law's Whiskey company: Hayner Distilling. The state of Ohio provides statewide monthy liquor sales data, but in 3 separate csv files containing approximately 800,000 entries of product, sale, and store information. I created a python script that will parse through these 3 files, and create a new file containing specifically the Hayner sales in an easy-to-understand format. 
                        <br/>
                        <br/>
                    This project taught me about using the CSV library in Python, and taught me a lesson in Refactoring. Throughout the creation process, I made many changes building off examples of extra/redundant code that could have been refactored as I went along. Because I did not do this, the end product is very hard to understand and troubleshoot. If I ever need to revisit this project, I would like to re-factor to simplify the process to be much easier to understand and manipulate.
                    </p>
                    </ScrollArea>
                    <a href='https://github.com/Jordan-Edgington/hayner/tree/main/oh_liquor_filter_hayner' className='text-blue-800'> Link to Hayner Script Repo</a>
                </div>
                <div className='bg-blue-900 rounded-md'>Logo Placeholder</div>
            </div>
            <p className='font-mono size-3xl text-center'><br/>More Projects coming soon...</p>

            
        </div>
    )}
    export default Projects;