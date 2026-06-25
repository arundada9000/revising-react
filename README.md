# Revising React

A personal repository for revising and deepening my understanding of React.js. This project tracks my learning journey through hands-on examples, components, and exercises covering core and advanced React concepts.

## Tech stack

- **React** 19.x
- **Vite** 8.x (build tool)
- **Tailwind CSS** 4.x (styling)
- **ESLint** 10.x (linting)

## Getting started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Project structure

```text
src/
├── App.jsx            - Root application component
├── main.jsx           - Application entry point
├── index.css          - Global styles (Tailwind import)
├── components/        - Reusable React components
│   ├── Counter.jsx    - useState example with counter
│   ├── Card.jsx       - Props example (name, btnText)
│   ├── BgChanger.jsx  - useState for background color switching
│   ├── InputBox.jsx   - Controlled input component with useId
│   ├── PasswordGenerator.jsx - useState, useMemo for password generation
│   ├── CurrencyConverter.jsx - Currency conversion form wrapper
│   ├── Layout.jsx     - Root layout with Header/Footer and Outlet
│   ├── Header.jsx     - Navigation bar with NavLink
│   ├── Footer.jsx     - Footer with resource links and social icons
│   ├── Home.jsx       - Home page with GitHub user card
│   ├── About.jsx      - About page
│   ├── Contact.jsx    - Contact page with form
│   ├── User.jsx       - Dynamic user page with useParams
│   ├── Github.jsx     - GitHub profile fetcher with useEffect
│   ├── ResourceLayout.jsx - Layout wrapper for resource demos
│   └── Resources.jsx  - Resources index page
├── hooks/             - Custom React hooks
│   └── useCurrencyInfo.js - Custom hook for fetching currency exchange rates
└── assets/            - Images and static resources
customeReact/
├── index.html         - Custom React-like renderer demo
└── script.js          - Custom render function implementation
```

## Topics covered

- Vite + React project setup
- JSX syntax and component structure
- JSX expressions (embedding variables)
- StrictMode and createRoot API
- Custom render function (how React works under the hood)
- DOM manipulation fundamentals
- useState hook and state management
- Functional state updates (setCount with callback)
- Props: passing data to components
- useMemo hook for derived state
- Event handling in React (onClick)
- Tailwind CSS v4 integration with Vite
- Clipboard API (navigator.clipboard.writeText)
- useId hook for accessible label-input binding
- Controlled components and form inputs
- Custom hooks (useCurrencyInfo)
- useEffect for API data fetching
- Currency exchange rate API integration
- Conditional rendering with disabled state
- react-router-dom: createBrowserRouter, RouterProvider
- Nested routes and layout with Outlet
- NavLink with active class detection
- Dynamic routing with useParams
- Resource routing and nested layouts

## Author

**Arun Neupane**

- Portfolio: [arunneupane.netlify.app](https://arunneupane.netlify.app)
- LinkedIn: [arundada9000](https://linkedin.com/in/arundada9000)
- YouTube: [@arundada9000](https://youtube.com/@arundada9000)

## License

This project is [MIT](LICENSE) licensed.
