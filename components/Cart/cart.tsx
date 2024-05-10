import React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

interface Product {
  id: string;
  title: string;
  price: number;
}

interface DrawerDemoProps {
  products: Product[];
  onClose: () => void; 
}

const DrawerDemo: React.FC<DrawerDemoProps> = ({ products, onClose }) => {
  const [cartItems, setCartItems] = React.useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId: string) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const calculateTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Drawer>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Shopping Cart</DrawerTitle>
        </DrawerHeader>
s        <div className="p-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.title}</span>
              <span>₹{item.price}</span>
              <Button
                variant="outline"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
        <DrawerFooter>
          <div className="flex justify-between px-4">
            <span>Total:</span>
            <span>₹{calculateTotalCost()}</span>
          </div>
          {/* Button to close the cart drawer */}
          <DrawerClose asChild>
            <Button variant="outline" onClick={onClose}>
              Close Cart
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerDemo;
