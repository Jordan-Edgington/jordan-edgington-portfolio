import { Skeleton } from "@/components/ui/skeleton"

function Projects() {
    return (
        <div className='h-screen w-2/3 flex flex-col justify-center items-center'>
            <p className='font-mono size-3xl text-center'>This page is in development... The end-goal of this page is to put snippets of my projects on here to get an idea of what I have worked on.</p>
            <div className="flex items-center space-x-4 mt-36">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
            
        </div>
    )}
    export default Projects;