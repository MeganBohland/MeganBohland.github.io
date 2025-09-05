export default function Footer({ children }) {
  return (
    <footer className="bg-portfolioDark text-white py-4 text-center space-y-2">
      <p>&copy; {new Date().getFullYear()} Megan Bohland</p>
      {children && <div className="text-sm text-white-200">{children}</div>}
    </footer>
  );
}
