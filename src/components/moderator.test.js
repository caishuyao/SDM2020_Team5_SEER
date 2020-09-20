import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Moderator from './moderator';


test('renders learn react link', () => {
    const { getByText } = render( < Moderator / > );
    const linkElement = getByText(/Updates/i);
    expect(linkElement).toBeInTheDocument();
});