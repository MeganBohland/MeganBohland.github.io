// src/components/Section.jsx
export default function Section({ heading, children }) {
  return (
    <section className="bg-pink-200 max-w-3xl mx-auto my-8 p-4 bg-white rounded-lg shadow">
      <h2 className="text-portfolioDark text-3xl font-semibold mb-4">{heading}</h2>
      {children}
    </section>
  );
}
