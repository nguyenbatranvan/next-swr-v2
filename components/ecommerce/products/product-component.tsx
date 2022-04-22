import SEO from "@/components/seo";
import {useRouter} from "next/router";
import {useEffect, useMemo, useState} from "react";
import ProductService from "service/product/product-service";

function ProductComponent({query, host}) {
    const [params, setParams] = useState(query);

    const [executeQuery, response] = ProductService.addProductService('https://dummyjson.com/products/add');
    const {
        data: products,
        error,
        mutate
    } = ProductService.getProductService(`https://dummyjson.com/products`, params);
    const description = useMemo(() => {
        const nameProducts = products.products.map(item => item.title);
        return nameProducts.join(',');
    }, [products])
    if (!products)
        return (<div>loading...</div>);

    async function addProduct() {
        try {
            const result = await executeQuery({
                title: '111'
            });
        } catch (e) {
            console.log('e', e);
        }


    }

    function nextPage() {
        setParams(prevState => ({...prevState, ...{skip: params.skip + 10}}));
    }

    function prevPage() {
        setParams(prevState => ({...prevState, ...{skip: params.skip - 10}}));
    }

    return (<>
        <SEO title={"Products"} description={description} currentURL={host} image={products.products[0].images[0]}
             siteName={host}/>
        <h1>Products</h1>
        <button onClick={addProduct} className={"bg-blue p-4"}>Add PRoducts</button>
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
        {products.products.map(product => <p key={product.id}>{product.title}</p>)}
    </>)
}

export default ProductComponent;