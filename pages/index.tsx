import CategoryComponent from "@/components/ecommerce/category/category-component";
import ProductComponent from "@/components/ecommerce/products/product-component";
import SEO from "@/components/seo";
import {IResponseProduct} from "@/models/product/i-product.interface";
import MainLayout from "components/layout/main-layout";
import {useState} from "react";
import SsrService from "service/ssr/ssr-service";
import {useSWRConfig, SWRConfig} from "swr";
import {useMatchMutate} from "utils/service-swr-util";

function Home({fallback, params, url}) {
    const [isSave, setIsSave] = useState(false);
    const {cache} = useSWRConfig();
    const matchMutate = useMatchMutate();

    function trigger() {
        matchMutate('products');
    }

    function addProduct() {
        setIsSave(true)
    }

    return (
        <>
            <div>
                <button onClick={addProduct}>Add Product</button>
                {/*<button onClick={nextPage}>Next</button>*/}
                <button onClick={trigger}>Trigger</button>
                <SWRConfig value={{fallback}}>
                    <CategoryComponent/>
                    <ProductComponent host={url} query={params}/>
                </SWRConfig>
            </div>
        </>
    )
}

export async function getServerSideProps({query, req}) {
    // const auth = !!req.headers.cookie;
    // if (!auth) {
    //     return {
    //         redirect: {
    //             destination: "/login",
    //             permanent: false,
    //         },
    //     };
    // }
    const data = await SsrService.get<IResponseProduct>(`https://dummyjson.com/products?limit=${query.limit || 10}&skip=${query.skip || 0}`);
    const dataCategory = await SsrService.get(`https://dummyjson.com/products/categories`);
    return {
        props: {
            fallback: {
                [`https://dummyjson.com/products?limit=${query.limit || 10}&skip=${query.skip | 0}`]: data,
                ['https://dummyjson.com/products/categories']: dataCategory
            },
            url: req?.headers?.host,
            params: {
                limit: 10,
                skip: 0
            }
        }
    }
}

Home.Layout = MainLayout;
export default Home
