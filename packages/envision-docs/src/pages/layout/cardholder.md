---
title: Cardholder
description: A Cardholder utilizes CSS grid or flexbox to create a responsive card grid that adapts to available space.
---

Cardholders may be used to display any type of content, but [Cards](/components/cards/) are recommended.

## Cardholder Grid

Cardholder Grid uses CSS Grid. Cardholder slots are _not_ required.
Columns will always be equal width and aligned.

```html
<div class="example-demo-dark">
   <div class="env-cardholder-grid">

         <div class="env-card env-block env-shadow-small">
            <div class="env-card__body">
               <img
                  class="env-card__image env-profile-image env-profile-image--small"
                  src="https://envisionui.io/placeholders/profile/200x200/01.webp"
                  alt="Example profile image"
               />
               <h2 class="env-ui-text-subheading">
                  Lorem Ipsumsson
               </h2>
               <p class="env-ui-text-caption">
                  Utvecklare
               </p>
               <p class="env-ui-text-caption">
                  <a href="#" class="env-link env-link-secondary"
                     >lorem@domain.com</a
                  >
               </p>
               <p class="env-ui-text-caption">
                  <a href="#" class="env-link env-link-secondary"
                     >012-345 67 89</a
                  >
               </p>
            </div>
         </div>

         <div class="env-card env-block env-shadow-small">
            <div class="env-card__body">
               <img
                  class="env-card__image env-profile-image env-profile-image--small"
                  src="https://envisionui.io/placeholders/profile/200x200/02.webp"
                  alt="Example profile image"
               />
               <h2 class="env-ui-text-subheading">
                  Lorem Ipsumsson
               </h2>
               <p class="env-ui-text-caption">
                  <a href="#" class="env-link env-link-secondary"
                     >012-345 67 89</a
                  >
               </p>
            </div>
         </div>

         <div class="env-card env-block env-shadow-small">
            <div class="env-card__body">
               <img
                  class="env-card__image env-profile-image env-profile-image--small"
                  src="https://envisionui.io/placeholders/profile/200x200/04.webp"
                  alt="Example profile image"
               />
               <h2 class="env-ui-text-subheading">
                  Lorem Ipsumsson
               </h2>
               <p class="env-ui-text-caption">
                  Utvecklare
               </p>
               <p class="env-ui-text-caption">
                  <a href="#" class="env-link env-link-secondary"
                     >012-345 67 89</a
                  >
               </p>
            </div>
         </div>

      </div>
   </div>
</div>
```

### Cardholder Grid examples

There are several modifiers for the Cardholder Grid that controls the Cardholder columns and gaps:

`.env-cardholder-grid--N` - where N is a number that controls how many slots
the Cardholder will display at most in one row.
Possible values for N are `2`, `3`, `4`, `5`, `6`, `8`.

`.env-cardholder-grid--column-large` - Larger columns (&times;1.25)

`.env-cardholder-grid--column-small` - Smaller columns (&times;0.75)

`.env-cardholder-grid--gap-large` - Larger column gap (&times;2)

`.env-cardholder-grid--gap-small` - Smaller column gap (&times;0.5)

`.env-cardholder-grid--gap-none` - No column gap

To further adjust the size and spacing of the columns there are two CSS variables that may be set:

```CSS
.your-cardholder-grid-container {
   /*
   column-width is used to auto fit columns.
   */
   --env-cardholder-grid-column-width: 20em;
   --env-cardholder-grid-gap: var(--env-spacing-medium);
}
```

Below are a few examples that you may resize and see how the columns adapt to the given space.

<div class="demo-cardholder-grid">
   <h4 class="doc-heading-4">Default Cardholder Grid</h4>
   <p><code class="language-text">.env-cardholder-grid</code></p>
   <div class="demo-cardholder-grid__resizeable">   
   <div class="env-cardholder-grid">
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
   </div>
   </div>
</div>

<div class="demo-cardholder-grid">
   <h4 class="doc-heading-4">Six columns</h4>
   <p><code class="language-text">.env-cardholder-grid.env-cardholder-grid--6</code></p>
   <div class="demo-cardholder-grid__resizeable">   
   <div class="env-cardholder-grid env-cardholder-grid--6">
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
   </div>
   </div>
