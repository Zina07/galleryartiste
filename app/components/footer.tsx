'use client';
// import Image from 'next/image'
import { useState, useEffect } from 'react'

type footer ="footer";

// A revoir avec H.
// const url = new URL (`https://www.aasf.ovh/${src})`)
//    url.searchParams.set('format', 'auto')
//    url.searchParams.set('width', width.toString())
//   url.searchParams.set('quality', (quality || 75).toString())
  

export default function Footer() {
    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
      setIsClient(true)
    }, [])
    return (
<>  
  

<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-2 ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        <h1>{isClient ? 'voici mon footer aptès 2eme lecture'  : 'lecture de la structure sans mes info'}</h1> 
            <a href="https://www.aasf.ovh/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                
                <img src="/img/images-logo.png" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AASF</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Artiste</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Gallerystyle1</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.aasf.ovh/" className="hover:underline">AASF™</a>. All Rights Reserved.</span>
    </div>
</footer>



 
  </>

 )
    

}
