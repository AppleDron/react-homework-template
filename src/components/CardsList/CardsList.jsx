import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getTotalData } from '../../redux/products/thunk';
import {
  errorSelector,
  getLimitSelector,
  getPageSelector,
  isLoadingSelector,
  selectFilteredProducts,
} from '../../redux/products/selectors';
import { Grid } from '@mui/material';
import CardItem from 'components/Cards/Card';
import Loader from 'components/Loader/Loader';

const CardsList = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);
  const filteredProducts = useSelector(selectFilteredProducts);
  const limit = useSelector(getLimitSelector);
  const page = useSelector(getPageSelector);

  useEffect(() => {
    dispatch(getProducts({ limit, page }));
    dispatch(getTotalData());
  }, [dispatch, limit, page]);

  return (
    <div style={{ margin: '20px 100px' }}>
      {isLoading && !error && <Loader isLoading={isLoading} />}
      {error && <b>Error!</b>}
      {filteredProducts && (
        <Grid container spacing={2}>
          {filteredProducts.map(product => (
            <CardItem product={product} key={product.id} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default CardsList;
