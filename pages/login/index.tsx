import LoginComponent from "@/components/login/login-component";
import SEO from "@/components/seo";

function Login({url}) {
    return (<>
        <SEO title={"Login"} description={"Login to ecommerce"} currentURL={url} image={'/logo.png'} siteName={url}/>
        <LoginComponent/>
    </>)
}

export async function getServerSideProps({req}) {
    return {
        props: {
            url: req?.headers?.host,
        },
    }
}

export default Login;