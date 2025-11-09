# RefreshTimer Component

A customizable timer component that handles automatic data refresh with configurable intervals.

## Usage

```tsx
import { RefreshTimer } from '@/components/ui/RefreshTimer';

function DataComponent() {
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = async () => {
    setIsLoading(true);
    try {
      await fetchData();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RefreshTimer
      interval={30000}
      onRefresh={handleRefresh}
      isLoading={isLoading}
    />
  );
}
```

## Props

| Prop      | Type                | Description                                    |
| --------- | ------------------- | ---------------------------------------------- |
| interval  | number              | Default refresh interval in milliseconds       |
| onRefresh | () => Promise<void> | Callback function triggered on refresh         |
| isLoading | boolean             | Loading state to disable refresh functionality |

## Features

- Auto-refresh toggle with persistent state
- Configurable refresh intervals
- Visual countdown timer
- Loading state handling
- Persistent user preferences
- Manual refresh button
- Visual feedback for saved preferences

## Available Intervals

- 30 seconds (30000ms)
- 1 minute (60000ms)
- 5 minutes (300000ms)
- 15 minutes (900000ms)

## Accessibility

- Proper label associations
- Keyboard navigation support
- Loading state indicators
- Clear visual feedback
- ARIA attributes for interactive elements

## Testing

The component is tested for:

- Default rendering
- Auto-refresh toggle functionality
- Interval selection
- Loading state display
- Manual refresh trigger
- Timer countdown
- Persistent storage handling
- Accessibility compliance

## Examples

### Basic Usage

```tsx
<RefreshTimer
  interval={30000}
  onRefresh={async () => await fetchData()}
  isLoading={false}
/>
```

### With Loading State

```tsx
<RefreshTimer
  interval={60000}
  onRefresh={async () => await fetchData()}
  isLoading={true}
/>
```

### Custom Interval

```tsx
<RefreshTimer
  interval={300000} // 5 minutes
  onRefresh={async () => await fetchData()}
  isLoading={false}
/>
```
