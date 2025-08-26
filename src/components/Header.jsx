// src/components/Header.jsx
export default function Header({ title, size = "5xl" }) {
  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
  };

  return (
    <header className="bg-pink-300 p-6 text-center rounded-2xl p-6 shadow-lg">
      <h1 className={`${sizes[size]} text-portfolioDark font-bold`}>
        {title}
      </h1>
    </header>
  );
}
