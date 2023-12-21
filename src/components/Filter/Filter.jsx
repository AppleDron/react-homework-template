import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FiltersDiv, PriceRangeDiv } from './Filter.styled';
import { useDispatch } from 'react-redux';
import {
  setPriceRangeFilter,
  setSearchFilter,
} from '../../redux/filters/slice';
import { sortPriceDown, sortPriceUp } from '../../redux/products/slice';

const Filter = () => {
  const [prices, setPrices] = useState([0, 1000]);
  const [selectedValue, setSelectedValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setPriceRangeFilter({
        minPrice: prices[0],
        maxPrice: prices[1],
      })
    );
  }, [dispatch, prices]);

  const handleChangeSearchValue = e => {
    setSearchValue(e.target.value);
    dispatch(setSearchFilter(e.target.value));
  };

  const handleChangeSlider = e => {
    setPrices(e.target.value);
  };

  const handleChangeSort = e => {
    const { value } = e.target;
    setSelectedValue(value);

    if (value === 1) {
      dispatch(sortPriceUp());
    } else if (value === 2) {
      dispatch(sortPriceDown());
    }
  };

  return (
    <FiltersDiv>
      <TextField
        id="outlined-basic"
        label="Search…"
        variant="outlined"
        value={searchValue}
        onChange={handleChangeSearchValue}
      />
      <PriceRangeDiv>
        <p>Price range: </p>
        <Slider
          getAriaLabel={() => 'Price range'}
          value={prices}
          onChange={handleChangeSlider}
          valueLabelDisplay="auto"
          valueLabelFormat={value => `${value}$`}
          max={1000}
          sx={{
            maxWidth: '100px',
            color: 'green',
          }}
        />
      </PriceRangeDiv>
      <FormControl
        onChange={handleChangeSort}
        sx={{
          width: '225px',
          color: 'green',
        }}
      >
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          label="Sort"
          onChange={handleChangeSort}
        >
          <MenuItem value={1}>Price Up</MenuItem>
          <MenuItem value={2}>Price Down</MenuItem>
        </Select>
      </FormControl>
    </FiltersDiv>
  );
};

export default Filter;
