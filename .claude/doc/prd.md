# Product Requirements Document
## Responsive Sidebar Navigation Component

---

## ⚠️ CRITICAL IMPLEMENTATION RULE

**This PRD contains EXACT specifications. Implementation MUST follow these requirements PRECISELY with:**
- NO creative freedom
- NO improvisation  
- NO design decisions
- NO additional features, effects, or styling not explicitly mentioned

**Professional = Clean and specification-compliant, NOT over-designed**

---

## 1. PROJECT OVERVIEW

**Goal:** Create a responsive sidebar navigation for mrpay9.com casino website  
**Deliverables:** 3 standalone files (HTML, CSS, JS) - sidebar demo only  
**Reference:** https://mrpay9.com/

---

## 2. COLOR PALETTE

| Element | Color Code | Usage |
|---------|-----------|--------|
| Primary Background | `#417C6A` | Sidebar background |
| Accent | `#05FFBA` | Icons, hover states, active elements |
| Text | `#FFFFFF` | All text content |
| Submenu Background | `rgba(0,0,0,0.2)` | Games provider submenu |
| Hover Background | `rgba(5,255,186,0.1)` | Menu item hover |
| Backdrop Overlay | `rgba(0,0,0,0.5)` | Behind sidebar when open |

---

## 3. TYPOGRAPHY

- **Font:** Arial, sans-serif
- **Logo:** 26px, bold, #FFFFFF
- **Tagline:** 13px, normal, #FFFFFF, opacity 0.9
- **Menu Items:** 16px, normal, #FFFFFF  
- **Section Titles:** 18px, bold, #FFFFFF
- **Top Actions:** 14px, medium, #FFFFFF
- **Submenu Items:** 16px, normal, #FFFFFF

---

## 4. LAYOUT & SPACING

- **Sidebar Width:** 320px (all screens)
- **Sidebar Padding:** 24px all sides
- **Section Spacing:** 32px between sections
- **Menu Item Height:** 52px
- **Menu Item Padding:** 16px horizontal
- **Icon Size:** 20px × 20px
- **Icon-Text Gap:** 12px
- **Border Radius:** 8px (buttons/interactive)

---

## 5. COMPONENT STRUCTURE

### 5.1 Sidebar Header
```
┌─────────────────────────────┐
│ mrpay9              [X]     │
│ Feel The Thrill...          │
└─────────────────────────────┘
```
- Logo: "mrpay9" text (26px, bold)
- Tagline: "Feel The Thrill Of Jackpot Spin At GTX33"
- Close Button: Top-right (20px from edges), 24px, white → #05FFBA on hover

### 5.2 Top Actions (2×2 Grid)
```
┌──────────┬──────────┐
│  Icon 1  │  Icon 2  │
│  Label   │  Label   │
├──────────┼──────────┤
│  Icon 3  │  Icon 4  │
│  Label   │  Label   │
└──────────┴──────────┘
```

**Grid:** 2 columns, 12px gap  
**Button:** Height 70px, border-radius 8px  
**Background:** `rgba(255,255,255,0.1)` → `rgba(5,255,186,0.2)` on hover  
**Icon:** 48×48px placeholder (centered above text)

**Buttons:**
1. Lucky Spin → `onclick="promopage(2)"`
2. Treasure Chest → `onclick="promopage(5)"`
3. Daily Mission → `onclick="promopage(6)"`
4. Plinko Ball → `onclick="promopage(7)"`

**Required Script:**
```html
<input type="hidden" value="@UserID" id="promoUserID" ref="jdkUserId">
<script>[exact script from Excel - include full obfuscated promopage() function]</script>
```

### 5.3 Main Navigation Menu (10 Items)

