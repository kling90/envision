---
title: Badge
description: Use the Badge component to display small labels for status, notifications, or event counts.
---

## Overview

```html
<h1 class="env-text-heading-01">Hello <span class="env-badge">New</span></h1>
<h2 class="env-text-heading-02">Hello <span class="env-badge">New</span></h2>
```

## Variants

```html
<span class="env-badge">Primary</span>
<span class="env-badge env-badge--success">Success</span>
<span class="env-badge env-badge--warning">Warning</span>
<span class="env-badge env-badge--danger">Danger</span>
<span class="env-badge env-badge--info">Info</span>
```

### Status variants <span id="status-variant" class="offset-anchor"></span>

```html
<span class="env-badge env-badge--neutral">Neutral</span>
<span class="env-badge env-badge--active">Active</span>
<span class="env-badge env-badge--attention">Attention</span>
```

### Brand

<span class="env-badge env-badge--info">2023.01.1</span>

Brand color badges are available by using modifier `env-badge--brand` or `env-badge--brand-{n}`.

Valid values for `{n}` are: `05`, `10`, `15`, `20`, `25`, `30`, `35`, `40`, `45`, `50`, `55`, `60`, `65`, `70`, `75`, `80`
, `85`, `90`, `95`, `100`.

<div class="example-badges">
   <div class="env-m-bottom--small">
      <span class="env-badge env-badge--brand">Brand</span>
      <span class="env-badge env-badge--brand-05">Brand 05</span>
      <span class="env-badge env-badge--brand-10">Brand 10</span>
      <span class="env-badge env-badge--brand-15">Brand 15</span>
      <span class="env-badge env-badge--brand-20">Brand 20</span>
      <span class="env-badge env-badge--brand-25">Brand 25</span>
      <span class="env-badge env-badge--brand-30">Brand 30</span>
      <span class="env-badge env-badge--brand-35">Brand 35</span>
      <span class="env-badge env-badge--brand-40">Brand 40</span>
      <span class="env-badge env-badge--brand-45">Brand 45</span>
      <span class="env-badge env-badge--brand-50">Brand 50</span>
      <span class="env-badge env-badge--brand-55">Brand 55</span>
      <span class="env-badge env-badge--brand-60">Brand 60</span>
      <span class="env-badge env-badge--brand-65">Brand 65</span>
      <span class="env-badge env-badge--brand-70">Brand 70</span>
      <span class="env-badge env-badge--brand-75">Brand 75</span>
      <span class="env-badge env-badge--brand-80">Brand 80</span>
      <span class="env-badge env-badge--brand-85">Brand 85</span>
      <span class="env-badge env-badge--brand-90">Brand 90</span>
      <span class="env-badge env-badge--brand-95">Brand 95</span>
      <span class="env-badge env-badge--brand-100">Brand 100</span>
   </div>
</div>

### Status badge <span id="status-badge" class="offset-anchor"></span>

<span class="doc-badge doc-badge--info">2023.02.1</span>

Indicates active/inactive status. May be used on text elements and also in combination with [profile image](/components/profile-image/#status-badge).

```html
<p class="env-status-badge">Last logged in 5 h</p>
<p class="env-status-badge env-status-badge--active">Logged in</p>
```
