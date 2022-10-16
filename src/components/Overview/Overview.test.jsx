import '@testing-library/react';
import { render } from '@testing-library/react';

import Overview from './index';

describe('Overview component tests' ,() =>{
    it('should be in the document', ()=>{
        const view = render(<Overview />);
        expect(view.baseElement).toBeInTheDocument();
    });

    it('should have a list of items', ()=>{
        const view = render(<Overview />);
        const list = view.findAllByTestId('overview-item');
        expect(list.length).toBe(10);
    });
});   