import {useRouter} from "next/router";
import {useCookies} from "react-cookie";

function LoginComponent() {
    const router = useRouter();
    const [cookies, setCookie] = useCookies();

    function login() {
        setCookie('token', 'vannt@stageit.app', {
            path: '/',
            maxAge: 1000000
        })
        router.push('/?limit=10&skip=0');
    }

    return (<div className={"w-full flex justify-center items-center h-full"}>
        <div className={"w-4/12 shadow-base rounded bg-white"}>
            <div className={"flex justify-between "}>
                <div className={"w-7/12 bg-bs-primary-bg p-6 rounded-tl"}>
                    <p className={"text-xl text-blue font-bold mb-3"}>Welcome Back !</p>
                    <p className={"text-sm text-blue"}>Sign in to continue to Skote.</p>
                </div>
                <div className={"w-5/12 bg-bs-primary-bg rounded-tr"}>
                    <img src={'/images/img.png'} className={"object-contain w-full h-32"}/>
                </div>
            </div>
            <div
                className={"rounded-full ml-6 -mt-26px relative m-26 flex p-6 bg-base w-20 h-20 justify-center items-center"}>
                <img src={'/images/logo.png'} className={"w-9 h-9 "}/>
            </div>
            <div className={"p-6 mt-2"}>
                <div className={"mb-5"}>
                    <p className={"font-bold text-sm text-black-200 mb-2"}>Username</p>
                    <input type={"text"} placeholder={"enter username"}
                           className={"text-black-200 border border-black-100 px-3 w-full h-10 rounded"}/>
                </div>
                <div>
                    <p className={"font-bold text-sm text-black-200 mb-2"}>Password</p>
                    <input type={"password"} placeholder={"enter password"}
                           className={"text-black-200 border border-black-100 px-3 w-full h-10 rounded"}/>
                </div>
            </div>
            <div className={"py-6 px-6"}>
                <button onClick={login} className={"w-full  bg-blue text-white text-sm h-10 rounded"}>
                    Log in
                </button>
            </div>
        </div>
    </div>);
}

export default LoginComponent;