import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-200 h-screen flex">
      <div className="m-auto bg-white w-[80vw] h-[90vh] border p-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-2">Name</h1>
          <sub className="block mb-4">Contact Info</sub>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl mb-2">Technical Skills</h2>

          <div>
            <span className="font-bold">Frontend | </span>
            <span>
              Typescript, Javascript, Python, React, React Router, HTML, CSS
            </span>
          </div>

          <div>
            <span className="font-bold">Backend | </span>
            <span>
              PostgreSQL, MySQL, MongoDB, Docker, Node.js, Express.js, Axios,
              AJAX, RESTful API Development
            </span>
          </div>

          <div>
            <span className="font-bold">Testing / Deployment | </span>
            <span>
              Jest, Mocha & Chai, K6, Lighthouse, CI/CD, AWS: EC2 / ELB,
              Firebase, New Relic
            </span>
          </div>

          <div>
            <span className="font-bold">Developer Tools | </span>
            <span>
              Next.js, Vim, Git, npm, pnpm, Webpack, Babel, Agile, Scrum, Vite,
              Django
            </span>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl mb-2">Software Engineering Applications</h2>
          <div>
            <span className="text-bold">Full Stack Developer</span>
            <span>
              {" "}
              - Javascript | Node.js | React | Express.js | MongoDB | Vite | AWS{" "}
            </span>
            <ul className="list-disc pl-5">
              <li>
                Implemented and seeded a PostgreSQL database via an ELT to store
                and retrieve over 10 million items
              </li>
            </ul>
          </div>
          <br />

          <div>
            <span className="text-bold">Backend Developer</span>
            <span> - Express.js | Node.js | PostgreSQL | AWS (EC2 & ELB) </span>
            <ul className="list-disc pl-5">
              <li>
                Implemented and seeded a PostgreSQL database via an ELT to store
                and retrieve over 10 million items
              </li>
              <li>
                Created API endpoints through Express and Axios requests and
                confirmed operation via Postman
              </li>
              <li>
                Analyzed database queries with{" "}
                <span className="font-bold">K6</span> in order to track the
                changes to database efficiency; leading to an improvement from
                2.5 seconds to 0.5 milliseconds per query
              </li>
              <li>
                Incorporated New Relic to view bottlenecks in performance to
                determine how best to scale for larger demands
              </li>
              <li>
                Deployed multiple AWS EC2 instances with an AWS ELB to
                horizontally scale the application leading to an increase of
                1000 to 2500 requests per second
              </li>
              <li>
                Tested the maximum amount of stress the API could handle with
                Loader.io
              </li>
            </ul>
          </div>
          <br />

          <div>
            <span className="text-bold">Frontend Developer</span>
            <span>
              {" "}
              - Javascript | React | CSS | Express.js | Babel | Webpack | AWS{" "}
            </span>
            <ul>
              <li>
                Implemented and seeded a PostgreSQL database via an ELT to store
                and retrieve over 10 million items
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl mb-2">Professional Experience</h2>
          <span className="block mb-1">Biomedical Engineer</span>
          <span className="block mb-1">Biomedical Engineer</span>
          <span className="block mb-1">Biomedical Engineer</span>
          <span className="block mb-1">Project Coordinator</span>
          <span className="block mb-1">Technical Writer</span>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl mb-2">Education</h2>
          <span className="block mb-1">Hack Reactor</span>
          <span className="block mb-1">California State University</span>
        </div>
      </div>
    </div>
  );
}
