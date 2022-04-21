import {useState} from "react";
import ProductService from "service/product/product-service";

function ProductComponent({query}){
    const [params, setParams] = useState(query)

    function nextPage() {
        setParams(prevState => ({...prevState, ...{skip: params.skip + 10}}));
    }

    function prevPage() {
        setParams(prevState => ({...prevState, ...{skip: params.skip - 10}}));
    }

    const {
        data:products,
        error,
        mutate
    } = ProductService.getProductService(`https://dummyjson.com/products`, params);
    if (!products)
        return (<div>loading...</div>);
    return (<>
        <h1>Products</h1>
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
        {products.products.map(product => <p key={product.id}>{product.title}</p>)}
    </>)
}

export default ProductComponent;