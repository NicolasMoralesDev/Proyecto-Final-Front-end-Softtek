import Pagination from 'react-bootstrap/Pagination';
import { useContext } from 'react';
import { PaginationContext } from '../../../context/PaginationContext';

const PaginationProduts = () => {

    const { setPage, page, total } = useContext(PaginationContext);

    let item = []
    for (let i = 1; i <= total; i++) {
      item.push(
        <Pagination.Item key={i} active={i === page}>
          {i}
        </Pagination.Item>
      );
    }
  return (
    <Pagination>
    <Pagination.First disabled={page==0} onClick={()=> setPage(0)}/>
    
    <Pagination.Prev disabled={page==0} onClick={()=> setPage(page-1)}/>

    {item}

    <Pagination.Next disabled={page==total}  onClick={()=> setPage(page+1)}/>
    <Pagination.Last onClick={()=> setPage(total)}/>
  </Pagination>
  )
}

export default PaginationProduts