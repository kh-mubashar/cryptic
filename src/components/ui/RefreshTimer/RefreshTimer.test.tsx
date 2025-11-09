import { render, screen, fireEvent, act } from '@testing-library/react';
import { RefreshTimer } from './RefreshTimer';

describe('RefreshTimer', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    // Mock localStorage
    Storage.prototype.getItem = jest.fn();
    Storage.prototype.setItem = jest.fn();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it('renders with default props', () => {
    render(
      <RefreshTimer
        interval={30000}
        onRefresh={async () => {}}
        isLoading={false}
      />
    );

    expect(screen.getByText('Auto-refresh')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('handles auto-refresh toggle', () => {
    render(
      <RefreshTimer
        interval={30000}
        onRefresh={async () => {}}
        isLoading={false}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'cryptic-auto-refresh',
      'true'
    );
  });

  it('shows loading state', () => {
    render(
      <RefreshTimer
        interval={30000}
        onRefresh={async () => {}}
        isLoading={true}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(screen.getByText('Refreshing...')).toBeInTheDocument();
  });

  it('updates interval selection', () => {
    render(
      <RefreshTimer
        interval={30000}
        onRefresh={async () => {}}
        isLoading={false}
      />
    );

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: '60000' } });

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'cryptic-refresh-interval',
      '60000'
    );
  });

  it('calls onRefresh when refresh button is clicked', async () => {
    const mockRefresh = jest.fn().mockResolvedValue(undefined);
    render(
      <RefreshTimer
        interval={30000}
        onRefresh={mockRefresh}
        isLoading={false}
      />
    );

    const button = screen.getByTitle('Refresh now');
    fireEvent.click(button);

    expect(mockRefresh).toHaveBeenCalled();
  });

  it('starts countdown when auto-refresh is enabled', () => {
    render(
      <RefreshTimer
        interval={30000}
        onRefresh={async () => {}}
        isLoading={false}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByText('Next refresh in 29s')).toBeInTheDocument();
  });
});
