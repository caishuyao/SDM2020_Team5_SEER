import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
import { screen } from '@testing-library/dom'


test('renders learn react link', () => {
            const { getByText } = render( < BrowserRouter >
                <
                App / >
                <
                /BrowserRouter>);
                const linkElement = screen.getAllByText(/search/i); 
	        expect(screen.queryAllByText(/search/i).exists)
            });
