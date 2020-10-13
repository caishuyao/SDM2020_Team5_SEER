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
	        expect(screen.queryAllByText(/submiter/i).exists)
            });
