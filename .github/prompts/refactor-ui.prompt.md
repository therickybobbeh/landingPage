# Next.js Component Refactoring Guide: Atomic Design Implementation with Bootstrap

## Overview
This guide outlines how to refactor a monolithic Next.js/React component into a structured hierarchy following Atomic Design principles, with proper TypeScript typing, accessibility, and CSS organization. **Bootstrap is the preferred styling framework** for all components.

## Atomic Design Hierarchy

### 1. Atoms
- **Definition**: Smallest, indivisible UI components
- **Examples**: Button, Input, Avatar, Typography, Icon, Badge
- **Location**: `components/atoms/`

### 2. Molecules
- **Definition**: Simple groups of UI atoms functioning together
- **Examples**: FormField (label + input), UserInfo (avatar + name), SearchBar
- **Location**: `components/molecules/`

### 3. Organisms
- **Definition**: Complex UI components composed of molecules and atoms
- **Examples**: UserCard, NavBar, Footer, CommentSection
- **Location**: `components/organisms/`

### 4. Templates
- **Definition**: Page-level layout components
- **Examples**: DashboardTemplate, ProfileTemplate, AuthLayout
- **Location**: `components/templates/`

### 5. Pages
- **Definition**: Actual Next.js pages utilizing templates and components
- **Location**: `app/` or `pages/` (depending on Next.js version)

## Style Organization
- **Framework**: Use Bootstrap components and utilities wherever possible
- **Component-specific styles**: Use `[component].module.css` only for styles not easily achievable with Bootstrap
- **Theme variables**: Place in `styles/theme.css` for Bootstrap customization (colors, spacings, etc.)
- **Utility classes**: Store additional utilities in `styles/utilities.css` only when Bootstrap utilities aren't sufficient
- **Component category styles**: Group in `styles/components/[category].css` (buttons.css, cards.css)

## Example Refactoring Task

### Original Component
```tsx
// src/components/UserCard.tsx
interface User {
  name: string;
  email: string;
  avatarUrl: string;
}

const UserCard = ({ user }: { user: User }) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <img src={user.avatarUrl} alt={`${user.name} avatar`} className="w-16 h-16 rounded-full" />
      <h2 className="mt-2 text-lg font-semibold">{user.name}</h2>
      <p className="text-sm text-gray-500">{user.email}</p>
      <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded">
        Message
      </button>
    </div>
  );
}

export default UserCard;
```

### Refactoring Requirements

1. **Split into atomic components**:
   - Create Avatar atom (using Bootstrap Image component)
   - Create Typography components (using Bootstrap Text components)
   - Create Button atom (using Bootstrap Button component)
   - Create UserInfo molecule
   - Maintain UserCard as an organism

2. **File organization**:
   - `/components/atoms/Avatar/Avatar.tsx` + `Avatar.module.css` (if needed)
   - `/components/atoms/Typography/Heading.tsx`
   - `/components/atoms/Typography/Text.tsx`
   - `/components/atoms/Button/Button.tsx`
   - `/components/molecules/UserInfo/UserInfo.tsx`
   - `/components/organisms/UserCard/UserCard.tsx`

3. **Bootstrap Integration**:
   - Use Bootstrap Card component as the base for UserCard
   - Use Bootstrap's Image component with appropriate classes for Avatar
   - Apply Bootstrap's typography classes for text elements
   - Use Bootstrap Button component with appropriate variants
   - Leverage Bootstrap's spacing utilities (m-*, p-*, etc.) rather than custom margins/paddings
   - Use Bootstrap's flexbox and grid systems for layout

4. **Theme extraction**:
   - Customize Bootstrap variables in `/styles/theme.css` for consistent colors, sizing, etc.
   - Override Bootstrap's Sass variables where appropriate for custom theming
   - Create any additional custom variables needed

5. **TypeScript**:
   - Create proper interfaces/types for all components
   - Export types from component files or dedicated `/types` folder
   - Use properly typed props including required vs optional

6. **Accessibility**:
   - Leverage Bootstrap's built-in accessibility features
   - Add any additional ARIA attributes where needed
   - Ensure proper heading hierarchy
   - Include proper button type attributes

7. **Component API Design**:
   - Make components flexible with appropriate props
   - Include sensible defaults
   - Use Bootstrap's variant props where applicable (e.g., Button variant="primary")

## Deliverables

1. All component files with proper TypeScript interfaces
2. Bootstrap integration for all components
3. Minimal custom CSS (only where Bootstrap cannot achieve the desired styling)
4. Updated theme files with Bootstrap variable customizations
5. Examples of using the components together
6. Brief explanation of your design decisions

## Example Structure After Refactoring

```
components/
├── atoms/
│   ├── Avatar/
│   │   ├── Avatar.tsx
│   │   └── Avatar.module.css (minimal, if needed)
│   ├── Button/
│   │   └── Button.tsx
│   └── Typography/
│       ├── Heading.tsx
│       └── Text.tsx
├── molecules/
│   └── UserInfo/
│       └── UserInfo.tsx
└── organisms/
    └── UserCard/
        └── UserCard.tsx
styles/
├── theme.css (Bootstrap customization)
├── utilities.css (supplemental utilities)
└── components/ (only if needed)
    ├── buttons.css
    └── cards.css
types/
└── user.ts
```

## Bootstrap Class Migration Examples

### From Tailwind/Custom CSS to Bootstrap

| Original Class       | Bootstrap Equivalent         |
|----------------------|------------------------------|
| `bg-white`           | `bg-white`                   |
| `rounded`            | `rounded`                    |
| `shadow`             | `shadow`                     |
| `p-4`                | `p-3`                        |
| `mt-2`               | `mt-2`                       |
| `text-lg`            | `fs-4`                       |
| `font-semibold`      | `fw-semibold`                |
| `text-gray-500`      | `text-secondary`             |
| `w-16 h-16`          | `width-64 height-64` or style with Bootstrap sizing |
| `rounded-full`       | `rounded-circle`             |
| `mt-3 px-4 py-2`     | `mt-3 px-3 py-2`             |
| `bg-blue-600`        | `btn-primary`                |
| `text-white`         | (included in btn-primary)    |
| `flex items-center`  | `d-flex align-items-center`  |
| `justify-between`    | `justify-content-between`    |