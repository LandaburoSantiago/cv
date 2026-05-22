---
name: Santiago Martin Landaburo Portfolio
description: Warm, product-minded portfolio with authored clarity and tactile accents.
colors:
  paper: "oklch(97% 0.012 82)"
  paper-strong: "oklch(94% 0.018 82)"
  paper-deep: "oklch(90% 0.022 80)"
  ink: "oklch(29% 0.022 252)"
  ink-soft: "oklch(43% 0.02 248)"
  ink-muted: "oklch(56% 0.016 245)"
  line: "oklch(78% 0.02 78)"
  line-strong: "oklch(66% 0.03 68)"
  terracotta-signal: "oklch(64% 0.145 42)"
  terracotta-signal-deep: "oklch(56% 0.128 38)"
  terracotta-wash: "oklch(92% 0.035 48)"
  field-wash: "oklch(86% 0.055 122)"
  field-soft: "oklch(94% 0.028 118)"
  sky-soft: "oklch(93% 0.028 235)"
typography:
  display:
    fontFamily: '"Sora", "Segoe UI", sans-serif'
    fontSize: "clamp(3.4rem, 6.6vw, 6.4rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  headline:
    fontFamily: '"Sora", "Segoe UI", sans-serif'
    fontSize: "clamp(2.2rem, 3vw, 3.15rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  title:
    fontFamily: '"Sora", "Segoe UI", sans-serif'
    fontSize: "clamp(1.55rem, 2.2vw, 2.2rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  body:
    fontFamily: '"Manrope", "Segoe UI", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.68
  label:
    fontFamily: '"Sora", "Segoe UI", sans-serif'
    fontSize: "0.8rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.12em"
rounded:
  sm: "12px"
  md: "18px"
  lg: "28px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "10px"
  md: "16px"
  lg: "28px"
  xl: "36px"
components:
  button-primary:
    backgroundColor: "{colors.terracotta-signal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "11px 16px"
  button-primary-hover:
    backgroundColor: "{colors.terracotta-signal-deep}"
  button-secondary:
    backgroundColor: "{colors.paper-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "11px 16px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
    padding: "11px 16px"
  chip-default:
    backgroundColor: "{colors.paper-strong}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
    padding: "6px 10px"
  panel-default:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "28px"
  lang-active:
    backgroundColor: "{colors.terracotta-wash}"
    textColor: "{colors.terracotta-signal-deep}"
    rounded: "{rounded.pill}"
    padding: "6px 10px"
---

# Design System: Santiago Martin Landaburo Portfolio

## 1. Overview

**Creative North Star: "Field Notes"**

This system should feel like a product engineer's notebook made public: warm, specific, and grounded in real work. It is not polished into corporate anonymity, and it is not chasing futuristic spectacle. The visual language stays close to paper, margin, marker, and measured emphasis, so the site reads as authored judgment rather than a portfolio template.

The system communicates technical confidence through hierarchy, restraint, and structure. Large Sora headlines establish conviction, Manrope keeps dense content legible, and terracotta carries the moments of emphasis that matter. Depth comes from tonal layering instead of heavy shadow stacks, which keeps the interface calm while still giving featured blocks enough presence.

This system explicitly rejects generic dark SaaS aesthetics with blue glow, floating panels, and interchangeable startup visuals. It also rejects portfolio treatments that feel like a polished template, empty minimalism that removes personality and specificity, and decorative futurism that competes with the actual content.

**Key Characteristics:**
- Warm paper-toned surfaces with cool ink and a terracotta accent.
- Strong typographic hierarchy, especially in hero and section openers.
- Tactile and confident controls, not glossy or ornamental.
- Tonal layering and borders used more than dramatic shadows.
- Structured rhythm through numbered sections, ruled lines, and varied spacing.

## 2. Colors

The palette feels like annotated working material: warm base layers, quiet blue-gray text, and a single terracotta accent that behaves like a marker instead of ambient glow.

### Primary
- **Terracotta Signal** (`oklch(64% 0.145 42)`): The main accent for primary actions, active navigation, section emphasis, and directional details. It should be seen in short, deliberate bursts.

### Secondary
- **Field Wash** (`oklch(86% 0.055 122)`): Used as a soft organic counterpoint inside project visuals and agricultural or operational imagery moments, never as the main interface accent.

### Tertiary
- **Sky Soft** (`oklch(93% 0.028 235)`): Used sparingly in cool background washes and status support, mainly to keep the palette from becoming monochromatically warm.

### Neutral
- **Paper** (`oklch(97% 0.012 82)`): The default page ground.
- **Paper Strong** (`oklch(94% 0.018 82)`): Raised quiet surfaces such as pills, secondary buttons, and soft containers.
- **Paper Deep** (`oklch(90% 0.022 80)`): The lower end of the neutral surface range for visuals and gradient landings.
- **Ink** (`oklch(29% 0.022 252)`): Main heading and control text.
- **Ink Soft** (`oklch(43% 0.02 248)`): Body copy and explanatory content.
- **Ink Muted** (`oklch(56% 0.016 245)`): Metadata, secondary labels, and quiet utility text.
- **Line** (`oklch(78% 0.02 78)`): Standard stroke color for separators and borders.
- **Line Strong** (`oklch(66% 0.03 68)`): Hover and stronger outline state.

### Named Rules
**The Marker Rule.** Terracotta Signal is used as a marker, not a fog. It belongs on actions, active states, numbered emphasis, and short accents, not on full-screen glow treatments.

