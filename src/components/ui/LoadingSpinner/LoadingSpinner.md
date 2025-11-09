# LoadingSpinner Component

A simple loading spinner animation component that provides visual feedback during loading states.

## Usage

```tsx
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

// Basic usage
<LoadingSpinner />;
```

## Props

This component does not accept any props.

## Accessibility

- The spinner uses CSS animations for smooth performance
- The container is centered both horizontally and vertically
- The animation is subtle and not disruptive

## Testing

The component is tested for:

- Basic rendering
- Proper animation classes
- Accessibility compliance

## Examples

### Basic Usage

```tsx
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

function LoadingState() {
  return (
    <div>
      <LoadingSpinner />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
```
