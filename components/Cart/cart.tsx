import React from "react";
import { Minus, Plus, Trash, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerClose, } from "@/components/ui/drawer";
import { useCart } from "@/components/Cart/cartContext";
import { on } from "events";

interface CartDrawerProps {
  onClose: () => void;
  onOpen: boolean;
}

export function CartDrawer({ onClose, onOpen }: CartDrawerProps) {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart,totalCost } =
    useCart();

  return (
    <Drawer open={onOpen} onClose={onClose} onRelease={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Shopping Cart</DrawerTitle>
        </DrawerHeader>
        <div className="p-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <div>
                <div>{item.name}</div>
                <div>₹{item.price.toFixed(2)}</div>
              </div>
              <div className="flex items-center gap-6 text-2xl">
                <Minus onClick={() => decrementQuantity(item.id)} className="h-4 w-4 cursor-pointer" />
                <div>{item.quantity}</div>
                <Plus onClick={() => incrementQuantity(item.id)} className="h-4 w-4 cursor-pointer" />
                <Button onClick={() => removeFromCart(item.id)} variant="destructive">Remove</Button>
              </div>
            </div>
          ))}
          <div className="flex justify-between mt-4 font-bold">
            <div>Total:</div>
            <div>₹{totalCost.toFixed(2)}</div>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline" onClick={onClose}>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
