import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Card } from './Card';

expect.extend(toHaveNoViolations);

describe('Card Accessibility', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Card title="Accessibility Test">
        <p>This is a test for accessibility.</p>
      </Card>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no accessibility violations without title', async () => {
    const { container } = render(
      <Card>
        <p>Card content without title</p>
      </Card>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
