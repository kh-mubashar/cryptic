import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { LoadingSpinner } from './LoadingSpinner';

expect.extend(toHaveNoViolations);

describe('LoadingSpinner Accessibility', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<LoadingSpinner />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
