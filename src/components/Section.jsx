// src/components/Section.jsx
export default function Section({ heading, children }) {
  return (
    <section className="bg-pink-200 max-w-5xl mx-auto my-8 p-4 rounded-2xl p-6 shadow-lg">
      <h2 className="text-portfolioDark text-3xl font-semibold mb-4">{heading}</h2>
      {children}
    </section>
  );
}
