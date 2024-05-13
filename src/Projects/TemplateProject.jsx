import { ScrollArea } from "@/components/ui/scroll-area"
// import HaynerLogo from '../../public/hayner.jpeg';

function Template() {
    return (
        <>
            <div className='grid grid-cols-3 bg-slate-300 rounded-md'>
                <div className='col-span-2 text-center p-2 rounded'>
                <ScrollArea className="bg-slate-50 h-40 rounded-md border p-4">
                    <p>Body </p>
                    </ScrollArea>
                     <p>Link to GitHub</p>
                </div>
                <img className='border-gray-500 rounded border-2 h-full' src={'placeholder.jpeg'}/>
            </div>
        </>
    )}
    export default Template;