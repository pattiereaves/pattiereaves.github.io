import Head from 'next/head';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import { GrWordpress } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';

const Index = () => (
  <>
  <Head>
    <title>Pattie Reaves, Lead Engineer</title>
    <link rel="shortcut icon" href="/unicorn.png" />
  </Head>
  <header aria-label="Site">
    <h1 id="title">Pattie Reaves</h1>
  </header>
  <main aria-labelledby="title">
    <h2 className="sr-only" id="introduction">Introduction</h2>
    <section aria-labelledby="introduction">
      <p>
        I am a seasoned full-stack engineer based in Tucson, Arizona 🌵.
        I lead with heart while delivering results.
      </p>
      <p>
        Currently I work at <a href="https://pmc.com">Penske Media Corporation</a> as <a href="https://www.linkedin.com/in/pattiereaves/">Associate Director of Revenue Technology</a>.
        My team is responsible for building and maintaining ad products for 30 brands and 1500+ publishers.
        My time there will end on Dec. 31, 2025 and I am looking for a new role.
      </p>
    </section>
    <hr />
    <h2 id="what-i-am-looking-for">Help me find a job</h2>
    <p>
      I'm looking for an engineering manager position at a growth-stage technology company where I can lead a cross-functional team of engineers while having direct accountability for team output and product delivery.
    </p>
    <p>
      My ideal role leverages my expertise in frontend development, accessibility, and ad/publishing technology while providing opportunities to mentor engineers and drive technical excellence.
    </p>
    <p>
      The ideal company has a strong engineering culture that values collaboration, continuous learning, and building inclusive products that solve meaningful problems for people.
    </p>
    <hr />
    <h2 id="passions">
      Topics that light me up 🔥
    </h2>
    <ul aria-labelledby="passions">
      <li>
        Solving <a href="https://twoscrumsup.com/991378/6087712-27-the-power-of-spikes">hard problems</a> ✨ using JavaScript/TypeScript and PHP.
      </li>
      <li>
        Making the Web accessible and <a href="https://publishers.wordcamp.org/2018-chicago/sessions/#wcorg-session-595">teaching others</a> to do the same.
      </li>
      <li>
        Agile software development, especially <a href="https://www.scruminc.com/scrum-training/">scrum at scale</a>.
      </li>
      <li>
        <a href="http://twoscrumsup.com/991378/4981433-16-no-bosses%E2%80%A6">Peer coaching</a>, and helping other software engineers be excellent at their jobs.
      </li>
      <li>
        Journalism, democracy, and the success of local media especially. Early in my career I worked at <a aria-label="The Sun Sentinel, where I worked first" href="http://sunsentinel.com">a</a> <a aria-label="The Sun Journal, where I worked next" href="http://sunjournal.com">few</a> <a aria-label="The Bangor Daily News, the newspaper I worked at most recently" href="https://bangordailynews.com">newspapers</a>.
      </li>
      <li>
        Co-organizing of the <GrWordpress /> <a href="https://www.meetup.com/Tucson-WordPress-Meetup/">Tucson WordPress meetup group</a>. WordPress was the first community where I felt truly welcome as a young developer, and that inclusiveness is what makes the project so strong.
      </li>
      <li>
        Endurance sports. I am a <abbr title="Road Runners Club of America">RRCA</abbr> <a href="https://www.rrca.org/">certified running coach</a> and I coach with <a href="https://swet.run">Southwest Endurance Training</a>. It is my dream to complete a 100-mile endurance race before 2027.
      </li>
    </ul>
    <hr />
    <h2 id="about-this-site">
      About this site
    </h2>
    <p>
      This site was built with Next.js and is <a href="https://github.com/pattiereaves/pattiereaves.github.io">open source</a>. It is hosted on Github Pages.
    </p>
    <footer aria-label="Site">
      <h2 id="social">Contact me</h2>
      <ul aria-labelledby="social" className="inline-list">
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
