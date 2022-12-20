import ReactDOM from 'react-dom/client';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './pages/Home.js';
import Formout from './pages/Formout.jsx';

test('renders homepage', () => {
  render(<Home />);
  const linkElement = screen.getByText(/sicko mode/i);
  expect(linkElement).toBeInTheDocument();
  screen.debug();//prints the html for the rendered node
}); 

test('renders formout page', () => {
  render(<Formout />);
  const linkElement = screen.getByText('Search:');
  expect(linkElement).toBeInTheDocument();
  
  //fails string needs to match exactly
  //expect(screen.getByText('Search')).toBeInTheDocument(); 
  //succeeds regex picks it up
  //expect(screen.getByText(/Search/)).toBeInTheDocument();
  screen.debug();//prints the html for the rendered node
}); 

describe('Formout get by role test', () => {
  it('renders Formout component', () => {
    render(<Formout />);

    //if role does not match terminal suggests roles
    //screen.getByRole(''); 
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});

describe('my function or component', () => {
  it('does the following: ', () => {

  });
});

describe('true is truthy and false is falsy', () => {
  it('true is truthy', () => {
    expect(true).toBe(true);
  });

  it('false is falsy', () => {
    expect(false).toBe(false);
  });
});

function sum(x, y) {
  return x + y;
}

describe('sum', () => {
  it('sums up two values', () => {
    expect(sum(2, 4)).toBe(6);
  });
});