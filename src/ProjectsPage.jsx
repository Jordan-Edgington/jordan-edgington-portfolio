import Disclone from "./Projects/Disclone";
import Hayner from "./Projects/Hayner";
import MunchMemo from "./Projects/MunchMemo";

function Projects() {
    return (
        <div className='h-full w-2/3 flex flex-col justify-center items-center mt-2 pt-10 pb-4'>
            <Disclone />
            <MunchMemo />
            <Hayner />
            <p className='font-mono size-3xl text-center'><br/>More Projects coming soon...</p>

            
        </div>
    )}
    export default Projects;