import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorMessage } from './ErrorMessage';

describe('ErrorMessage', () => {
  it('renders title and message', () => {
    render(<ErrorMessage title="Test Error" message="Test message" />);
    expect(screen.getByText('Test Error')).toBeInTheDocument();
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });

  it('renders default title when not provided', () => {
    render(<ErrorMessage message="Test message" />);
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('renders action button when action is provided', () => {
    const mockOnClick = jest.fn();
    render(
      <ErrorMessage
        message="Test message"
        action={{ label: 'Try Again', onClick: mockOnClick }}
      />
    );

    const button = screen.getByText('Try Again');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