</div>

<div class="demo-cardholder-grid">
   <h4 class="doc-heading-4">Small column width</h4>
   <p><code class="language-text">.env-cardholder-grid.env-cardholder-grid--column-small</code></p>
   <div class="demo-cardholder-grid__resizeable">   
   <div class="env-cardholder-grid env-cardholder-grid--column-small">
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
   </div>
   </div>
</div>

<div class="demo-cardholder-grid">
   <h4 class="doc-heading-4">Large column width</h4>
   <p><code class="language-text">.env-cardholder-grid.env-cardholder-grid--column-large</code></p>
   <div class="demo-cardholder-grid__resizeable">   
   <div class="env-cardholder-grid env-cardholder-grid--column-large">
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
   </div>
   </div>
</div>

<div class="demo-cardholder-grid">
   <h4 class="doc-heading-4">Large column gap</h4>
   <p><code class="language-text">.env-cardholder-grid.env-cardholder-grid--gap-large</code></p>
   <div class="demo-cardholder-grid__resizeable">   
   <div class="env-cardholder-grid env-cardholder-grid--gap-large">
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
   </div>
   </div>
</div>

<div class="demo-cardholder-grid">
   <h4 class="doc-heading-4">Small column gap</h4>
   <p><code class="language-text">.env-cardholder-grid.env-cardholder-grid--gap-small</code></p>
   <div class="demo-cardholder-grid__resizeable">   
   <div class="env-cardholder-grid env-cardholder-grid--gap-small">
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
   </div>
   </div>
</div>

<div class="demo-cardholder-grid">
   <h4 class="doc-heading-4">No column gap</h4>
   <p><code class="language-text">.env-cardholder-grid.env-cardholder-grid--gap-none</code></p>
   <div class="demo-cardholder-grid__resizeable">   
   <div class="env-cardholder-grid env-cardholder-grid--gap-none">
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
   </div>
   </div>
</div>

<div class="demo-cardholder-grid">
   <h4 class="doc-heading-4">Combined modifiers</h4>
   <p>Small column width, large column gap, 8 columns max</p>
   <div class="demo-cardholder-grid__resizeable">   
   <div class="env-cardholder-grid env-cardholder-grid--column-small env-cardholder-grid--gap-large env-cardholder-grid--8">
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
      <div class="env-card"></div>
   </div>
   </div>
</div>

## Flexbox Cardholder

A Cardholder will use flexbox to make a grid of Cards that adapt to the given space.
Use one `env-cardholder__slot` to hold each Card. See configuration options below.

```html
<div class="example-demo-dark">
   <div class="env-cardholder env-cardholder--3">
      <div class="env-cardholder__slot">
         <div class="env-card env-block env-shadow-small">
            <div class="env-card__body">
               <img
                  class="env-card__image env-profile-image env-profile-image--small"
                  src="https://envisionui.io/placeholders/profile/200x200/05.webp"
                  alt="Example profile image"
               />
               <h2 class="env-ui-text-subheading">Lorem Ipsumsson</h2>
               <p class="env-ui-text-caption">Utvecklare</p>
               <p class="env-ui-text-caption">
                  <a href="#" class="env-link env-link-secondary"
                     >lorem@domain.com</a
                  >
               </p>
               <p class="env-ui-text-caption">
                  <a href="#" class="env-link env-link-secondary"
                     >012-345 67 89</a
                  >
               </p>
            </div>
         </div>
      </div>
      <div class="env-cardholder__slot">
         <div class="env-card env-block env-shadow-small">
            <div class="env-card__body">
               <img
                  class="env-card__image env-profile-image env-profile-image--small"
                  src="https://envisionui.io/placeholders/profile/200x200/04.webp"
                  alt="Example profile image"
               />
               <h2 class="env-ui-text-subheading">Lorem Ipsumsson</h2>
               <p class="env-ui-text-caption">
                  <a href="#" class="env-link env-link-secondary"
                     >012-345 67 89</a
                  >
               </p>
            </div>
         </div>
      </div>
      <div class="env-cardholder__slot">
         <div class="env-card env-block env-shadow-small">
            <div class="env-card__body">
               <img
                  class="env-card__image env-profile-image env-profile-image--small"
                  src="https://envisionui.io/placeholders/profile/200x200/01.webp"
                  alt="Example profile image"
               />
               <h2 class="env-ui-text-subheading">Lorem Ipsumsson</h2>
               <p class="env-ui-text-caption">Utvecklare</p>
               <p class="env-ui-text-caption">
                  <a href="#" class="env-link env-link-secondary"
                     >012-345 67 89</a
                  >
               </p>
            </div>
         </div>
      </div>
      <div class="env-cardholder__slot">
         <div class="env-card env-block env-shadow-small">
            <div class="env-card__body">
               <img
                  class="env-card__image env-profile-image env-profile-image--small"
                  src="https://envisionui.io/placeholders/profile/200x200/02.webp"
                  alt="Example profile image"
               />
               <h2 class="env-ui-text-subheading">Lorem Ipsumsson</h2>
               <p class="env-ui-text-caption">Utvecklare</p>
            </div>
         </div>
      </div>
      <div class="env-cardholder__slot">
         <div class="env-card env-block env-shadow-small">
            <div class="env-card__body">
               <img
                  class="env-card__image env-profile-image env-profile-image--small"
                  src="https://envisionui.io/placeholders/profile/200x200/03.webp"
                  alt="Example profile image"
               />
               <h2 class="env-ui-text-subheading">Lorem Ipsumsson</h2>
               <p class="env-ui-text-caption">Utvecklare</p>
               <p class="env-ui-text-caption">
                  <a href="#" class="env-link env-link-secondary"
                     >lorem@domain.com</a
                  >
               </p>
            </div>
         </div>
      </div>
   </div>
</div>
```

