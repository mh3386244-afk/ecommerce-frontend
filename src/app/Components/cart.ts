import { Injectable, signal, computed } from '@angular/core';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  imageCover: string;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {

  items = signal<CartItem[]>(this.load());

  count = computed(() =>
    this.items().reduce((sum, i) => sum + i.quantity, 0)
  );

  total = computed(() =>
    this.items().reduce((sum, i) => sum + i.price * i.quantity, 0)
  );

  add(product: any) {
    const list = [...this.items()];
    const existing = list.find(i => i.id === product._id);

    if (existing) {
      existing.quantity++;
    } else {
      list.push({
        id: product._id,
        title: product.title,
        price: product.price,
        imageCover: product.imageCover,
        quantity: 1
      });
    }
    this.items.set(list);
    this.save();
  }

  increase(id: string) {
    this.items.set(
      this.items().map(i => i.id === id ? { ...i, quantity: i.quantity + 1 } : i)
    );
    this.save();
  }

  decrease(id: string) {
    this.items.set(
      this.items()
        .map(i => i.id === id ? { ...i, quantity: i.quantity - 1 } : i)
        .filter(i => i.quantity > 0)
    );
    this.save();
  }

  remove(id: string) {
    this.items.set(this.items().filter(i => i.id !== id));
    this.save();
  }

  clear() {
    this.items.set([]);
    this.save();
  }

  private save() {
    localStorage.setItem('cart', JSON.stringify(this.items()));
  }

  private load(): CartItem[] {
    try {
      return JSON.parse(localStorage.getItem('cart') || '[]');
    } catch {
      return [];
    }
  }
}