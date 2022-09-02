export class ProductService{

    url = 'https://fakestoreapi.com/products';

    async getProducts() {
        return await fetch(`${this.url}`)
            .then(value => value.json());
    }

    async getProductsByGender(gender) {
        return await fetch(`${this.url}`)
            .then(value => value.json())
            .then(value => value.filter(el => el.category === gender));
    }


    async getProductById(id) {
        return await fetch(`${this.url}/${id}`)
            .then(value => value.json());
    }


}