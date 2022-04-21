import Head from "next/head";

function SEO(props: ISeo) {
    const {title, description, image, siteName, currentURL} = props;

    return (
        <Head>
            <meta charSet="utf-8"/>
            <meta content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=1"
                  name="viewport"/>
            <meta  content="IE=100"/>
            <title>{title}</title>
            {/* Twitter */}
            <meta name="twitter:card" content="summary" key="twcard"/>
            <meta name="twitter:url" content={currentURL}/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:image" content={image}/>
            <meta name="twitter:site" content={siteName}/>
            <meta name="twitter:description" content={description}/>

            {/* Open Graph */}
            <meta property="og:type" content="website" key="ogType"/>
            <meta property="og:url" content={currentURL} key="ogurl"/>
            <meta property="og:image" content={image} key="ogimage"/>
            <meta property="og:site_name" content={siteName} key="ogsitename"/>
            <meta property="og:title" content={title} key="ogtitle"/>
            <meta property="og:description" content={description} key="ogdesc"/>
        </Head>
    );
}

interface ISeo {
    title: string;
    description: string;
    currentURL: string;
    image: string;
    siteName: string;
}

export default SEO;