### Cardholder examples

There are several modifiers for the Cardholder that controls the Cardholder slots:

`.env-cardholder--N` - where N is a number that controls how many slots
the Cardholder can display at most in one row.
Possible values for N are `2`, `3`, `4`, `5`, `6`, `8`.

`.env-cardholder--max` - By default, slots have no max width. This modifier sets a max width.
Slots will be centered in the last row and may not align to the columns. On small screens, the slots
may not fill the entire screen width.

`.env-cardholder--start` - Must be combined with `.env-cardholder--max`. Will align slots to the left.

To control the size and spacing of the columns there are three CSS variables that may be set:

```CSS
.your-cardholder-container {
   /*
   min-width is used to control when column count breakpoints occur.
   max-width is only used when modifier env-cardholder--max is set.
   */
   --env-cardholder-column-min-width: 240px;
   --env-cardholder-column-max-width: 400px;
   --env-cardholder-column-spacing: var(--env-spacing-medium);
}
```

Below are a few examples that you may resize and see how the columns adapt to the given space.

<div class="demo-cardholder-flex">
   <h4 class="doc-heading-4">Three columns</h4>
   <p><code class="language-text">.env-cardholder.env-cardholder--3</code></p>
   <div class="demo-cardholder-flex__resizeable">   
   <div class="env-cardholder env-cardholder--3">
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
   </div>
   </div>
</div>

<div class="demo-cardholder-flex">
   <h4 class="doc-heading-4">Five columns</h4>
   <p><code class="language-text">.env-cardholder.env-cardholder--5</code></p>
   <div class="demo-cardholder-flex__resizeable">   
   <div class="env-cardholder env-cardholder--5">
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
   </div>
   </div>
</div>

<div class="demo-cardholder-flex">
   <h4 class="doc-heading-4">Five columns, slot max width</h4>
   <p><code class="language-text">.env-cardholder.env-cardholder--5.env-cardholder--max</code></p>
   <div class="demo-cardholder-flex__resizeable">   
   <div class="env-cardholder env-cardholder--5 env-cardholder--max">
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
   </div>
   </div>
</div>

<div class="demo-cardholder-flex">
   <h4 class="doc-heading-4">Five columns, slot max width, aligned left</h4>
   <p><code class="language-text">.env-cardholder.env-cardholder--5.env-cardholder--max.env-cardholder--start</code></p>
   <div class="demo-cardholder-flex__resizeable">   
   <div class="env-cardholder env-cardholder--5 env-cardholder--max env-cardholder--start">
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
   </div>
   </div>
</div>
