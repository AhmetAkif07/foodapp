import Logo from "../ui/Logo"
import { FaUserAlt, FaSearch, FaShoppingCart } from "react-icons/fa"
import { useState } from "react"
import Search from "../ui/Search"
import { GiHamburgerMenu } from "react-icons/Gi"
import { AiOutlineClose } from "react-icons/Ai"
import { useRouter } from "next/router"
import Link from "next/link"

const Header = () => {
  const [IsSearchModal, setIsSearchModal] = useState(false);
  const [IsBurgerModal, setIsBurgerModal] = useState(false);
  const router = useRouter();

  return (
    <div className={`h-[5rem] z-40 relative ${router.asPath === "/" ? "bg-transparent" : "bg-secondary"}`} >
      <div className="container mx-auto text-white flex justify-between h-full items-center ">
        <Logo  />
        <nav 
        className={`sm:static absolute sm:w-auto sm:h-auto
        top-0 left-0  h-screen w-full sm:flex hidden 
         sm:text-white sm:bg-transparent bg-white text-black 
         ${IsBurgerModal === true && " !grid place-content-center"}`} 
         >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="px-[0.3rem] py-[1.25rem] font-Roboto uppercase hover:text-primary cursor-pointer">
              <Link href="/">AnaSayfa</Link>
            </li>
            <li className="px-[0.3rem] py-[1.25rem] font-Roboto uppercase hover:text-primary cursor-pointer">
              <Link href="/menu">Menü</Link>
            </li>
            <li className="px-[0.3rem] py-[1.25rem] font-Roboto uppercase hover:text-primary cursor-pointer">
              <Link href="/about">Hakkımızda</Link>
            </li>
            <li className="px-[0.3rem] py-[1.25rem] font-Roboto uppercase hover:text-primary cursor-pointer">
              <Link href="/reservation">Rezervasyon</Link>
            </li>
          </ul>
          {IsBurgerModal && (
             <button className='absolute top-4 right-4' onClick={() => setIsBurgerModal(false)}>
             <AiOutlineClose size={20} className='hover:text-primary transition-all' />
         </button>
          )}
        </nav>
        <div className="flex gap-x-5 items-center sm:mr-0 mr-3">
          <a className="" href="#">
            <FaUserAlt className="hover:text-primary transition-all" />
          </a>
          <a href="#">
            <FaShoppingCart className="hover:text-primary transition-all" />
          </a> 
          <a href="#">
            <button onClick={() => setIsSearchModal(true)} >
              <FaSearch className="hover:text-primary transition-all" />
            </button>
          </a>
          <a href="#" className="md:inline-block hidden">
            <button className="btn-primary">Order Online</button>
          </a>
          <button>
            <GiHamburgerMenu onClick={() => setIsBurgerModal(true)} className="text-xl sm:hidden inline-block hover:text-primary transition-all" />
          </button>
        </div>
      </div>
      {IsSearchModal && (
        <Search setIsSearchModal={setIsSearchModal} />
      )}
    </div>
  )
}

export default Header