import {  Outlet } from "react-router-dom"
import AppNav from "./AppNav"
import Footer from "./Footer"
import Logo from "./Logo"
import styles from "./Sidebar.module.css"
function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />
            <Outlet />
            <Footer>
                <p className={styles.copyright}>
                    &copy; Copyright {new Date().getFullYear()}
                    WorldWise Inc
                </p>

            </Footer>
            
        </div>
    )
}

export default Sidebar
