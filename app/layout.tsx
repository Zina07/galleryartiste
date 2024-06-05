import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';


// import NavGallery from "./components/navGallery/page";
//import baseBouton from "./components/baseBouton/page";
import Footer from "./components/footer"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head></head>
       <body className={inter.className}>
        
          <section>
          <nav className="bg-white rounded-lg">
         
            <h1 className="bg-grey rounded-lg">ici futur Nav</h1>
          </nav>
       </section>

          

         
               {/* <BaseBouton/>  */}
              
          {children}
         
       
          <Footer/> 
         </body>
        
    </html>
  );
}
