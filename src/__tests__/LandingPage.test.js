import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LandingContainer from '../components/pages/Landing/LandingContainer';

test('test the tests', () => {
  expect(5).toBe(5);
});

let getByAltText = () => {};
let getByText = () => {};
let container = null;

// Reuse query functions across multiple test blocks
beforeEach(() => {
  // Destructure query functions from the render function's result collection
  const renderResult = render(<LandingContainer />);
  getByAltText = renderResult.getByAltText;
  getByText = renderResult.getByText;
  container = renderResult.container;
});

describe('Render Graphs Section in Landing Page', () => {
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

describe('Render Bottom Section in Landing Page', () => {
  //Assert the presence of the bottom block elements
  //Heading
  test('bottom heading renders', () => {
    const bottomHeading = getByText(/systemic disparity insights/i);
    expect(bottomHeading).toBeInTheDocument();
  });
  //Data containers
  test('data1 container renders', () => {
    const dataContainer1 = container.querySelector(
      '.first-data-point-container'
    );
    expect(dataContainer1).toBeInTheDocument();
  });

  test('data2 container renders', () => {
    const dataContainer2 = container.querySelector(
      '.second-data-point-container'
    );
    expect(dataContainer2).toBeInTheDocument();
  });

  test('data3 container renders', () => {
    const dataContainer3 = container.querySelector(
      '.third-data-point-container'
    );
    expect(dataContainer3).toBeInTheDocument();
  });
  //Read More Button
  test('read more button renders', () => {
    const readMoreButton = getByText('Read More');
    expect(readMoreButton).toBeInTheDocument();
  });

  //Assert that the Back to Top Paragraph renders and functions
  test('Back to Top paragraph renders', () => {
    const backToTop = getByText('Back To Top ^');
    expect(backToTop).toBeInTheDocument();
    expect(backToTop).toBeVisible();
  });

  test('clicking backToTop calls scrollToTop function', () => {
    // mock the window.scrollTo method
    const scrollToMock = jest.fn();
    window.scrollTo = scrollToMock;

    // get the element and simulate a click
    const backToTop = getByText('Back To Top ^');
    fireEvent.click(backToTop);

    //assertions
    expect(scrollToMock).toHaveBeenCalledTimes(1);
    expect(scrollToMock).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });

    //clean up the mock to prevent potential side effects
    window.scrollTo.mockRestore();
  });
});
