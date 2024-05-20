import { createContext } from "preact";


export type ThemeNotty = {
    background: string,
    color: string,
    font: string
}


export interface Notty {
    theme: Readonly<ThemeNotty>
}

export const NottyConfig= createContext<Notty>(
    {
        theme: {
            background: '#000000',
            color: '#ffffff',
            font: 'sans-serif'
        }
    }
)