// interface/index.tsx

// Props for the Button component
export interface ButtonProps {
  action: () => void;
  buttonLabel: string;
  buttonBackgroundColor: "blue" | "green" | "orange";
}

// Props for the Layout component
export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

// Props for imperative routing in pages/index.tsx
export interface PageRouteProps {
  pageRoute: string;
}