| # | Label | Icon | Link |
|---|-------|------|------|
| 1 | Home | `fa-home` | `/home` |
| 2 | Deposit | `fa-wallet` | `/deposit` |
| 3 | Games Provider | `fa-gamepad` + `fa-chevron-down` | Expandable submenu |
| 4 | Game RTP | `fa-chart-bar` | `/gamertp` |
| 5 | Trending Games | `fa-fire` | `/leaderboard` |
| 6 | Promotion | `fa-gift` | `/promotion` |
| 7 | Partnership | `fa-handshake` | `https://vgs96.com/` |
| 8 | Download Mobile App | `fa-mobile-alt` | `https://www.mrpay9auh5api.live/uploads/appwrap.html` |
| 9 | Movie Club | `fa-film` | `https://mrpay9movies.com/` |
| 10 | Movie 18+ | `fa-video` | `https://mrpay9pornn.com/` |

**Styling:**
- Icon color: `#05FFBA`
- Hover: `background: rgba(5,255,186,0.1)`
- Transition: `0.2s ease`

#### 5.3.1 Games Provider Submenu
- **Behavior:** Click to expand/collapse (accordion)
- **Chevron:** Rotates 180° when expanded
- **Background:** `rgba(0,0,0,0.2)`
- **Indent:** 32px from left
- **Max Height:** 400px (scrollable)
- **Items:** All 50+ providers from Excel sheet 2
- **Item Height:** 48px each

### 5.4 Exclusive Partners Section

**Title:** "Exclusive Partners" (18px, bold)  
**Layout:** Vertical stack

**Partners:**
1. King88Pokies - Link: `https://king88pokies.com/RFVIPPARTNERSHIP`  
   Image: `https://static.gwvkyk.com/media/e2731f13220960550e40a.png`

2. Enjoy2Win99 - Link: `https://enjoy2win99.com/RFVVIPPARTNER`  
   Image: `https://static.gwvkyk.com/media/a66b9b23220968d476cae.png`

3. King88.bet - Link: `https://www.king88.bet/`  
   Image: `https://static.gwvkyk.com/media/c7a9c63322096cd8c7978.png`

**Button Style:**
- Height: 60px
- Border-radius: 8px
- Background: `rgba(255,255,255,0.1)`
- Hover: `rgba(5,255,186,0.2)`
- Image: Centered, max-height 40px

### 5.5 Top Tournament Ranking Section

**Title:** "Top Tournament Ranking" (18px, bold)

**Links:**
- Top Deposit Ranking → `https://mrpay9.com/topdeposit` (new tab)
- Top Referral Ranking → `https://mrpay9.com/topreferral` (new tab)

**Style:** Simple text links, 16px, white, underline on hover

### 5.6 Social Media Section

**Title:** "Follow Us ON" (18px, bold)

**Buttons:**
- Facebook → `https://www.facebook.com/profile.php?id=61571883860829`  
  Icon: `fa-facebook` (Font Awesome)

- Telegram → `https://t.me/mrpay9australia`  
  Icon: `fa-telegram` (Font Awesome)

**Button Style:**
- Height: 50px
- Border-radius: 8px
- Facebook: Background `#1877F2`
- Telegram: Background `#0088CC`
- Hover: Darken by 10%
- Icon: 20px, left-aligned, 12px from text

---

## 6. ANIMATIONS & INTERACTIONS

### 6.1 Sidebar Behavior
- **Default State:** Hidden (transform: translateX(-100%))
- **Open:** Slide in from left
- **Duration:** 300ms
- **Easing:** ease-in-out
- **Overlay:** Fade in simultaneously (300ms)

### 6.2 Hamburger Menu Button
- **Position:** Fixed, top-left (20px from edges)
- **Size:** 48×48px
- **Icon:** 3-line hamburger (Font Awesome `fa-bars`)
- **Color:** `#05FFBA`
- **Background:** `rgba(65,124,106,0.9)`
- **Border-radius:** 8px
- **Hover:** Background lightens to `rgba(65,124,106,1)`

### 6.3 Close Triggers
- Click X button
- Click backdrop overlay
- Click any menu item (except Games Provider)
- ESC key

### 6.4 Games Provider Submenu
- **Animation:** Slide down (max-height transition)
- **Duration:** 300ms
- **Chevron rotation:** 300ms

---

## 7. RESPONSIVE BEHAVIOR

