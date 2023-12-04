import Pagination from 'react-bootstrap/Pagination';
import { useContext } from 'react';
import { PaginationContext } from '../../../context/PaginationContext';

const PaginationProduts = () => {

    const { setPage, page } = useContext(PaginationContext);

  return (
    <Pagination>
    <Pagination.First onClick={()=> setPage(1)}/>
    <Pagination.Prev onClick={()=> setPage(page-1)}/>

    <Pagination.Item active onClick={()=> setPage(1)}>{1}</Pagination.Item>
    <Pagination.Item active onClick={()=> setPage(2)}>{2}</Pagination.Item>
    <Pagination.Item active onClick={()=> setPage(3)}>{3}</Pagination.Item>
    <Pagination.Item active onClick={()=> setPage(4)}>{4}</Pagination.Item>


    <Pagination.Next onClick={()=> setPage(page+1)}/>
    <Pagination.Last />
  </Pagination>
  )
}

export default PaginationProduts