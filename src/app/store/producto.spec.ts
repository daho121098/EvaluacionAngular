import { TestBed } from '@angular/core/testing';

import { ProductoStore } from './producto';

describe('Producto', () => {
  let service: ProductoStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
