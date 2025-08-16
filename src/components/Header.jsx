// src/components/Header.jsx
export default function Header({ title, size= "5xl" }) {
  return (
    <header className="bg-pink-300 p-6 text-center">
      <h1 className={`text-portfolioDark text-${size} font-bold`}>{title}</h1>
    </header>
  );
}