**The Warm Base Rule.** Every neutral is slightly hue-biased toward the warm paper world. Pure white and cold gray break the system.

## 3. Typography

**Display Font:** Sora (with Segoe UI and sans-serif fallbacks)
**Body Font:** Manrope (with Segoe UI and sans-serif fallbacks)
**Label/Mono Font:** No separate mono voice in the core system

**Character:** The pairing is contemporary and decisive without becoming sterile. Sora handles authority and authored emphasis; Manrope carries longer reading with enough softness to keep the experience human.

### Hierarchy
- **Display** (700, `clamp(3.4rem, 6.6vw, 6.4rem)`, 1.05): Reserved for hero-scale declarations and major first-impression moments.
- **Headline** (700, `clamp(2.2rem, 3vw, 3.15rem)`, 1.05): Used for section openers and major narrative pivots.
- **Title** (700, `clamp(1.55rem, 2.2vw, 2.2rem)`, 1.05): Used for project names, card titles, and local section titles.
- **Body** (400, `1rem`, 1.68): Used for descriptive copy and list items. Paragraph measure should stay near 65-72ch.
- **Label** (700, `0.8rem`, `0.12em`, mostly uppercase): Used for section numbers, metadata, and small system labels.

### Named Rules
**The One Big Voice Rule.** Only one element per viewport should behave like display type. When everything shouts, the portfolio sounds templated.

**The Quiet Metadata Rule.** Labels and metadata stay small and controlled. They support structure; they do not become decoration.

## 4. Elevation

This system uses tonal layering first and shadow second. Surfaces separate through temperature shifts, borders, and soft gradient changes before they rely on shadow. Shadows appear as ambient support on featured containers and interactive lifts, not as a default material language.

### Shadow Vocabulary
- **Ambient Low** (`0 12px 30px oklch(24% 0.02 248 / 0.06)`): Default support shadow for panels, cards, and contained surfaces.
- **Ambient Mid** (`0 24px 54px oklch(24% 0.02 248 / 0.1)`): Used for hovered personal project cards and moments that need slightly stronger lift.
- **Action Lift** (`0 16px 28px oklch(62% 0.12 42 / 0.18)`): Reserved for the primary CTA so the accent feels intentional and touchable.

### Named Rules
**The Tonal Layering Rule.** Depth should be readable even with shadows removed. If a surface only works because of shadow, it is underdesigned.

## 5. Components

Buttons, chips, and panels should feel tactile and confident. They are clean, rounded, and definite, but never glossy or over-modeled.

### Buttons
- **Shape:** Full pill (`999px`) with compact, deliberate padding (`11px 16px`).
- **Primary:** Terracotta Signal background with dark ink text. It carries the system's clearest call to action.
- **Hover / Focus:** Slight upward movement, deeper terracotta fill, and preserved clarity over spectacle.
- **Secondary / Ghost:** Secondary uses a paper-toned filled surface with border support. Ghost stays transparent with a quiet outline.

### Chips
- **Style:** Pills with paper-toned backgrounds, soft ink text, and fine border separation.
- **State:** Status chips use palette-specific washes like Field Soft or Sky Soft, but keep the same silhouette as the rest of the system.

### Cards / Containers
- **Corner Style:** Rounded and generous (`18px` to `28px`) without becoming bubbly.
- **Background:** Warm paper surfaces with light tonal shifts rather than stark flat white.
- **Shadow Strategy:** Ambient Low by default, Ambient Mid only on hover or featured emphasis.
- **Border:** Fine warm line work is the main containment device.
- **Internal Padding:** Usually `28px`, compressed to `24px` on smaller screens.

### Inputs / Fields
- **Style:** Language switch is the canonical input-like control: pill geometry, subtle border, warm background, and a clear active fill.
- **Focus:** Focus should be handled through contrast and clean state change, not glow.
- **Error / Disabled:** Not currently defined in code and should inherit the same tonal layering logic when introduced.

### Navigation
- **Style:** Horizontal text navigation with restrained weight and a single underline accent on hover or active focus.
- **Typography:** Sora is reserved for the brand mark; navigation labels use body-adjacent sizing with medium-to-strong weight.
- **Mobile Treatment:** The site currently simplifies by hiding the full nav under `900px` while keeping the brand and language switch visible.

### Signature Component
- **Working Style Panel:** The hero-side priorities panel is the clearest signature container. It mixes editorial numbering, tonal layering, and clear list rhythm to turn generic bullet content into authored structure.

## 6. Do's and Don'ts

### Do:
- **Do** keep the warm-paper base and cool-ink text relationship intact.
- **Do** use Terracotta Signal for actions, active states, and short emphasis runs.
- **Do** preserve the numbered section grammar and ruled separators when extending the page.
- **Do** keep paragraph measure controlled, ideally between 65ch and 72ch.
- **Do** make new components feel tactile and confident, with clear borders, rounded geometry, and restrained motion.

### Don't:
- **Don't** reintroduce generic dark SaaS aesthetics with blue glow, floating panels, and interchangeable startup visuals.
- **Don't** make new sections feel like a polished template rather than a personal point of view.
- **Don't** strip the interface into empty minimalism that removes personality and specificity.
- **Don't** add decorative futurism that competes with the actual content.
- **Don't** use gradient text, heavy glassmorphism, oversized side-stripe borders, or repeated identical card grids.
