import '@testing-library/react';
import { render } from '@testing-library/react';

describe('Overview component tests' ,() =>{
    it('should be in the document', ()=>{
        const view = render(<Overview />);
        expect(view).toBeInTheDocument();
    });
});