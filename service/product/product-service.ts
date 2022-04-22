import {IParamsProduct, IResponseProduct} from "@/models/product/i-product.interface";
import BaseService from "service/base-service";

class ProductService extends BaseService<IParamsProduct, IResponseProduct> {
    getProductService(url, params, showLoading: boolean = true, header = {}) {
        return this.get(url, params, showLoading, header);
    }

    addProductService(url, showLoading: boolean = true, header = {}) {
        return this.post(url, showLoading, header);
    }

    getCategoryProductService(url, params, showLoading: boolean = true, header = {}) {
        return this.get(url, params, showLoading, header);
    }
}

export default new ProductService();