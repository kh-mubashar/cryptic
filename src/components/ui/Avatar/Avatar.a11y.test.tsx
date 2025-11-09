import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Avatar from './Avatar';

expect.extend(toHaveNoViolations);

describe('Avatar Accessibility', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<Avatar name="John Doe" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no accessibility violations with custom size', async () => {
    const { container } = render(<Avatar name="John Doe" size={64} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no accessibility violations with custom image', async () => {
    const { container } = render(
      <Avatar src="https://i.pravatar.cc/300" name="John Doe" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
