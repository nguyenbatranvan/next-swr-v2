import ProductService from "service/product/product-service";

function CategoryComponent() {
    // const {
    //     data: categories,
    //     error,
    //     mutate
    // } = ProductService.getProductService(`https://dummyjson.com/products/categories`, {});
    // if (!categories)
    //     return (<div>loading...</div>);
    return (<>
        <h1>Categories</h1>
        {/*{categories.map(category => <p key={category}>{category}</p>)}*/}
    </>)
}

export default CategoryComponent;