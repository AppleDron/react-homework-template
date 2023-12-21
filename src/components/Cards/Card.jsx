import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CardButton } from './Card.styled';
import ModalProductDetails from 'components/Modal/Modal';

const CardItem = ({ product }) => {
  const { id, price, name, image } = product;
  const [isModal, setIsModal] = useState(false);

  const handleClickCardButton = e => {
    setIsModal(true);
  };

  return (
    <Grid item xs={12} sm={6} md={2} id={id}>
      <CardButton onClick={handleClickCardButton}>
        <Card
          sx={{
            '&:hover': {
              backgroundColor: '#a8ffa8',
              boxShadow: '2px 5px 10px 10px rgba(0,0,0,0.75)',
              cursor: 'pointer',
            },
          }}
        >
          <CardMedia component="img" height="140" image={image} alt={name} />
          <CardContent>
            <Typography variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Ціна: {price}
            </Typography>
          </CardContent>
        </Card>
      </CardButton>
      {isModal && (
        <ModalProductDetails
          open={isModal}
          setOpen={setIsModal}
          product={product}
        />
      )}
    </Grid>
  );
};

export default CardItem;
