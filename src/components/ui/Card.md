# Card Component

The Card component is a reusable UI element that provides a consistent container with optional title and custom styling.

## Usage

```tsx
import { Card } from '@/components/ui/Card';

// Basic usage
<Card>
  Content goes here
</Card>

// With title
<Card title="My Card">
  Content goes here
</Card>

// With custom styling
<Card className="bg-blue-100">
  Content goes here
</Card>
```

## Props

| Prop      | Type      | Description                                      |
| --------- | --------- | ------------------------------------------------ |
| title     | string    | Optional title to display at the top of the card |
| children  | ReactNode | Content to display inside the card               |
| className | string    | Optional CSS classes to apply to the card        |

## Accessibility

- The card uses semantic HTML structure
- Title text is rendered as a heading element
- Custom styles can be applied while maintaining accessibility

## Testing

The component is tested for:

- Basic rendering
- Title display
- Custom class application
- Accessibility compliance

## Examples

### Basic Card

```tsx
<Card>
  <p>Simple content in a card</p>
</Card>
```

### Card with Title

```tsx
<Card title="User Profile">
  <p>User details go here</p>
</Card>
```

### Card with Custom Styling

```tsx
<Card className="bg-gray-100 shadow-lg">
  <p>Custom styled card</p>
</Card>
```
