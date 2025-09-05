import React from 'react';
import Header from "./components/Header";
import Section from "./components/Section";
import ImageCard from "./components/ImageCard";
import Footer from "./components/Footer";
import Paragraph from './components/Paragraph';
import VideoCard from './components/VideoCard';
// Pictures:
import reward from "./images/quest.png";
import codingBuddy from "./images/codingbuddy.png";
import meatCon from "./images/meatcon.png";
import suchAHelper from "./images/such a helper.png";
import first from "./images/firstedited.png";
import Rosella from "./images/rosella.png";
import fixit from "./images/fixit.png";
import lsg from "./images/LSG.png";
import sg from "./images/seriousgames.png";
import ieee from "./images/ieee.png";
import ContentBlock from './components/ContentBlock';
import fish from "./images/fish.jpg"
//import TBD from "./images/TBD.png";
import plugin from "./images/moodle demo.png";

export default function App() {

  return (
    <main className="bg-gradient-to-r from-pink-300 via-pink-150 to-purple-300 font-sans leading-7">
      <Header size="6xl" title="Welcome to Megan Bohland's Portfolio" />
      <section className="w-full py-12">
<ContentBlock
  heading=""
  image={codingBuddy}
  imageAlt="Me and my puppy Dani"
  imageCaption="Me and my puppy Dani. She tries to help my work in her own way..."
  imagePosition="left"
>
                <Paragraph>

                  Hello and welcome to this little page about me. I am a software engineer with a broad range of experience—from backend APIs and frontend UX, to developing plugins for Moodle (an LMS - Learning Management System), and even game modding. 
                  If I don't know how to do something yet, I know how to learn it.

                </Paragraph>
    </ContentBlock>

  <div className="container mx-auto px-4">
  <div className="flex flex-col lg:flex-row-reverse items-center gap-6">
      
                  <div className="flex-shrink-0">
              <ImageCard 
                src={first}
                alt="My first official program, in Actionscript. A cat telling someone off."
                caption="I'll never forget the first programming project I completed. I made it a picture of my sisters cat telling her off to make her laugh."
              />
            </div>

                <div className="flex-1 rounded-xl shadow-md p-6 text-lg leading-relaxed">

          <Section heading="Personal GitHub">
            <Paragraph>
              Oddly, it wasn't until the end of my college career that I was introduced to GitHub. I was in a class focused on presenting my accomplished projects in repos, rather than utilizing Git as the truly awesome work iteration tool it is. 
              While I’m working on properly setting up these repos, with readmes that explain how to use the software more along industry standard, for now this GitHub houses my school projects, and personal programming endeavors. 
              My current project is a mod for one of my favorite games, 7 Days to Die. I’m building it in Unity, because I’ll be darned if a game can tell me I can’t have pet chickens. 
            </Paragraph>
   
                      {/* Right: first program image */}
            <Paragraph>


              <a className="text-portfolioDark text-1xl font-bold" href="https://github.com/strawhatsheik" target="_blank" rel="noopener noreferrer">
                Visit Personal GitHub →
              </a>
            </Paragraph>
       </Section>
            </div>
            </div>
            </div>

            
  <div className="container mx-auto px-4">
  <div className="flex flex-col lg:flex-row items-center gap-6">
      
                  <div className="flex-shrink-0">
              <ImageCard 
                src={plugin}
                alt="Screenshot showing the cmi5 plugin demo"
                caption="A screenshot from the Moodle plugin I developed, enabling the use and tracking of cmi5 in Moodle."
              />
            </div>

            
          <Section heading="Professional GitHub">
            <Paragraph>
Once I entered the tech workforce I started a GitHub with my name. It houses open-source development groups I am part of, and projects for work—such as the cmi5 Moodle plugin I designed, developed, Q&A'd, and documented. I am currently supporting it through being an official plugin in the Moodle store!

            </Paragraph>
            <Paragraph>
              <a className="text-portfolioDark text-1xl font-bold" href="https://github.com/MeganBohland" target="_blank" rel="noopener noreferrer">
                Visit Professional GitHub →
              </a>
            </Paragraph>
  </Section>

          </div>
          </div>


        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6">
            
                        {/* Left: fixit image */}
            <div className="flex-shrink-0 justify-center">
              <ImageCard
                src={fixit}
                alt="Some screenshots from my game Fix It!"
                caption="A game I developed in Adobe Animate. It was inspired by the work I did on my sisters beloved laptop to keep it running. I modeled the character off her, and it's her voice in the game."
              />
              
            </div>

          <Section heading="Behance">
            <Paragraph>
                Many of my old games and projects are on Behance. These were mostly school projects and experiments as I started playing around with game design. I like Behance because it allows me to talk about the making of the project as well as share visuals. Check out some of my favorite work here!            </Paragraph>
            <Paragraph>
              <a className="text-portfolioDark text-1xl font-bold" href="https://www.behance.net/meganbohland" target="_blank" rel="noopener noreferrer">
                Visit My Behance →
              </a>
            </Paragraph>
          </Section>
</div>
</div>
  <div className="container mx-auto px-4">
  <div className="flex flex-col lg:flex-row items-center gap-6">

      
                  <div className="flex-shrink-0">
              <ImageCard 
                src={Rosella}
                alt="A screen shot from the game King's Quest four: The Perils of Rosella"
                caption="The first PC game I ever player. King's Quest IV: The Perils of Rosella. It was one of the first games to utilize a mouse, but was still controlled by text commands. I learned to spell and type just to play this game on my own. The art and puzzles of King's Quest games influence me to this day."
              />
            </div>


          <Section heading="About Me">
            <Paragraph>
              I grew up loving video games, especially the Sierra point and click adventures of the eighties and nineties. My first foray into learning software’s backend was working on getting these old games to work on my less than stellar family PC. I was always tinkering as a child, fiddling with whatever tech and tools I could get my hands on, and my lifelong fascination with technology made me the de facto IT support at every job I held and home I visited. 
	            I discovered programming with a project that went too far. I had come up with the wild idea of remaking King’s Quest IV: The Perils of Rosella as an homage to my late grandmother, who first bought the game and played it with me. My little project tossed me headfirst down a rabbit hole that led me to my Associates of Computer Programming and soon after a Bachelors in Game Development and Design. I’d finally had my 'lightbulb' moment and discovered my passion. I’ve realized that I was never “weird,” as I so firmly believed growing up, I’m a software engineer. All the things that made me different amongst my peers are the same qualities that made me perfectly suited for my career. I am extremely attentive to detail, love solving problems, and am relentlessly stubborn in the face of something that “won’t work.” 
              I will tackle any challenge and stay with an issue until it’s solved—be it an errant string of code or a printer that crossed the wrong desk. Troubleshooting is a skill of mine, and I have worked on backend and frontend projects, as well as UI/UX, and quality control. I thrive in fast-paced environments that keep me learning and thinking, and I'm not afraid to dive into the deep end of new technologies. I love that the field I work in is constantly growing and changing, and though I got distracted by an extraordinary new life…I’m coming back for my Grandma’s reboot of King’s Quest IV.  
            </Paragraph>
          </Section>
          </div>
        </div>
          <Section>
            <h2 className="text-portfolioDark text-4xl text-center font-semibold mb-4"> Groups I Am Involved With
            </h2>


          </Section>
                      <div className="container mx-auto px-4">
  <div className="flex flex-col lg:flex-row-reverse items-center gap-6">

      
                  <div className="flex-shrink-0">
              <ImageCard 
                src={sg}
                alt="A screen shot of the Serious Games website."
                caption="I am so excited to be part of the Serious Games Showcase and Challenge!"
              />
            </div>
          

<Section heading="Serious Games Showcase and Challenge">
            <Paragraph>
            This year I am honored to be on the committee for the Serious Games Showcase and Challenge. This group promotes the use of games in education, and provides a platform for developers to share    
            showcase their work. The winners the annual challenge will showcase their work at the Interservice/Industry Training, Simulation and Education Conference (I/ITSEC) in Orlando, Florida. As both a committee member, and part of the judging panel           
            this year in Orlando, I am excited to bring my perspective into the challenge as a software engineer, someone who majored in game development, and most importantly a woman who loved educational games as a kid—and still does.
              </Paragraph>
              <Paragraph>
              <a className="text-portfolioDark text-1xl font-bold" href="https://sgschallenge.org/" target="_blank" rel="noopener noreferrer">
                Visit The Serious Games Showcase and Challenge website →
              </a>
            
            </Paragraph>

          </Section>
</div>
</div>

                      <div className="container mx-auto px-4">
  <div className="flex flex-col lg:flex-row items-center gap-6">

      
                  <div className="flex-shrink-0">
              <ImageCard 
                src={ieee}
                alt="A screen shot the ieee working group."
                caption="I am new to learniing standards, and am grateful to be part of this group. They welcome everyone and take time to answer questions."
              />
            </div>
          

          <Section heading="IEEE P2881 Learning Metadata Working Group">
            <Paragraph>
            The IEEE P2881 Learning Metadata Working Group follows the Institute of Electrical and Electronics Engineers to create a universal standard for learning metadata across different systems. Our group of volunteers are currently focused on the cmi5 standard, a new standard for learning management systems. My work with this team continues to expand my understanding of how specs and standards are built, and my understanding of the IEEE. 
</Paragraph>
  <Paragraph>
              <a className="text-portfolioDark text-1xl font-bold" href="https://sagroups.ieee.org/9274-3-1/" target="_blank" rel="noopener noreferrer">
              Visit The IEEE P2881 Learning Metadata Working Group Homepage →
              </a>
              </Paragraph>
          
           
</Section>
</div>
</div>

                      <div className="container mx-auto px-4">
  <div className="flex flex-col lg:flex-row-reverse items-center gap-6">

          <ImageCard
                src={lsg}
                alt="A screenshot of the Let's say Gay website"
                caption="A screenshot of the Let's Say Gay website"
                link="https://www.lsglitjournal.com/"
              />
                  <div className="flex-shrink-0"></div>
                  <Section heading="Let's Say Gay!">
            <Paragraph>
              Working with a grassroots organization always means being adaptable, and I am also a primary volunteer for tabling events as well as filling other, perhaps more obscure needs. I’ve whipped together a graphics for social media, I’ve cut out stickers when our order didn’t arrive perforated, and perhaps my most fun endeavor was the creation of Cucco Quest! At a recent convention the editor Let’s Say Gay asked me to come up with a “fetch quest,” and knew she wanted it to be based on the old game The Legend of Zelda: Ocarina of Time. Using Adobe Illustrator, I had to quickly make seven different images of “Cuccos” from the game. I used free images and named them to make them both funny and easy to distinguish, so we could hide these printouts throughout the convention hotel and sent players to hunt them down and take photographic proof of their victory. We were all surprised by the response, as several groups became insanely devoted to finding all seven missing Cuccos, and many came back to the table to thank us and share how much fun they had playing.
              <ImageCard
                src={reward}
                alt="Picture of a girl and seven cuckoos, with details on the fetch quest."
                caption="The request for help and reward."
                link="https://www.lsglitjournal.com/"
              />
            </Paragraph>
              <Paragraph>
              <a className="text-portfolioDark text-1xl font-bold" href="https://www.lsglitjournal.com/" target="_blank" rel="noopener noreferrer">
                Visit the Let's Say Gay! Homepage →
              </a>
            </Paragraph>

          </Section>
</div></div>
                      <div className="container mx-auto px-4">
  <div className="flex flex-col lg:flex-row items-center gap-6">

          <ImageCard
                src={fish}
                alt="Two fancy goldfish swimming in a planted tank."
                caption="Two of my goldfish, Tiburon and Gordan Ranchu-sey."
                link="https://www.lsglitjournal.com/"
              />
                  <div className="flex-shrink-0"></div>
          <Section heading="Interests, Hobbies, and Nerdy Confessions">
            <Paragraph>
              I have more interests and hobbies than time. Many more! 
              I love video games of every kind: PC gaming, console gaming, and love the occasionally time and soul stealing mobile game. 
              My sisters and I grew up with tabletop board gaming, and I never did outgrow Disney. I read manga, particularly One Piece, 
              a series that I’ve loved since I was a teenager. Then of course, there’s robotics! My love for tech and programming earned my 
              scholarship from Southern New Hampshire University to the Grace Hopper’s Woman’s Convention, which is where I made my first Arduino! 
              My first robot was a “plant waterer” that tested the soil and beeped to let me know if it was too dry. It wet my appetite and now I am obsessed. 
              
              I worked for the Humane Society for years in Greenwood, S.C, and volunteered with PAWS Wildlife Rescue. I rescue cats and am currently 
              in the process of becoming a 501(c)(3); the Red Roof Rescue will be official soon! I have eight goldfish, and attend the annual Central Florida Koi And Goldfish Show. 
              Yes, that is a real thing. I am a bee keeper and obsessed with the insect world. I’d have been an entomologist if I hadn’t loved tech so much. 
              Most people don’t understand the science behind nature, but that’s the most amazing part! Did you know there is a wasp that makes plastic? 
              That pound for pound spider silk is stronger than steel?
            </Paragraph>
          </Section>
        </div>
      </div>  {/* ✅ closes hobbies container properly */}

      {/* NEW full-width Contact Me section */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <Section heading="Contact Me">
            <Paragraph>
              If you would like to contact me, you can reach me at my email: {" "}
              <a
                className="text-portfolioDark font-bold"
                href="mailto:meganbohland86@gmail.com"
              >
                meganbohland86@gmail.com
              </a>
              <br />
              Or connect with me on {""}
              <a
                className="text-portfolioDark font-bold"
                href="https://www.linkedin.com/in/megan-bohland/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Paragraph>
          </Section>
        </div>
      </div>

      </section>
      <Footer>
        Thank you to this awesome artist for the goldfish thumbnail. <a href="https://pikbest.com/png-images/goldfish-vector-silhouette-illustration-art-drawing-line_10890938.html">Free png images from pikbest.com</a>
      </Footer>
    </main>
  );
}
