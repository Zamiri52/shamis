---
name: Shamstrade Core
colors:
  surface: '#fbf8fc'
  surface-dim: '#dbd9dd'
  surface-bright: '#fbf8fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f7'
  surface-container: '#efedf1'
  surface-container-high: '#e9e7eb'
  surface-container-highest: '#e4e2e6'
  on-surface: '#1b1b1e'
  on-surface-variant: '#44464e'
  inverse-surface: '#303033'
  inverse-on-surface: '#f2f0f4'
  outline: '#75777f'
  outline-variant: '#c5c6cf'
  surface-tint: '#4c5e88'
  primary: '#14284f'
  on-primary: '#ffffff'
  primary-container: '#2c3e66'
  on-primary-container: '#98aad8'
  inverse-primary: '#b4c6f6'
  secondary: '#455e91'
  on-secondary: '#ffffff'
  secondary-container: '#abc3fe'
  on-secondary-container: '#375082'
  tertiary: '#352700'
  on-tertiary: '#ffffff'
  tertiary-container: '#503c00'
  on-tertiary-container: '#c4a762'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#b4c6f6'
  on-primary-fixed: '#041a40'
  on-primary-fixed-variant: '#34466e'
  secondary-fixed: '#d9e2ff'
  secondary-fixed-dim: '#afc6ff'
  on-secondary-fixed: '#001a43'
  on-secondary-fixed-variant: '#2d4678'
  tertiary-fixed: '#ffdf97'
  tertiary-fixed-dim: '#e2c37c'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#594407'
  background: '#fbf8fc'
  on-background: '#1b1b1e'
  surface-variant: '#e4e2e6'
typography:
  h1:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  container-max: 1280px
---

## Brand & Style

The design system is engineered to project stability, efficiency, and professional scale for Shamstrade LLC. It targets B2B wholesale buyers who value reliability and clarity over decorative flair. The aesthetic is rooted in **Corporate Modernism**—utilizing a disciplined grid, generous white space, and a high-contrast palette to establish an authoritative digital presence. 

The emotional response should be one of "effortless commerce." By stripping away unnecessary visual noise and focusing on structured information hierarchy, the design system ensures that the products and the brand's logistics capabilities remain the primary focus. This is a "silent partner" interface: dependable, clean, and meticulously organized.

## Colors

This design system utilizes a high-contrast corporate palette. The primary **Corporate Blue (#2c3e66)** is the anchor of the identity, used for the logo, primary actions, and navigational headers to signal trust. 

- **Primary:** Used for brand-critical elements and key CTAs.
- **Backgrounds:** Pure white is reserved for primary content areas and cards to maximize readability. The light gray (#f8f9fa) is used to differentiate page sections and provide a soft backdrop for the white cards.
- **Neutrals:** A refined scale of grays handles borders and secondary text, ensuring that the interface feels "airy" yet structured.

## Typography

The design system exclusively uses **Inter** to ensure a neutral, highly readable technical feel across all platforms. The typographic scale is optimized for information density common in wholesale trading environments. 

Headlines use a bold weight and slight negative letter-spacing to appear "tight" and authoritative. Body text is prioritized for legibility with a comfortable line height. Labels and small metadata should use medium weights to maintain visibility even at smaller scales.

## Layout & Spacing

The design system employs a **Fixed-Fluid Hybrid Grid**. Content is housed within a maximum width container (1280px) centered on the screen, while section backgrounds extend to the edges of the viewport.

- **Grid:** A 12-column system is used for desktop, collapsing to 4 columns on mobile.
- **Rhythm:** An 8px base unit dictates all margins and padding. 
- **Density:** We favor generous outer margins (48px+) to prevent the interface from feeling cluttered, while keeping internal component spacing tight (12px-24px) to show more data at a glance.

## Elevation & Depth

To maintain a clean, professional aesthetic, this design system avoids heavy gradients or complex shadows. Depth is communicated through **Tonal Layering** and **Subtle Ambient Shadows**.

- **Level 0 (Floor):** Section background (#f8f9fa).
- **Level 1 (Card):** White surfaces with a very soft, diffused shadow (0px 4px 12px rgba(0,0,0,0.05)).
- **Level 2 (Hover):** Active cards or buttons increase shadow depth (0px 8px 20px rgba(0,0,0,0.08)) and may include a 1px border stroke in the primary blue.
- **Level 3 (Overlay):** Modals and dropdowns use a slightly darker shadow to separate from the main UI.

## Shapes

The shape language is defined by a consistent **8px (rounded-lg)** corner radius. This "soft-square" approach strikes a balance between the friendliness of fully rounded shapes and the clinical rigidity of sharp corners. 

Buttons, input fields, product cards, and image containers must all adhere to this 8px standard to maintain visual harmony. Large containers (like hero banners) may scale up to 16px (rounded-xl) for a more modern feel.

## Components

### Buttons
Primary buttons use the Corporate Blue background with white text. They should include a subtle transition effect on hover, deepening the blue slightly. Secondary buttons use a transparent background with a 1px border in Corporate Blue.

### Input Fields
Fields should be minimalist: a 1px light gray border that turns Corporate Blue on focus. Labels sit above the field in a bold, smaller font size.

### Cards
Product cards are the core of the wholesale experience. They feature a white background, 8px rounded corners, and a subtle shadow. Content should be vertically stacked: Image > Category (Label) > Product Name (H3) > Price/MOQ (Body Bold) > CTA Button.

### Icons
Use **FontAwesome 6** (Pro or Free) in a "Regular" or "Light" weight. Icons should be used sparingly as signposts, never as a replacement for clear text labels.

### Chips/Badges
Use chips for "In Stock," "New," or "Bulk Discount" indicators. These should have a light tinted background of the primary color with dark text to ensure they don't compete with main CTAs.