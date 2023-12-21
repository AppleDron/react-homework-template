import React, { useState } from 'react';
import { Pagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../redux/products/slice';
import { getTotalPagesSelector } from '../../redux/products/selectors';
import { PaginationDiv } from './PaginationCards.styled';

const PaginationCards = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const totalPages = useSelector(getTotalPagesSelector);

  console.log(totalPages);

  const handleChange = (event, value) => {
    console.log(value);
    setPage(value);
    dispatch(changePage(value));
  };

  return (
    <PaginationDiv>
      <Pagination count={totalPages} page={page} onChange={handleChange} />
    </PaginationDiv>
  );
};

export default PaginationCards;
