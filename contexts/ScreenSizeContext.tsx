"use client"

import { createContext, useContext, ReactNode } from "react";
import { useMediaQuery } from "@mantine/hooks";

// Define the context type
interface ScreenSizeContextType {
    isMobile: boolean;
}

// Create the context with a default value
const ScreenSizeContext = createContext<ScreenSizeContextType | undefined>(undefined);

// Create a provider component
export function ScreenSizeProvider({ children }: { children: ReactNode }) {
    const isMobile = useMediaQuery("(max-width: 768px)") || false;

    return (
        <ScreenSizeContext.Provider value={{ isMobile }}>
            {children}
        </ScreenSizeContext.Provider>
    );
}

// Custom hook to use the context
export function useScreenSize() {
    const context = useContext(ScreenSizeContext);
    if (!context) {
        throw new Error("useScreenSize must be used within a ScreenSizeProvider");
    }
    return context;
}
