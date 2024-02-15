import React, { useState } from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'IOT based Portable Biopotentials monitoring device',
      description: [
        'Developed a Smart Health Monitoring Device capable of measuring SpO2 (blood oxygen saturation) and heart rate in BPM (beats per minute).',
        'Designed to monitor heart rate, blood oxygen levels, temperature, and ECG.',
        'Integrated with the Android app Blynk for recording and regular updating of data.'
      ]
    },
    {
      id: 2,
      title: 'Entropy based Feature extraction for diabetic retinopathy classification',
      description: [
        'Aims to create a robust and precise classification system to assist in the early identification and management of diabetic retinopathy.',
        'Involves extracting image features based on statistical properties like entropy to gain insights into the texture and complexity of retinal images.',
        'Utilizes deep learning models to process and analyze the extracted features, enhancing the accuracy of disease detection and treatment.'
      ]
    }
  ];

  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleReadMore = (project) => {
    setSelectedProject(project);
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div className="px-4 py-2">
      <div className="flex items-center justify-center text-3xl font-thin text-orange-600 underline font-ubuntu">
        Projects
      </div>
      <div className="w-full mt-4 gap-4 flex justify-center">
        {projects.map((project) => (
          <div key={project.id} className="px-4 py-2 border w-1/2 rounded-lg shadow-lg bg-white">
            <p className="mb-4 text-orange-600 text-2xl font-bold">{project.title}</p>
            <ul className="list-disc list-inside">
              {project.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className='mt-auto'>
              <a href="#" className="text-orange-600 flex items-center mt-2" onClick={() => handleReadMore(project)}>
                Read More
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      {showOverlay && selectedProject && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="text-2xl font-bold mb-4">{selectedProject.title}</p>
            <ul className="list-disc list-inside">
              {selectedProject.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-md" onClick={handleCloseOverlay}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
