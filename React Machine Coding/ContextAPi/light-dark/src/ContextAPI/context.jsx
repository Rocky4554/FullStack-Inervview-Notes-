import {createContext,useContext,useState,useEffect} from 'react';

const ThemeContext=createContext();

export const ThemeProvider=({children})=>{

    const [theme,setTheme]=useState("light");

    // load the theme from localstorage when on first render
    useEffect(()=>{

        const savedTheme = localStorage.getItem("theme") || "light"; 
        document.body.className=savedTheme;
        setTheme(savedTheme);

    },[])

    useEffect(()=>{
        document.body.className=theme;
        localStorage.setItem("theme",theme);

    },[theme]);

    const toggle=()=>{
        setTheme((prev)=>prev=="light"?"dark":"light");
    }

    return (<ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>

    )
}

export const useTheme=()=>useContext(ThemeContext);

// This line sets the CSS class name of your HTML <body> tag to either "light" or "dark" — depending on the current theme.


// When you run:

// document.body.className = "dark";


// It literally changes your HTML like this 👇

// <body class="dark">
//   <!-- your app -->
// </body>


// Then, in your CSS, you can define theme styles for .light and .dark classes.