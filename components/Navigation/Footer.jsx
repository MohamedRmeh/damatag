import Link from "next/link"


const Footer = () => {
  return (
    <footer className='p-5 border-t border-slate-300 flex justify-center mt-8'>
     <Link href='/' className='text-xl font-semibold text-slate-800'>Damtag Task</Link>
    </footer>
  )
}

export default Footer