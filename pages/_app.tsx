import '@/styles/globals.css';
import {IConfig} from "@/models/config/i-config";
import DocLayout from "components/layout/doc-layout";
import SsrService from "service/ssr/ssr-service";
import {SWRConfig} from 'swr'
import {fetcher, middleWareHeaders} from "utils/service-swr-util";

function MyApp({Component, pageProps}) {
    const Layout = Component.Layout || DocLayout;
    const config: IConfig = pageProps.config;
    console.log('coinffig: ', config);
    return <SWRConfig value={{
        revalidateOnFocus: false,
        fetcher: fetcher,
        use: [middleWareHeaders],
        dedupingInterval: 100000,
        errorRetryCount: 1
    }}>
        {pageProps.config &&
            <Layout>
                <Component {...pageProps} />
            </Layout>
        }
    </SWRConfig>;
}

MyApp.getInitialProps = async ({ctx}) => {
    let config = {};
    console.log('ctxx: ',ctx.req.headers.host)
    if (ctx?.req?.headers?.host)
        config = await SsrService.get<IConfig>(ctx?.req?.headers?.host + '/' + 'config.json', true);
    return {
        pageProps: {
            config: config
        },
    }
}


export default MyApp
