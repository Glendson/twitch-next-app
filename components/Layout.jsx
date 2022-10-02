import React from "react"
import Main from "./Main"
import SideMenu from "./SideMenu"

const Layout = () => {
    return (
        <div className="flex pt-[60px] w-full">
            <SideMenu />
            <Main />
        </div>
    )
}

export default Layout