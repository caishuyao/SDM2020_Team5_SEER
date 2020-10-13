import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { screen } from '@testing-library/dom'

import App from '../App';
import Dropdown from '../containers/Search/SearchDropdown';


test('renders Dropdown component', () => {
            const  tree = render(<Dropdown key={1} linenum={1} />);
	     expect(tree).exists;
            });
