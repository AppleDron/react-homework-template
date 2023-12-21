import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from '@mui/material';
import React from 'react';
import { ButtonDiv, style } from './Modal.styled';

const ModalProductDetails = ({ open, setOpen, product }) => {
  const { price, name, image, describtion } = product;

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia component="img" height="140" image={image} alt={name} />
          <CardContent>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Ціна: {price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {describtion}
            </Typography>
          </CardContent>
          <ButtonDiv>
            <Button
              variant="contained"
              color="primary"
              sx={{
                margin: '0 auto',
                backgroundColor: 'green',
                '&:hover': {
                  backgroundColor: '#fff',
                  outline: '1px solid green',
                  color: 'black',
                },
              }}
            >
              Add to Cart
            </Button>
            <Button
              onClick={handleClose}
              variant="contained"
              color="primary"
              sx={{ margin: '0 auto' }}
            >
              Close
            </Button>
          </ButtonDiv>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalProductDetails;
