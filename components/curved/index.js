import s from "./style.module.scss"
import Nav from "../nav"
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation";
//import { UNSTABLE_REVALIDATE_RENAME_ERROR } from "next/dist/lib/constants";

export default function Home() {

    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if(isActive) setIsActive(false)
         
    }, [pathname])


    return(
        <>
    <div className={s.main}>
       <div className={s.header}>     

        <div onClick={() => {setIsActive(!isActive)}} className={s.button}>
            <div className={`${s.burger} ${isActive ? s.burgerActive : ""}`}></div>
        </div>
        </div>
        </div>

        <AnimatePresence mode="wait">
            {isActive && <Nav />}
        </AnimatePresence>
        
        </>
    )

}