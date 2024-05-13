import DiscloneLogo from '../../public/disclone.jpg';

function Disclone() {
    return (
        <>
            <div className='grid grid-cols-3 max-h-255 bg-slate-300 rounded-md border-slate-500 border-2'>
                <div className='col-span-2 text-center p-2 rounded'>
                <div className="bg-slate-50 h-40 rounded-md border p-4 m-2 overflow-auto">
                    <p>Disclone was created as a group project to practice writing software as part of a team. During this project, I fulfilled the role of the Project Manager and a front-end developer. We created Disclone, an live chat app with a similar structure to Discord.
                        <br/>
                        <br/>
                        This project was a way for our group to implement many new concepts that we had little experience working with. Creating our own asnychronous application with Django Channels and Redis was a challenge, but we gained a lot of knowledge doing so.
                    </p>
                    </div>
                     <p>For more information, check out our GitHub repo: <a className='text-blue-900 hover:text-red-900 underline' href='https://github.com/CP-DISCLONE/disclone'>Disclone</a></p>
                </div>
                <div className='col-span-1 flex justify-center items-center bg-gray-800'>
                <a href='disclone.duckdns.org'><img className='border-gray-500 rounded border-2 h-48' src={DiscloneLogo}/></a>
                </div>
            </div>
        </>
    )}
    export default Disclone;