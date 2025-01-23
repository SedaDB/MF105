import { createContext, useEffect, useState } from "react";

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
    message: string;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => { },
    message: ""
});


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme])


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, message: "Hello My name is Furkan" }}>
            {children}
        </ThemeContext.Provider>
    );
};
