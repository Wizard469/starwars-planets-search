import React from 'react';
import App from '../App.js';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import testData from '../../cypress/mocks/testData';

describe('App test', () => {
  it('I am your test', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData)
    });

    act(() => {
      render(<App />);
    });

    await waitFor(() => {
      expect(screen.queryByRole('link', 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif')).not.toBeInTheDocument();
    });

    const planetNameInput = screen.getByTestId("name-filter");
    const columnFilter = screen.getByTestId("column-filter");
    const comparisonFilter = screen.getByTestId("comparison-filter");
    const valueFilter = screen.getByTestId("value-filter");
    const filterBtn = screen.getByTestId("button-filter");
    const removeAllBtn = screen.getByTestId("button-remove-filters");

    userEvent.selectOptions(columnFilter, "population");
    userEvent.selectOptions(comparisonFilter, "maior que");
    userEvent.type(valueFilter, "6000000");
    userEvent.click(filterBtn);
    userEvent.click(screen.getByRole('img', { name: /trash bin/i }));

    userEvent.type(planetNameInput, "a");
    userEvent.selectOptions(columnFilter, "orbital_period");
    userEvent.selectOptions(comparisonFilter, "menor que");
    userEvent.type(valueFilter, "400");
    userEvent.click(filterBtn);

    userEvent.selectOptions(columnFilter, "diameter");
    userEvent.selectOptions(comparisonFilter, "igual a");
    userEvent.type(valueFilter, "12500");
    userEvent.click(filterBtn);
    userEvent.click(removeAllBtn);
  });
});
