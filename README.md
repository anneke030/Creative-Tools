<h1>Ripple</h1>
<p>Ripple is a user interview platform tailored for UI/UX designers, offering seamless designer-interviewee matching and a curated pool of committed participants. It enables continuous feedback throughout the product development journey, streamlining the design process.</p>

<h2>What Our Product Does</h2>
<p>Ripple is a web application that facilitates connections between designers and participants for UI/UX interviews. It provides the following features:</p>
    <ul>
        <li><strong>Matching Mechanism</strong>: Stores data on matches and grants access to a messaging portal when two users match.</li>
        <li><strong>Messaging Portal</strong>: Enables direct communication between designers and participants.</li>
        <li><strong>Interview Scheduling</strong>: Simplifies setting up interview sessions.</li>
        <li><strong>Task Assignments</strong>: Allows designers to assign tasks to participants.</li>
        <li><strong>Development History</strong>: Tracks and stores interaction history to maintain context throughout the design process.</li>
    </ul>

  <h2>Tech Stack</h2>
  <h3>Frontend</h3>
  <ul>
      <li><strong>React</strong>:
          <ul>
              <li>Enables dynamic UI creation.</li>
              <li>Supports reusable components such as the Navbar and matching cards.</li>
              <li>Allows webpage routing using JavaScript's <code>onClick</code> command.</li>
          </ul>
      </li>
  </ul>
  <h3>Backend</h3>
  <ul>
      <li><strong>ExpressJS</strong>:
          <ul>
              <li>Used for custom-built APIs.</li>
              <li>Supports user management API for the matching system and interview API for scheduling in the messaging portal.</li>
          </ul>
      </li>
      <li><strong>Firebase</strong>:
          <ul>
              <li>Stores profile information (e.g., name, profile image, skills, experience).</li>
              <li>Manages user authentication upon sign-in.</li>
          </ul>
      </li>
  </ul>

  <h2>Getting Started</h2>
  <h3>Prerequisites</h3>
  <ul>
      <li>Node.js and npm installed</li>
      <li>Firebase account and project set up</li>
  </ul>
  
  <h3>Installation</h3>
  <ol>
      <li>Clone the repository:
          <pre><code>git clone &lt;repository-url&gt;</code></pre>
      </li>
      <li>Navigate to the project directory:
          <pre><code>cd ripple</code></pre>
      </li>
      <li>Install dependencies for both the frontend and backend:
          <pre><code>npm install</code></pre>
      </li>
  </ol>

  <h3>Running the Application</h3>
  <ol>
      <li>Start the backend server:
          <pre><code>npm run server</code></pre>
      </li>
      <li>Start the React frontend:
          <pre><code>npm start</code></pre>
      </li>
      <li>Access the application at <code>http://localhost:3000</code>.</li>
  </ol>

  <h2>Usage</h2>
  <ol>
      <li><strong>Sign Up</strong>: Create a profile with your name, profile image, skills, and experience.</li>
      <li><strong>Matching</strong>: Find and connect with participants relevant to your design needs.</li>
      <li><strong>Messaging</strong>: Communicate directly with your matches, schedule interviews, and assign tasks.</li>
      <li><strong>Track History</strong>: Use the development history feature to stay organized and informed.</li>
  </ol>

  <h2>Contributing</h2>
  <p>We welcome contributions to Ripple! To contribute:</p>
  <ol>
      <li>Fork the repository.</li>
      <li>Create a new branch:
          <pre><code>git checkout -b feature-name</code></pre>
      </li>
      <li>Commit your changes:
          <pre><code>git commit -m "Add your message here"</code></pre>
      </li>
      <li>Push to your branch:
          <pre><code>git push origin feature-name</code></pre>
      </li>
      <li>Open a pull request.</li>
  </ol>
