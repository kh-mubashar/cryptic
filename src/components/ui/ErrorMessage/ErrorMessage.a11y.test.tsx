import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { ErrorMessage } from './ErrorMessage';

expect.extend(toHaveNoViolations);

describe('ErrorMessage Accessibility', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <ErrorMessage title="Test Error" message="Test message" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no accessibility violations with action button', async () => {
    const { container } = render(
      <ErrorMessage
        title="Test Error"
        message="Test message"
        action={{ label: 'Try Again', onClick: () => {} }}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
