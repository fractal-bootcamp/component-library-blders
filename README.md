# Template

Component
Description
Behavior/props
Default Animation

# Components

## Button

Behavior/props:

- Different styles (primary, secondary, tertiary)
- Different sizes (small, medium, large)
- Disabled state
- Loading state with spinner
- Click event handler
- Icon (left or right)
- Tooltip on hover

Default Animation:

- Button click animation with a slight scale-down effect.
- Hover animation to change background color smoothly.

## Text Input

A standard text field input for text and passwords

Behavior/props:

- Validation states (error, success)
- Toggle hidden password option
- Disabled state
- Prefix and suffix icons
- Popover info icon
- Placeholder text
- Value and onChange handler

Default Animation:

- Focus animation with border color change and slight shadow.
- Shake animation on validation error.

## Dropdown

A dropdown menu for selecting options from a list.

- Single-select and multi-select modes
- Searchable options
- Custom option renderer
- Disabled state
- Clear selection button
- Keyboard navigation
  Dropdown opening with a smooth height expansion.
  Tooltip
  A tooltip for displaying informative messages.
- Customizable positions (top, bottom, left, right)
- Trigger on hover or focus
- Custom content rendering
- Delay before showing/hiding
  Fade in/fade out animation
  Accordion
  An accordion for collapsing and expanding sections of content.
- Multiple or single item expansion
- Customizable headers
- Default state
- Nested accordions
  Smooth height adjustment on expand/collapse
  Chevron rotation on toggle.

Skeleton Screen
A placeholder skeleton screen for loading states.

- Skeleton shapes (rectangles, circles, lines)
- Different sizes and layouts
- Animation speed
  Pulsing animation to indicate loading
  Shimmer effect across skeleton elements

Alert
A toast for transient messages.

- Different type defaults (success, error, warning, info)
- Auto-dismiss with customizable duration
- Manual dismiss button
- Display options for multiple notifications (all at once, queue, etc)
  Slide-in from the top or bottom on show
  Slide-out on dismiss

Progress bar
A progress bar to indicate the completion percentage of a task.

- Color
- Linear / Circular
- Customizable progress percentage
- Color customization based on progress
- Striped and animated stripes option
  Smooth progress increase animation
  Pulse effect on completion.

File Uploader
A file uploader for uploading files with drag-and-drop support.

- Drag-and-drop area
- Multiple file upload support
- File type validation
- Error handling for unsupported files
  Drop area highlight animation on file drag-over.

Timeline
A timeline component for displaying chronological events.

- Vertical or horizontal orientation
- Customizable event markers
- Detailed event descriptions on click or hover
- Support for images and icons in events
- Collapsible event groups
  (Vertical) Slide-in animation for events on scroll.
  Highlight animation on event hover.

Rating
A rating component for collecting user feedback with star or emoji ratings.

- Customizable rating scale (e.g., 1-5 stars)
- Half-star or precise ratings
- Different icons (stars, hearts, emojis)
- Tooltip on hover for each rating level (Customizable description for each)
- Disabled and read-only states
  Star fill animation on rating.
  Bounce effect on star hover.
