import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Icon } from './Icon';

expect.extend(toHaveNoViolations);

describe('Icon Accessibility', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<Icon name="search" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no accessibility violations with custom class', async () => {
    const { container } = render(
      <Icon name="dashboard" className="text-2xl" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
