import React from 'react';

const codeList = ['HTML', 'CSS', 'JavaScript', 'React', 'JSX', 'Redux Toolkit'];
const toolboxList = [
  'Visual Studio Code',
  'Postman',
  'Github',
  'Figma',
  'Slack',
  'Microsoft Office'
];
const moreList = [
  'Analytical',
  'Pair-Programming',
  'Team player',
  'Agile methodology',
  'Problem solving',
  'Curious',
  'Project management'
];

const Skills = () => {
  return (
    <aside lang="en-US" className="skills">
      <h2>Skills</h2>
      <div lang="en-US" className="skills-container">
        <div className="Code">
          <h3 className="h3-code">Code</h3>

          <ul lang="en" className="code-list">
            {codeList.map((item) => {
              return (
                <li lang="en" key={item}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div lang="en-US" className="Toolbox">
          <h3 className="h3-toolbox">Toolbox</h3>
          <ul lang="en" className="toolbox-list">
            {toolboxList.map((item) => {
              return (
                <li lang="en" key={item}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div lang="en-US" className="More">
          <h3 className="h3-more">More</h3>
          <ul lang="en" className="more-list">
            {moreList.map((item) => {
              return (
                <li lang="en" key={item}>
                  {item}
                </li>
              );
            })}
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
  );
};

export default Skills;
