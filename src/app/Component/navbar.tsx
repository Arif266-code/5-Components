import Link from 'next/link';   
export default function Navbar(){
    return(<div>
      <ul className='p-10 ml-2 bg-red-100 text-orange-500 text-center'>
        
       <li className='float-left m-2'><Link href='/'>Home</Link></li>
       
       <li className='float-left m-2'> <Link href='/AboutUs'>About us</Link></li>
         
       
       <li className='float-left m-2'><Link href='/Controllers'>Controllers</Link></li>
        
       <li className='float-left m-2'><Link href='/EHS'>EHS</Link></li>
        
       <li className='float-left m-2'> <Link href='/Help'>Help</Link></li>
       
       <li className='float-left m-2'><Link href='/Software'>Software</Link></li>
        
        </ul>
    </div>)}
    