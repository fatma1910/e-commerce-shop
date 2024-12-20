
export async function getAllCategory() {
    const categoryRes = await fetch('https://fakestoreapi.com/products/categories');

    return categoryRes.json();
}
export async function getAllProduct() {
    const productRes = await fetch('https://fakestoreapi.com/products');
    return productRes.json();

}
export async function getSingleProduct(id:string) {
    const productRes = await fetch(`https://fakestoreapi.com/products/${id}`);
    return productRes.json();

}
export async function getSimilarProducts(cat:string) {
    const similar = await fetch(`https://fakestoreapi.com/products/category/${cat}`);
    return similar.json();

}
