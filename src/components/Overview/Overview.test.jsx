import '@testing-library/react';
import { render, screen } from '@testing-library/react';

import Overview from './index';

describe('Overview component tests' ,() =>{
    it('should be in the document', ()=>{
        const view = render(<Overview />);
        expect(view.baseElement).toBeInTheDocument();
    });

    it('should have a list of items', ()=>{
        render(<Overview />);
        const listElement = screen.getByTestId('overview-list');
        expect(listElement).toBeInTheDocument();
    });

    it('list item should have a description', ()=>{
        render(<Overview />);
        const listItemElements = screen.getAllByTestId('list-item');
        expect(listItemElements[0].textContent).toBe('123');
    });
});   