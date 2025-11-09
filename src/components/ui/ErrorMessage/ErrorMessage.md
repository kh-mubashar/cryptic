# ErrorMessage Component

A reusable error message component that displays error information with optional action button.

## Usage

```tsx
import { ErrorMessage } from '@/components/ui/ErrorMessage';

// Basic usage
<ErrorMessage message="Something went wrong" />

// With custom title
<ErrorMessage
  title="Connection Error"
  message="Could not connect to the server"
/>

// With action button
<ErrorMessage
  message="Failed to load data"
  action={{
    label: 'Try Again',
    onClick: () => handleRetry()
  }}
/>
```

## Props

| Prop    | Type                                   | Description                                              |
| ------- | -------------------------------------- | -------------------------------------------------------- |
| title   | string                                 | Optional title of the error message. Defaults to 'Error' |
| message | string                                 | The main error message to display                        |
| action  | { label: string; onClick: () => void } | Optional action button configuration                     |

## Accessibility

- Uses semantic HTML with proper heading structure
- Action button has proper focus and hover states
- High contrast colors for better visibility
- Proper spacing for better readability

## Testing

The component is tested for:

- Basic rendering
- Default title handling
- Action button functionality
- Accessibility compliance

## Examples

### Basic Error

```tsx
<ErrorMessage message="Something went wrong" />
```

### Custom Title

```tsx
<ErrorMessage
  title="404 Not Found"
  message="The requested resource could not be found"
/>
```

### With Action Button

```tsx
<ErrorMessage
  title="Connection Lost"
  message="Your connection to the server was lost"
  action={{
    label: 'Reconnect',
    onClick: () => reconnect(),
  }}
/>
```
