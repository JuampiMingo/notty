import { createContext } from "preact";



interface Notty {
    title: string,
    content:string
}

export const NottyWorld = createContext<Notty>(
    {
        title: 'Hello World',
        content: '## Hello World'
    }
)