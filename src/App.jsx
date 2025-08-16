import React from 'react';
import Header from "./components/Header";
import Section from "./components/Section";
import ImageCard from "./components/ImageCard";
import Footer from "./components/Footer";

// Pictures:
import reward from "./images/quest.png";

export default function App() {
  
  return (
   <main className="bg-pink-300 font-sans leading-6">
      <Header title="Welcome to Megan Bohland's Portfolio" />

      <Section heading="About Me">
        <p>
        Hello! Welcome to this little page about me. I am a software engineer with a broad range of experience—from backend APIs to frontend UX, from developing plugins for Moodle (an LMS - Learning Management System) to game modding. If I don't know how to do something yet, I know how to learn it. I started as a hobbyist, tinkering with whatever tools I could get my hands on. I discovered my passion and went back to school for programming. First earning an Associates in Computer Programming then a Bachelors in Game Development and Design. I thrive in fast-paced environments, love solving problems, and I'm not afraid to dive into the deep end of new technologies. I use two GitHub accounts:
      </p>
      </Section>

      <Section heading="Personal GitHub">
        <p>
          This is my personal account. While studying Game development and design many teachers taught us many different ways to protect and backup our work. 
          Oddly, it wasn't until the end of the study that I was introduced to Git, and that class focused more on presenting my accomplished projects in repos rather than utilizing it as the truly awesome work iteration tool it is. 
          Someday I would like to go back and properly set up these repos, with readmes that explain how to use the software more along industry standard. For now it houses my school projects, and personal programming endeavours. My current is a mod for one of my favorite games, 7 Days to Die. 
          I have recently begun work on it and am excited to continue:
        </p>
      </Section>
      <Section heading="Professional GitHub">
        <p>
          Once I entered the professional field I started a GitHub with my name. It houses projects for work or open-source development groups I am part of. My crowning jewel here is the cmi5 Moodle plugin. I designed, developed, Q&A&apos;d, and documented this plugin. I am currently supporting it through being an official plugin in the Moodle store!
        </p>
        <p>
          <a class="text-portfolioDark text-2xl font-bold" href="https://github.com/MeganBohland" target="_blank" rel="noopener noreferrer">
            Visit Professional GitHub →
          </a>
        </p>

        <h3>Moodle Plugin</h3>
        <p>SCORM/cmi5 learning management plugin supporting launch tracking and xAPI reporting.</p>

      </Section >

      <Section heading="Behance">
        <p>
          Many of my games and projects are on Behance. This is a good way to show them off visually while talking about what went into making them. For instance, one of my favorites is one I did in Adobe Animate called &quot;Fix It!&quot;. Check out some of my favorite work here!
        </p>
        <p>
          <a class="text-portfolioDark text-2xl font-bold"href="https://www.behance.net/meganbohland" target="_blank" rel="noopener noreferrer">
            My Behance →
          </a>
        </p>
      </Section>

      <Section heading="About Me">
        <p>
          I grew up loving video games, especially on the PC. My first foray into learning the backend was working on getting these old games to work on my less than stellar family PC. I am continually interested and fascinated by technology as it advances. I discovered programming when I wondered what it would be/take to create a game. I was already defacto tech support 
          for family and my job. Wanting to learn as much as possible I went back to school pursuing my Associates of Computer Programming. The more I learned the more I loved. I finally had my 'lightbulb' moment and discovered my passion. I contined to pursue this passion and earned my Bachelors in Game Development and Design.
          Now as a software engineer I thrive on tackling any challenge and am especially good at 'sticking with' an issue until it is solved. Troubleshooting is a skill of mine, and I have worked on backend and frontend projects, as well as UI/UX, and quality control. 
        </p>
      </Section>
      <Section heading="Groups I am involved with">

          <h3 class="text-portfolioDark text-2xl font-bold">Serious Games Showcase and Challenge</h3>
          <p>
            This year I am honored to be on the committe for the Serious Games Showcase and Challenge. This is a group that promotes the use of games in education and provides a platform for developers to showcase their work. 
            The winners showcase their work at the Interservice/Industry Training, Simulation and Education Conference (I/ITSEC) in Orlando, Florida. I am excited to be part of this group and help promote the use of games in education. Not only did I love educaational games as a kid (heck I still do), I feel 
           that as a software engineer and someone who majored in game development, I have a unique perspective to bring to the table. I am excited to see what this year brings and how I can contribute to the group.

            <a class="text-portfolioDark text-1xl font-bold" href="https://sgschallenge.org/" target="_blank" rel="noopener noreferrer">
              Serious Games Showcase and Challenge →
            </a>
          </p>
          <h3 class="text-portfolioDark text-2xl font-bold">Let's Say Gay!</h3>
          <p>
            Let's Say Gay is a queer youth literary journal that aims to provide a safe space for LGBTQ+ youth to express themselves through writing and art. We are a very small group of volunteers(currentyl 3), and my role is technically website creation and support, but I am 
            often called upon for others task. Such as whipping together a graphic for social media when the artist was sick, or helping come up with fun games for our booth when we are present at conventions.

            One such game I was proud of, because many people approached our  table to thank us for the fun time they had. The editor of the journal asked me to come up with a 'fetch' quest, and knew she wanted it to be based on the old game 
            The Legend of Zelda, Ocarina of Time. Using Adobe Illustrater I quickly made seven different images of 'cuckoos' from the game. I used free images and named them to make them both funny and easy to distinguish. We hid these printed throughout the con with rewards to whoever found the all seven. 
            I really love being able to use my skills to help this group, whose mission is so important. I also really love being able to create things that make people laugh.
            
            <ImageCard
              src={reward}
              alt="Picture of a girl and seven cuckoos, with details on the fetch quest."
              caption="The request for help and reward."
              link="https://www.lsglitjournal.com/"
            />

            The website itself is rather basic, but I am happy to do it, and what I really like about it is I coded it so if the youth feels unsafe and needs to hide what they are viewing, they just have to press 'esc'' and it instantly goes to google, and even pressing the back button will not reveal the site..
            <a class="text-portfolioDark text-1xl font-bold" href="https://www.lsglitjournal.com/" target="_blank" rel="noopener noreferrer">
              Let's Say Gay!
            </a>
          </p>
          <h3 class="text-portfolioDark text-2xl font-bold">IEEE P2881 Learning Metadata Working Group</h3>
          <p>
              The P2881 working group is a group of volunteers that are working to create a standard for learning metadata. It follows IEEE (Institute of Electrical and Electronics Engineers) standards, and is focused on creating a standard for learning metadata that can be used across different systems. Specifically we are working on the cmi5 standard, which is new a standard for learning management systems.
              I joined this group through work, and am excited to learn more about not only how specs and standards are built, but also IEEE standards. 

            <a class="text-portfolioDark text-2xl font-bold" href="https://www.lsglitjournal.com/" target="_blank" rel="noopener noreferrer">
              https://sagroups.ieee.org/2881/ 
            </a>
          </p>
          </Section>
          <Section heading="My interests">
            <p>
              I have a wide variety of hobbies from playing video games, to caring for goldfish. I love anything science relate, and constantly look to grow and learn. Robotics is the next hobby  I am looking into. I have built a small arduino "plant waterer". It tests the soil and lets you know through a beep if  it's too dry. Now this was a very basic tutorial I folloowed, but it wet my appetitie to learn more.  
              I especiALLY LOVE learning how things work, how to repair things, how to maintain them. Nothing gets me more exccited then the 'why' of how something works.  The science BEHIND anything draws my attention. And my absolute favortie is when I can learn science behind nature. Did you know there is a wasp that makes plastiv? That pound for pound spider silk is stronger than steel? 
            
            
            </p>
            
          </Section>
                    <Section title="Contact me">
            <p>
              If you would like to contact me, you can reach me at my email: 
              <a class="text-portfolioDark font-bold" href="mailto:meganbohland86@gmail.com">meganbohland86@gmail.com</a>

              <a class="text-portfolioDark font-bold" href="https://www.linkedin.com/in/megan-bohland-123456789/" target="_blank" rel="noopener noreferrer">LinkedIn</a>

            </p>
            
          </Section>
  
 
    </main>
  );
}
