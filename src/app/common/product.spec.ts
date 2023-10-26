import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(
      new Product(
        "sku-asddaad",
        "iphone",
        "iphone description",
        999,
        "iphone_15_img.jpg",
        true,
        35,
        new Date("2023-09-01"),
        new Date("2023-09-01"))).toBeTruthy();
  });
});
