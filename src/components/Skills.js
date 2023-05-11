import React from 'react';

const Skills = () => {
  return (
    <aside lang="en-US" className="skills">
      <h2>Skills</h2>
      <div lang="en-US" className="skills-container">
        <div className="Code">
          <h3 className="h3-code">Code</h3>
          <ul lang="en" className="code-list">
            <li lang="en">HTML</li>
            <li lang="en">CSS</li>
            <li lang="en">JavaScript</li>
            <li lang="en">React</li>
            <li lang="en">JSX</li>
            <li lang="en">Redux</li>
          </ul>
        </div>
        <div lang="en-US" className="Toolbox">
          <h3 className="h3-toolbox">Toolbox</h3>
          <ul lang="en" className="toolbox-list">
            <li lang="en">Visual Studio Code</li>
            <li lang="en">Postman</li>
            <li lang="en">Github</li>
            <li lang="en">Figma</li>
            <li lang="en">Slack</li>
            <li lang="en">Microsoft Office</li>
          </ul>
        </div>
        <div lang="en-US" className="More">
          <h3 className="h3-more">More</h3>
          <ul lang="en" className="more-list">
            <li lang="en">Analytical</li>
            <li lang="en">Pair-programming</li>
            <li lang="en">Team player</li>
            <li lang="en">Agile methodology</li>
            <li lang="en">Problem solving</li>
            <li lang="en">Curious</li>
            <li lang="en">Project management</li>
          </ul>
        </div>
        <div lang="en-US" className="Upcoming">
          <h3 className="h3-upcoming">Upcoming</h3>
          <ul lang="en" className="upcoming-list">
            <li lang="en">MongoDB</li>
            <li lang="en">Express.js</li>
            <li lang="en">Node.js</li>
          </ul>
        </div>
      </div>
    </aside>
  )
};

export default Skills;