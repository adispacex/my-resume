import React from 'react';
import './App.css';




function App() {
  return (
    <div className="App">
      <header className="hero">
        <div className="hero-content">
          <h1>Aditi Krishna Priya Manikantan</h1>
          <p>Email: <a href="mailto:amanika2@asu.edu">amanika2@asu.edu</a></p>
          <p>Location: Tempe, Arizona</p>
          <p>Phone: (480) 953-5800</p>
          <p><a href="https://www.linkedin.com/in/aditi-krishnapriya-m-30a495196" className="btn">LinkedIn Profile</a></p>
        </div>
      </header>

      <section className="content">
        <h2>EDUCATION</h2>
        <div className="entry">
          <h3>W. P. Carey School of Business at Arizona State University</h3>
          <p>August 2023 – December 2024</p>
          <p>Master of Science in Business Analytics</p>
          <p>Tempe, Arizona</p>
          <p>Relevant Coursework: Python for Data Analysis, Descriptive and Predictive Statistics, Machine Learning, Probability, Enterprise Data Analytics</p>
        </div>

        <div className="entry">
          <h3>Vellore Institute of Technology</h3>
          <p>July 2018 – May 2022</p>
          <p>Bachelor of Technology in Computer Science</p>
          <p>Vellore, Tamil Nadu</p>
          <p>CGPA: 7.98/10</p>
          <p>Relevant Coursework: Database Management Systems, Data Visualization, Machine Learning, Artificial Intelligence, Statistics for Engineers, Discrete Mathematics and Graph Theory, Data Structures and Algorithms, Natural Language Processing, Applied Linear Algebra, Digital Logic and Design</p>
        </div>

        <h2>PROFESSIONAL EXPERIENCE</h2>
        <div className="entry">
          <h3>Software Engineer</h3>
          <p>August 2022 – August 2023</p>
          <p>HongKong and Shanghai Banking Corporation (HSBC)</p>
          <p>Hyderabad, Telangana</p>
          <ul>
            <li>Built enhanced and maintained data quality for VisionPlus backend system.</li>
            <li>Improved Credit/Debit card solutions in UK and UAE markets.</li>
            <li>Utilized SQL programming to improve transaction efficiency and accuracy by 90%.</li>
            <li>Successfully planned and queries projects using SQL, ensuring timely delivery by achieving 100% accuracy.</li>
            <li>Successfully analyzed and optimized huge datasets to lower manual testing time by 70%.</li>
            <li>Collaborated with cross-functional teams, presented progress to stakeholders, and maintained documentation.</li>
            <li>Utilized Tableau to envision patterns, gain insights and reduced development time by 50%.</li>
          </ul>
        </div>

        <div className="entry">
          <h3>Web Developer Intern</h3>
          <p>April 2021 – September 2021</p>
          <p>Triad Square Infosec Pvt. Ltd</p>
          <p>Bengaluru, Karnataka</p>
          <ul>
            <li>Built front-end for a crypto-based project and enhanced web-interface using HTML, CSS, and ReactJS.</li>
            <li>Improved decision-making, team-building, and time management skills.</li>
            <li>Optimized time and space efficiently using Firebase, MySQL and reduced the overall cost by 25%.</li>
          </ul>
        </div>

        <h2>PROJECT EXPERIENCE</h2>
        <div className="entry">
          <h3>Detecting Covid-19 from chest X-ray using CNNs</h3>
          <p>January 2022 – March 2023</p>
          <ul>
            <li>Designed an interactive interface for chest X-ray inputs.</li>
            <li>Implemented a Multi-layer Perceptron for recommended output.</li>
            <li>Published in the International Journal for Research in Applied Science, IJRASET.</li>
          </ul>
        </div>

        <div className="entry">
          <h3>UAE In-App Provisioning (HSBC)</h3>
          <p>December 2022 – February 2023</p>
          <ul>
            <li>Developed checks for Card Eligibility service in HSBC's UAE In-App mobile wallet application.</li>
            <li>Integrated with Provisioning Bundle and Data Encryption for smooth card provisioning.</li>
            <li>Enhanced customer transactions for a seamless payment experience.</li>
          </ul>
        </div>

        <h2>SKILLS & ACTIVITIES</h2>
        <div className="entry">
          <h3>Languages</h3>
          <p>• English (Proficiency - Advanced)</p>
          <p>• Tamil (Proficiency - Advanced)</p>
          <p>• Telugu (Proficiency - Advanced)</p>
        </div>

        <div className="entry">
          <h3>Technical Skills</h3>
          <p>• Python, Machine Learning, R Programming, Tableau</p>
          <p>• Descriptive and Predictive Statistics, SQL, Data Visualization</p>
          <p>• Java, C++, Artificial Intelligence, HTML</p>
        </div>

        <div className="entry">
          <h3>Hackathons</h3>
          <p>• Codespace</p>
          <p>• Devspace (Quantum computing and statistics)</p>
        </div>

        <div className="entry">
          <h3>Certifications</h3>
          <p>• Artificial Intelligence Associate certified from National Institute of Technology, India</p>
        </div>
      </section>
    </div>
  );
}

export default App;
