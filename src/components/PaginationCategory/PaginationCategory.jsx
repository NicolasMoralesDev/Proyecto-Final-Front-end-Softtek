import Pagination from 'react-bootstrap/Pagination';
import { useContext } from 'react';
import { PaginationCategoryContext } from '../../context/PaginationCategoryContext';

const PaginationCategory = () => {

    const { setPageCate, pageCate, totalCate } = useContext(PaginationCategoryContext);

    let item = [];
    for (let i = 0; i < totalCate; i++) {
      item.push(
        <Pagination.Item key={i} active={i === pageCate} onClick={()=> setPageCate(i)}>
          {i}
        </Pagination.Item>
      );

    }
  return (
    <Pagination>
    <Pagination.First disabled={pageCate == 0} onClick={()=> setPageCate(0)}/>
    
    <Pagination.Prev disabled={pageCate == 0} onClick={()=> setPageCate(pageCate-1)}/>

    {item}

    <Pagination.Next disabled={pageCate == totalCate-1}  onClick={()=> setPageCate(pageCate+1)}/>
    <Pagination.Last disabled={pageCate == totalCate-1} onClick={()=> setPageCate(totalCate)}/>
  </Pagination>
  )
}

export default PaginationCategory