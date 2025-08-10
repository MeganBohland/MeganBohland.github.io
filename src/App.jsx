// src/App.jsx
import React from 'react';

export default function App() {
  return (
    <main style={{ maxWidth: 800, margin: '2rem auto', fontFamily: 'Arial, sans-serif', lineHeight: 1.6, padding: '0 1rem' }}>
      <h1>Megan Bohland – Developer Portfolio</h1>

      <p>
        I'm a full-stack engineer with a broad range of experience—from backend APIs to frontend UX, from developing plugins for Moodle (an LMS - Learning Management System) to game modding. If I don't know how to do something yet, I know how to learn it. I started as a hobbyist, tinkering with whatever tools I could get my hands on. I discovered my passion and went back to school for programming. First earning an Associates in Computer Programming then a Bachelors in Game Development and Design. I thrive in fast-paced environments, love solving problems, and I'm not afraid to dive into the deep end of new technologies. I use two GitHub accounts:
      </p>

      <section>
        <h2>🔧 Personal Account</h2>
        <p>Hobby projects, creative experiments, school projects, and open-source tools.</p>

        <h2>💼 Professional Account</h2>
        <p>Work-related contributions, plugins, and enterprise projects.</p>

        <p>
          Both represent important sides of my work and growth, and I maintain them separately to keep things organized and transparent for collaborators and recruiters.
        </p>
      </section>

      <section>
        <h2>💼 Professional GitHub</h2>
        <p>
          <a href="https://github.com/your-professional-username" target="_blank" rel="noopener noreferrer">
            Visit Professional GitHub →
          </a>
        </p>

        <h3>Moodle Plugin</h3>
        <p>SCORM/cmi5 learning management plugin supporting launch tracking and xAPI reporting.</p>

        <h3>Secure API Client</h3>
        <p>Enterprise-level API integration for managing LRS data and multi-tenant logic.</p>
      </section>

      <section>
        <h2>🔧 Personal GitHub</h2>
        <p>
          Check out all my projects in one space at my Behance
        </p>
        <p>
          <a href="https://github.com/your-personal-username" target="_blank" rel="noopener noreferrer">
            Visit Personal GitHub →
          </a>
        </p>

        <h3>7 Days to Die – Pet Chicken Mod</h3>
        <p>Custom XML and C# mod that adds nest-based chicken behavior and egg-laying systems.</p>

        <h3>Fun AI Bot</h3>
        <p>Experimental chatbot using vector search and minimal UI to simulate conversations.</p>
      </section>

      <section>
        <h2>🌟 About Me</h2>
        <p>
          I love combining logic and creativity—whether it's writing Moodle plugins that improve learning experiences or designing game mods for immersive play. I value clean code, clear documentation, and inclusive design. Feel free to contact me or explore my work!
        </p>
      </section>
    </main>
  );
}
