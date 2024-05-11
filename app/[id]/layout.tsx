"use client";
import { CartProvider } from "@/components/Cart/cartContext";
import { ReactNode } from "react";

interface LayoutProp{
    children:ReactNode;
}
const Layout: React.FC<LayoutProp> = ({ children }) => {
    return (
            <div>
                {children}
            </div>
    );
};

export default Layout;
