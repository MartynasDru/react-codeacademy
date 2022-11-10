import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('should render', () => {
        const { getByTestId } = render(<Button>Test 123</Button>);

        expect(getByTestId('button')).toBeInTheDocument();
        // expect(screen.getByTestId('button')).toBeInTheDocument();
    });
});