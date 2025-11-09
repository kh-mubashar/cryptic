import { render, act } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { RefreshTimer } from './RefreshTimer';

expect.extend(toHaveNoViolations);

describe('RefreshTimer Accessibility', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <RefreshTimer
        interval={30000}
        onRefresh={async () => {}}
        isLoading={false}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no accessibility violations when loading', async () => {
    const { container } = render(
      <RefreshTimer
        interval={30000}
        onRefresh={async () => {}}
        isLoading={true}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no accessibility violations with auto-refresh enabled', async () => {
    const { container } = render(
      <RefreshTimer
        interval={30000}
        onRefresh={async () => {}}
        isLoading={false}
      />
    );

    const checkbox = container.querySelector(
      'input[type="checkbox"]'
    ) as HTMLInputElement;
    if (checkbox) {
      await act(async () => {
        checkbox.click();
      });
    }

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
