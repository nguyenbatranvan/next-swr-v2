import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";

function MainLayout({children}) {

    return (<>

        <Navbar/>
        <Sidebar/>
        {children}
    </>)
}

export default MainLayout;