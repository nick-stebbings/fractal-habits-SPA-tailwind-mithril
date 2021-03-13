// src/view/components/Layout/LogoLink.jsx

const LogoLink = {
  view: ({ attrs, children }) =>
    m(
      m.route.Link,
      {
        // Any hyperscript selector is valid here - it's literally passed as the
        // first parameter to `m`.
        selector: "span",
        href: "/",
        class: "logo-link",
      },
      <svg
        enable-background="new 0 0 40 40 "
        height="40px"
        viewBox="5 5 40 40"
        width="44px"
      >
        <path
          class="fill-current"
          d="M15.34,45.5C8.26,45.5,2.5,39.74,2.5,32.66s5.76-12.84,12.84-12.84h1.31v8.37l-1.31,0c-2.47,0-4.47,2.01-4.47,4.47  c0,2.47,2.01,4.48,4.47,4.48c2.47,0,4.47-2.01,4.47-4.48l0-1.92v-15.4c0-7.08,5.76-12.84,12.84-12.84c7.08,0,12.84,5.76,12.84,12.84  s-5.76,12.84-12.84,12.84h-1.31v-8.37l1.31,0c2.47,0,4.47-2.01,4.47-4.47c0-2.47-2.01-4.47-4.47-4.47c-2.47,0-4.47,2.01-4.47,4.47  l0,1.92v15.4C28.18,39.74,22.42,45.5,15.34,45.5z"
        />
      </svg>
    ),
};

export default LogoLink;
