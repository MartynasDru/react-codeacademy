import { render, screen } from "@testing-library/react";
import { Input } from './Input';

describe('Input', () => {
    test('should render', () => {
        render(<Input />);

        expect(screen.getByTestId('input')).toBeInTheDocument();
    });

    test('should have label if label property is passed and is truthy', () => {
        render(<Input label="Test label" />);

        expect(screen.getByTestId('label')).toBeInTheDocument();
    });

    test('should not have label if label property is not passed', () => {
        render(<Input />);

        expect(screen.queryByTestId('label')).not.toBeInTheDocument();
    });
});