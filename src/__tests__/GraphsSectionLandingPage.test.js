import React from 'react';
import { render } from '@testing-library/react';
import LandingContainer from '../components/pages/Landing/LandingContainer';

test('test the tests', () => {
  expect(5).toBe(5);
});

describe('Render Landing Page', () => {
  let getByAltText;
  let getByText;

  // Reuse query functions across multiple test blocks
  beforeEach(() => {
    // Destructure query functions from the render function's result collection
    const renderResult = render(<LandingContainer />);
    getByAltText = renderResult.getByAltText;
    getByText = renderResult.getByText;
  });

  // Assert the presence of images (classNames)

  test('renders graphImg1', () => {
    const graphImg1 = getByAltText('Grant Rates By Office');
    expect(graphImg1).toBeInTheDocument();
  });
  test('renders graphImg2', () => {
    const graphImg2 = getByAltText('Grant Rates By Nationality');
    expect(graphImg2).toBeInTheDocument();
  });
  test('renders graphImg3', () => {
    const graphImg3 = getByAltText('Grant Rates Over Time');
    expect(graphImg3).toBeInTheDocument();
  });

  // Assert the presence of captions (classNames)
  test('renders caption1', () => {
    const caption1 = getByText('Search Grant Rates By Office');
    expect(caption1).toBeInTheDocument();
  });
  test('renders caption2', () => {
    const caption1 = getByText('Search Grant Rates By Nationality');
    expect(caption1).toBeInTheDocument();
  });
  test('renders caption3', () => {
    const caption1 = getByText('Search Grant Rates Over Time');
    expect(caption1).toBeInTheDocument();
  });
});
