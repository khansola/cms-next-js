import { useState } from "react";
import burger from '@/components/assets/image/dehaze.svg';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";


const MobileNavigation = () => {

  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)

  return (
    <div>
      <div>
        <Image src={burger}
          height={87}
          width={81}
          alt="sehijra"
          className='md:hidden' onClick={() => { setMenu(!menu) }}
        />
      </div>
      {menu && (
        <div className="absolute top-[3.5rem] left-[0] bg-white w-full rounded-b-xl" >
          <ul className="p-1">
            <Link className="block hover:text-cyan-400 p-3" href="/" >asd</Link>
            <div>
              <div>
              <Link className="block hover:text-cyan-400 p-3" href="/" >asd</Link>
              <Button onClick={() => { setOpen(!open) }} className="mt-0.5 hover:text-cyan-400 cursor-pointer "/>
              </div> 
              {open && (
                <ul className="absolute px-1 w-full rounded-xl bg-slate-600">
                <Link className="block hover:text-cyan-400 p-3" href="/about" >asd</Link>
                <Link className="block hover:text-cyan-400 p-3" href="/about" >asd</Link>
                <Link className="block hover:text-cyan-400 p-3" href="/about" >asd</Link>
                </ul>
              )}
            </div>
            <Link className="block hover:text-cyan-400 p-3" href="/about" >asd</Link>
            <Link className="block hover:text-cyan-400 p-3" href="/about" >asd</Link>
          </ul>
        </div>
      )}
    </div>
  )
}

export default MobileNavigation;


// const MobileMenu = () => {
//   return (
//     <div className="block lg:hidden">
//       <button className="flex items-center px-3 py-2 border rounded text-red-200 border-purple-400 hover:text-white hover:border-white">
//         <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
//       </button>
//     </div>
//   );
// }


// import { useState } from "react";
// import DehazeIcon from '@mui/icons-material/Dehaze';
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@mui/material";

// const MobileMenu = () => {

//   const [menu, setMenu] = useState(false)

//   return (
//     <div>
//       <div>
//         <DehazeIcon fontSize='large' className="md:hidden" onClick={() => { setMenu(!menu) }} />
//       </div>
//       {menu && (
//         <div className="absolute top-[3.5rem] left-[0] bg-white w-full rounded-b-xl min-h-full" >
//           <ul className="p-1 flex flex-col items-center justify-center">
//             <Link className="block hover:text-cyan-400 p-3" href="/" >asd</Link>
//             <Link className="block hover:text-cyan-400 p-3" href="/" >asd</Link>
//             <Link className="block hover:text-cyan-400 p-3" href="/" >asd</Link>
//             <Link className="block hover:text-cyan-400 p-3" href="/" >asd</Link>
//           </ul>
//         </div>
//       )}
//     </div>
//   )
// }

// export default MobileMenu;


// 