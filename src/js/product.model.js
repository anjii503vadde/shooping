export class Product {
  constructor(
    id,
    productId,
    productName,
    productDetails,
    imageURLs,
    brand,
    color,
    price,
    quantity,
    size,
  ) {
    this.id = id;
    this.productId = productId;
    this.productName = productName;
    this.productDetails = productDetails;
    this.imageURLs = imageURLs;
    this.brand = brand;
    this.color = color;
    this.price = price;
    this.quantity = quantity;
    this.size = size;
  }
}
