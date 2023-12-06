import { createContext, useState } from 'react';


export const PaginationCategoryContext = createContext(); 


export const PaginationCategoryProvider = ({children}) => {

    const [pageCate, setPageCate] = useState(0);
    const [totalCate, setTotalCate] = useState(1);


  return (
    <PaginationCategoryContext.Provider value={{pageCate, setPageCate, totalCate, setTotalCate}}>
    {children}
   </PaginationCategoryContext.Provider>
  )
}