**All Breakpoints:**
- Sidebar: 320px width
- Position: Fixed left
- Overlay: Full viewport
- Scroll: Sidebar scrollable if content exceeds viewport height

**Mobile (<768px):** Standard behavior  
**Tablet (768-1024px):** Standard behavior  
**Desktop (>1024px):** Standard behavior

---

## 8. TECHNICAL REQUIREMENTS

### 8.1 HTML Structure
```
<div id="hamburger-btn">☰</div>
<div id="backdrop-overlay"></div>
<div id="sidebar">
  <div class="sidebar-header">
    <div class="logo">mrpay9</div>
    <div class="close-btn">×</div>
    <div class="tagline">...</div>
  </div>
  <div class="top-actions">[4 buttons]</div>
  <nav class="main-menu">[10 items + submenu]</nav>
  <div class="partners-section">[3 partners]</div>
  <div class="tournament-section">[2 links]</div>
  <div class="social-section">[2 buttons]</div>
</div>
```

### 8.2 CSS Organization
- Use CSS custom properties for colors
- Mobile-first approach
- BEM naming convention
- No CSS frameworks (pure CSS only)

### 8.3 JavaScript Functionality
- Vanilla JS (no jQuery/libraries)
- Event delegation where appropriate
- Smooth animations via CSS transitions
- Keyboard accessibility (ESC key)

### 8.4 External Dependencies
- Font Awesome 6.x (CDN for icons)
- No other external libraries

---

## 9. GAME PROVIDER LIST

All 50+ game providers from Excel sheet 2:

3OAKS, 759GAMING, 3WIN8, 918KAYA, 888KING, ACE333, AIGAMING, ACEWIN, BNG, BOOONGO, BONZA, BGAMING, BESOFT, BTGAMING, BIGPOT, CQ9, CROWDPLAY, CLOTPLAY, CREATIVEGAMING, CT855, DRAGOONSOFT, DREAMGAMING, EVO888H5, FACHAI, HABANERO, HACKSAW, IBEX, ILOVEU, JILI, JDB, JOKER, LIVE22, IMPERIUM, MINITEDGAMING, MICROGAMING, MARIO, MEGAH5, M8BET, NOVOMATIC, NEXTSPIN, PLAYSON, PEGASUS, PLAYSTAR, PRAGMATIC, RICHGAMING, SPADEGAMING, SCRATCH, UUSLOT, VPOWER, WAZDAN, WFGAMING, WCASINO, WOWGAMING, WWBET, XE88, YEEBET

Each links to their respective URL from Excel (e.g., `/gameList/PROVIDER/SLOT/X/X` or `/home`)

---

## 10. FILES TO DELIVER

1. **sidebar.html** - Complete demo page with sidebar
2. **sidebar.css** - All styles (no inline CSS)
3. **sidebar.js** - All functionality (no inline JS)

---

## 11. DO NOT INCLUDE

❌ Animations beyond specified  
❌ Extra hover effects  
❌ Gradients not mentioned  
❌ Box shadows beyond sidebar shadow  
❌ Custom scrollbars  
❌ Loading states  
❌ Tooltips  
❌ Badges/counters  
❌ Search functionality  
❌ User profile section  
❌ Any feature not explicitly specified

---

## 12. FINAL CHECKLIST

- [ ] Exact colors (#417C6A, #05FFBA, #FFFFFF)
- [ ] All 10 menu items with correct icons
- [ ] All 50+ game providers in submenu
- [ ] 4 top action buttons with onclick handlers
- [ ] Hidden input + promopage() script included
- [ ] 3 partner buttons with images
- [ ] 2 tournament links (target="_blank")
- [ ] 2 social buttons (Facebook, Telegram)
- [ ] Sidebar slides from left (300ms)
- [ ] Closes on: X, backdrop, menu click, ESC
- [ ] Hamburger button fixed top-left
- [ ] Font Awesome icons loaded
- [ ] Responsive: 320px sidebar width
- [ ] Clean code, no over-design

---

**END OF PRD**