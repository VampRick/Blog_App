import Sidebar from '@/components/sidebar'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


export default function Layout({children}) {
  return (
    <>
    <div className='flex'>
        <ToastContainer theme='dark'/>
    <Sidebar/>
    <div className='flex flex-col w-full '>
        <div className='flex items-center justify-center text-2xl font-bold bg-slate-200 p-4 border border-b-2 border-black'>
            <h1>Admin Panel</h1>
        </div>

    
        {children}
        </div>
    </div>
    </>
  )
}

