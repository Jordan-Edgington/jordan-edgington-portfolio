import { Button } from '@/components/ui/button'
import { Outlet, Link } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"



function App() {


  return (
    <div className='flex flex-col align-middle justify-center items-center'>
      <div className='bg-slate-800 h-16 w-full flex align-middle justify-center items-center '>
        <Link to='/jordan-edgington-portfolio/'><Button className='ml-4 mr-4 md:ml-10 md:mr-10 bg-slate-800 text-lg md:text-xl font-serif'>Home</Button></Link>
        <Link to='about/'><Button className='ml-4 mr-4 md:ml-10 md:mr-10 bg-slate-800 text-lg md:text-xl font-serif'>About</Button></Link>
        <Link to='projects/'><Button className='ml-4 mr-4 md:ml-10 md:mr-10 bg-slate-800 text-lg md:text-xl font-serif'>Projects</Button></Link>
        <NavigationMenu className='bg-slate-800 ml-4 mr-4 md:ml-10 md:mr-10'>
          <NavigationMenuList >
            <NavigationMenuItem >
              <NavigationMenuTrigger className='border-black border-solid border-2'>My Links</NavigationMenuTrigger>
              <NavigationMenuContent className='flex flex-col align-middle justify-center items-center'>
                <a className='mt-1 mb-1 ml-4 mr-4 hover:text-red-900' href='https://www.linkedin.com/in/jordanedgington/'>LinkedIN</a>
                <a className='mt-1 mb-1 ml-4 mr-4 hover:text-red-900' href='https://github.com/Jordan-Edgington'>GitHub</a>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

      </div>
      <Outlet/>
      </div>
  )
}

export default App
