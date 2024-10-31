# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

- White: hsl(0, 0%, 100%)
- Light pink: hsl(275, 100%, 97%)
- Grayish purple: hsl(292, 16%, 49%)
- Dark purple: hsl(292, 42%, 14%)

## Typography

### Body Copy

- Font size (paragraphs): 16px

### Font

- Family: [Work Sans](https://fonts.google.com/specimen/Work+Sans)
- Weights: 400, 600, 700

> 💎 [Upgrade to Pro](https://www.frontendmentor.io/pro?ref=style-guide) for design file access to see all design details and get hands-on experience using a professional workflow with tools like Figma.


@media screen and (min-width: 320px) {
    body{
        background-image: url(./assets/images/background-pattern-mobile.svg);
        min-width: 275px;
        overflow-y: auto;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .card{
        min-width: 85%;
    }

    .card-tittle{
        padding-left: 150px;
    }

    .card-tittle > img{
        width: 23px;
    }

    h2{
        font-size: 2rem;
    }

    .card-body{
        margin-top: 0.313rem;
    }

}

@media screen and (max-width: 400px) {
    body{
        background-image: url(./assets/images/background-pattern-desktop.svg);
        min-width: 275px;
        overflow-y: auto;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .card{
        min-width: 85%;
    }

    .card-tittle{
        padding-left: 50px;
    }

    .card-tittle > img{
        width: 23px;
    }

    h2{
        font-size: 2rem;
    }

    .card-body{
        margin-top: 0.313rem;
    }

}