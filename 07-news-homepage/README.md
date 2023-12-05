# Frontend Mentor - News homepage solution
This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Process
1. Setup CSS Reset and Custom Properties
2. Look at Design layout and draw and take notes to anticipate any further challenges
3. Draw on the Desktop layout to try to write semantic html instead of using `<div>` for everything

## Questions
1. Should I use `<article>` or `<section>` for some of these groups?[^1] 
2. What about `<aside>` and `<menu>`?
3. `<h1>` should be used as the biggest heading in the page. However, in a case, where there is no dominant `<h1>`. Can you have more than 1 `<h1>` on a page? Will this hurt SEO [^2]

## Struggles
---
### Hamburger Menu 🥲
1. Weird Top Gap When Scrolling Hamburger Menu when opened
```
.header__navlist { 
  --gap: 1.5rem;
  position: fixed;
}

header {
  padding: 1.5em 1em;
}
```
Maybe it has to do with the fact that `.header__navlist` is a descendant of `<header>` and thus left that space on the top. I am not sure. To prevent this issue all the while still providing padding to the heading, I added heading to a header child `.logo`. Afterwards, I centered everything using `flex` in the header.

2. Hamburger Menu Icon would show underneath the navlist

The issue here was that within that stacking context, the navlist won because it showed up later in my HTML code. To fix this required a simple fix.
```
  .mobile-nav-toggle { z-index: 1; }
```

3. Hamburger Menu Icon would not scroll with the navlist
This was what my code looked like before
```
  .header__navlist { position: fixed; }
  .mobile-nav-toggle { position: absolute; }

```

Simple fix 👏
```
  .header__navlist { position: fixed; }
  .mobile-nav-toggle { position: fixed; }

```
## Efficiency Hints
---
### VS Code
#### *General*

- `⌘ |` can be used to open a new editor group to the right
- `⌥ ⌘ down` used to duplicate line down

#### *HTML*
- Wrap with Abbreviation. Allows you to contain selected HTML code in an element of your choosing I use it so often, I set the keyboard shortcut to `⌥ p`
- Wrap with Abbreviation. Allows you to contain selected HTML code in an element of your choosing I use it so often, I set the keyboard shortcut to `⌥ p`
- Balance inward `opt + c`, outward `opt + o`: Useful when selecting bigger items 
--- 

### Apple Preview
- *Used to Analyze and make quick notes on design before beginning*
- `Shift Cmd /` will send you to the help bar so you can type in keyboard shortcuts 


## Footnotes 
- [Article vs Section: Smashing Magazine](https://www.smashingmagazine.com/2022/07/article-section-elements-accessibility/)
- [H1: Where to Place: Case Study of Amazon](https://www.fastcompany.com/3016894/should-your-tag-be-your-logo)
- [Wrapping H1 over a Logo](https://stackoverflow.com/questions/32265420/visually-remove-h1-element-whilst-preserving-screen-reader-accessibility-and-a)
