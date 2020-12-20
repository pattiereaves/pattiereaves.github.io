import Head from 'next/head';
import { FiTwitter } from 'react-icons/fi';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import { GrWordpress } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';

const Index = () => (
  <>
  <Head>
    <title>Pattie Reaves, Web developer</title>
    <link rel="shortcut icon" href="/unicorn.png" />
  </Head>
  <header aria-label="Site">
    <h1 id="title">Pattie Reaves, Web developer</h1>
  </header>
  <main aria-labelledby="title">
    <h2 className="sr-only" id="introduction">Introduction</h2>
    <section aria-labelledby="introduction">
      <p>
        I'm a JavaScript developer based in Tucson, Arizona 🌵. I love to work at the intersection of user experience and software engineering.
      </p>
    </section>
    <hr />
    <h2 id="passions">
      Topics that light me up 🔥 (in no particular order)
    </h2>
    <ul aria-labelledby="passions">
      <li>
        Making the Web accessible and teaching others to do the same. (🚧 I will add to this section!)
      </li>
      <li>
        Agile software development, especially <a href="https://www.scruminc.com/scrum-training/">scrum at scale</a>.
      </li>
      <li>
        <a href="http://twoscrumsup.com/991378/4981433-16-no-bosses%E2%80%A6">Peer coaching, and helping other software engineers be excellent at their jobs.</a>
      </li>
      <li>
        Solving <a href="https://twoscrumsup.com/991378/6087712-27-the-power-of-spikes">>hard problems</a> ✨ using JavaScript (<a href="https://github.com/pattiereaves?tab=overview&">these days, it's mostly React</a>).
      </li>
      <li>
        Journalism, democracy, and the success of local media especially. Early in my career I worked at <a aria-label="The Sun Sentinel, where I worked first" href="http://sunsentinel.com">a</a> <a aria-label="The Sun Journal, where I worked next" href="http://sunjournal.com">few</a> <a aria-label="The Bangor Daily News, the newspaper I worked at most recently" href="https://bangordailynews.com">newspapers</a>.
      </li>
      <li>
        Creating tools that enable journalists to do amazing work (and/or reach communities with their amazing work).
      </li>
      <li>
        Semi-related, being active in the <GrWordpress /> WordPress community. WordPress was the first community where I felt truly welcome as a young developer, and that inclusiveness is what makes the project so strong. I'm a co-organizer of the <a href="https://www.meetup.com/Tucson-WordPress-Meetup/">Tucson WordPress meetup group</a>.
      </li>
      <li>
        Breaking down white supremacy and the patriarchy ✊✊🏿✊🏾✊.
      </li>
      <li>
        Endurance sports. I'm a <abbr title="Road Runners Club of America">RRCA</abbr> <a href="https://www.rrca.org/">certified running coach</a> and I coach with <a href="https://swet.run">Southwest Endurance Training</a>. It's my dream to complete an Ironman triathlon before 2025.
      </li>
      <li>
        My six-year-old, <a href="https://twitter.com/pazzypunk/status/1245170021141102593">who amazes me every day</a> with her kindness.
      </li>
    </ul>
    <hr />
    <footer aria-label="Site">
      <h2 id="social">Contact me</h2>
      <ul aria-labelledby="social" className="inline-list">
        <li>
          <a href="https://twitter.com/pazzypunk">
            <span className="sr-only">Twitter - @pazzypunk</span>
            <FiTwitter />
          </a>
        </li>
        <li>
          <a href="https://github.com/pattiereaves">
            <span className="sr-only">Github - @PattieReaves</span>
            <FaGithubAlt />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/pattiereaves/">
            <span className="sr-only">LinkedIn - @PattieReaves</span>
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a href="mailto:pattie@pzunk.net">
            <span className="sr-only">Email</span>
            <MdEmail/>
          </a>
        </li>
      </ul>
    </footer>
  </main>
  </>
);

export default Index;
