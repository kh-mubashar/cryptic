import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

describe('Avatar', () => {
  it('renders with default props', () => {
    render(<Avatar />);
    const img = screen.getByRole('img', { name: 'User' });
    expect(img).toBeInTheDocument();
  });

  it('renders with custom name', () => {
    render(<Avatar name="John Doe" />);
    const img = screen.getByRole('img', { name: 'John Doe' });
    expect(img).toBeInTheDocument();
  });

  it('renders with custom size', () => {
    render(<Avatar name="John Doe" size={64} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('width', '64');
    expect(img).toHaveAttribute('height', '64');
  });

  it('renders with custom image source', () => {
    const src = 'https://example.com/avatar.jpg';
    render(<Avatar src={src} name="John Doe" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', expect.stringContaining('avatar.jpg'));
  });

  it('renders with custom className', () => {
    render(<Avatar name="John Doe" className="custom-class" />);
    const container = screen.getByRole('img').parentElement;
    expect(container).toHaveClass('custom-class');
  });
});
