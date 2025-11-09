# Icon Component

A simple icon component that displays emoji icons with customizable styling.

## Usage

```tsx
import { Icon } from '@/components/ui/Icon';

// Basic usage
<Icon name="search" />

// With custom styling
<Icon name="dashboard" className="text-2xl text-blue-500" />
```

## Props

| Prop      | Type                                                                              | Description                               |
| --------- | --------------------------------------------------------------------------------- | ----------------------------------------- |
| name      | 'search' \| 'notification' \| 'dashboard' \| 'markets' \| 'portfolio' \| 'alerts' | The name of the icon to display           |
| className | string                                                                            | Optional CSS classes to apply to the icon |

## Available Icons

- 🔍 `search`
- 🔔 `notification`
- 📊 `dashboard`
- 📈 `markets`
- 💼 `portfolio`
- 🔔 `alerts`

## Accessibility

- Icons are rendered using semantic HTML
- Custom styling can be applied while maintaining accessibility
- Consider adding aria-label when using icons for interactive elements

## Testing

The component is tested for:

- Correct icon rendering
- Custom class application
- All available icon variants
- Accessibility compliance

## Examples

### Basic Icon

```tsx
<Icon name="search" />
```

### Styled Icon

```tsx
<Icon name="dashboard" className="text-2xl text-blue-500" />
```

### Icons in Navigation

```tsx
<nav className="flex gap-4">
  <Icon name="dashboard" className="text-gray-600" />
  <Icon name="portfolio" className="text-gray-600" />
  <Icon name="alerts" className="text-gray-600" />
</nav>
```
