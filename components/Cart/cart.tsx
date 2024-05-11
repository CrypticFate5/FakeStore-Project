import React from "react";
import { Minus, Plus, Trash, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {Drawer,DrawerContent,DrawerFooter,DrawerHeader,DrawerTitle,DrawerClose,} from "@/components/ui/drawer";
import { useCart } from "@/components/Cart/cartContext";
import { on } from "events";

interface CartDrawerProps {
  onClose: () => void;
  onOpen: boolean;
}

export function CartDrawer({ onClose ,onOpen}: CartDrawerProps) {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } =
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
                <div>${item.price.toFixed(2)}</div>
              </div>
              <div className="flex items-center gap-6 text-2xl">
                {/* <Button onClick={() => decrementQuantity(item.id)}> */}
                  {/* <Minus className="h-4 w-4" /> */}
                  <Minus onClick={() => decrementQuantity(item.id)} className="h-4 w-4 cursor-pointer" />

                {/* </Button> */}
                <div>{item.quantity}</div>
                {/* <Button onClick={() => incrementQuantity(item.id)}> */}
                  <Plus onClick={() => incrementQuantity(item.id)} className="h-4 w-4 cursor-pointer" />
                {/* </Button> */}
                {/* <Trash2 onClick={()=> removeFromCart(item.id)} className="fill-red-600"></Trash2> */}
                <Button onClick={()=> removeFromCart(item.id)} variant="destructive">Remove</Button>
                
              </div>
            </div>
          ))}
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
