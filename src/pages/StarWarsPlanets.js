import React from 'react';
import Filters from '../components/Filters';
import SelectedFilters from '../components/SelectedFilters';
import Table from '../components/Table';

export default function StarWarsPlanets() {
  return (
    <>
      <Filters />
      <SelectedFilters />
      <Table />
    </>
  );
}
