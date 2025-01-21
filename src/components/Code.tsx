import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

function Code() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className='codewrp'>      
      <pre className="codeBlock">
      <code className="language-javascript">
        {`
01 class Taher_Chahine {
02   constructor() {
03     this.name = 'Chahin Taher';
04     this.age = '25';
05     this.email = 'chahintaherr@gmail.com';
06     this.phone = '+216 58 018 596';
07   }
08 
09   workExperience() {
10     return [
11       { '2022-now': 'Full-stack Developer' }
12     ];
13   }
14 
15   education() {
16     return [
17       { '2022-Present':'National School of Electronics and Telecommunication-Network and Cloud Infrastructure' },
18       { '2020-2022': 'Horizon Institute of Training - Higher Technician in IT Management, Tunisia, Gabès' },
19       { '2020-2022': 'Institute of Applied Sciences and Technology - Physics and Chemistry, Tunisia, Gabès' }
20     ];
21   }
22 
23   skills() {
24     return [
25       'Java (JEE)', 'JavaScript', 'PHP', 'HTML', 'CSS', 'Python', 'C', 'C++', 'C#',
26       'Spring Boot', 'Angular', 'React', '.NET',
27       'CI/CD', 'GIT', 'Docker', 'SonarQube', 'AWS', 'Azure', 'Jenkins',
28       'MongoDB', 'Oracle Database', 'PhpMyAdmin', 'MySQL',
29       'Ubuntu', 'Windows Server', 'Linux'
30     ];
31   }
32 }

        `} 
      </code>
    </pre>
    <p className='blink'>|</p> 
    </div>
  )
}

export default Code