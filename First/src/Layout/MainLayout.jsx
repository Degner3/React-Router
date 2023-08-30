import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import style from "./MainLayout.module.scss"






export const MainLayout = () => {


    return (
        <main className={style.layout}>
            <Header/>
                <Outlet/>
            <Footer/>
        </main>
    )
}