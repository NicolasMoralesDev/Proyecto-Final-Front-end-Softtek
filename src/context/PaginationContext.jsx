import { createContext, useState } from 'react';


export const PaginationContext = createContext(); 


export const PaginationProvider = ({children}) => {

    const [page, setPage] = useState(1);


  return (
    <PaginationContext.Provider value={{page, setPage}}>
    {children}
   </PaginationContext.Provider>
  )
}

