# Avatar Component

A versatile avatar component that displays user images or generates placeholder avatars from names.

## Usage

```tsx
import { Avatar } from '@/components/ui/Avatar';

// Basic usage
<Avatar name="John Doe" />

// With custom image
<Avatar src="https://example.com/avatar.jpg" name="John Doe" />

// With custom size
<Avatar name="John Doe" size={64} />

// With custom styling
<Avatar name="John Doe" className="border-2 border-blue-500" />
```

## Props

| Prop      | Type           | Description                                                |
| --------- | -------------- | ---------------------------------------------------------- |
| src       | string \| null | Optional URL for the avatar image                          |
| name      | string \| null | User's name (used for alt text and placeholder generation) |
| size      | number         | Size of the avatar in pixels (default: 32)                 |
| className | string         | Optional CSS classes to apply to the avatar container      |

## Features

- Displays provided image URL if available
- Generates placeholder avatars using ui-avatars.com when no image is provided
- Customizable size
- Responsive image loading with Next.js Image optimization
- Circular design with overflow protection

## Accessibility

- Uses semantic HTML with proper alt text
- Images are loaded with priority for important avatars
- Maintains aspect ratio for consistent display
- Supports custom styling while maintaining accessibility

## Testing

The component is tested for:

- Default rendering behavior
- Custom image source handling
- Size customization
- Custom styling application
- Accessibility compliance

## Examples

### Basic Avatar

```tsx
<Avatar name="John Doe" />
```

### Custom Image Avatar

```tsx
<Avatar src="https://example.com/avatar.jpg" name="John Doe" size={48} />
```

### Styled Avatar

```tsx
<Avatar name="John Doe" className="border-2 border-blue-500 shadow-lg" />
```
