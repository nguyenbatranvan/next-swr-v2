import {useRouter} from "next/router";
import {useCookies} from "react-cookie";

function Navbar() {
    const router= useRouter();
    const [cookies, setCookie,removeCookie] = useCookies();
    function logout(){
        removeCookie('token',{
            path:'/'
        })
        router.push('/login')
    }
    return (<><div className={"fixed w-full h-16 bg-white shadow-base flex items-center"}>
        <div className={"w-250 h-full p-6 bg-black-400 flex justify-center"}>
            <img src={"/images/logo-menu.png"} className={"h-full w-5/12 object-contain"}/>
        </div>
        <div className={"p-6 flex items-center"}>
            <div className={"text-black-100 font-bold text-xs"}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </div>
            <div className={"ml-3 relative text-black-100"}>
                <div className={"absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-4 "}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input type={"text"} placeholder={"search..."} className={"text-xs px-8 h-10 text-lg bg-input border-black-100 rounded-3xl"}/>
            </div>
        </div>
    </div></>)
}

export default Navbar;