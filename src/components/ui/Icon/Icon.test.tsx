import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';

describe('Icon', () => {
  it('renders search icon', () => {
    render(<Icon name="search" />);
    expect(screen.getByText('🔍')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Icon name="dashboard" className="test-class" />
    );
    const icon = container.firstChild;
    expect(icon).toHaveClass('test-class');
  });

  it('renders all available icons', () => {
    const { rerender } = render(<Icon name="search" />);
    expect(screen.getByText('🔍')).toBeInTheDocument();

    rerender(<Icon name="notification" />);
    expect(screen.getByText('🔔')).toBeInTheDocument();

    rerender(<Icon name="dashboard" />);
    expect(screen.getByText('📊')).toBeInTheDocument();

    rerender(<Icon name="markets" />);
    expect(screen.getByText('📈')).toBeInTheDocument();

    rerender(<Icon name="portfolio" />);
    expect(screen.getByText('💼')).toBeInTheDocument();

    rerender(<Icon name="alerts" />);
    expect(screen.getByText('🔔')).toBeInTheDocument();
  });
});
