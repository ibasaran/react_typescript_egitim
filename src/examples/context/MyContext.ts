import React from 'react';

interface MyContextProp {
    name?: string,
    setName?: (value:string) => void
}

const MyContext = React.createContext<MyContextProp>({});

export default MyContext;