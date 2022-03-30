const ProductService = require('../product_service.js');
const StubProductClient = require('./stub_product_client.js');

describe('ProductService - Stub', () => {
  let productService;

  beforeEach(() => {
    // Arrange, Given 준비 단계
    productService = new ProductService(new StubProductClient());
  });

  it('should filter out only available items', async () => {
    // Act, When 실행 단계
    const items = await productService.fetchAvailableItems();

    // Assert, Then 검증 단계
    expect(items.length).toBe(1);
    expect(items).toEqual[
      ({ item: '🥛', available: true }, { item: '🍌', available: false })
    ];
  });
});
