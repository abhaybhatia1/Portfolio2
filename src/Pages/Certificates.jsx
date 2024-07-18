import React from 'react';
import Data from '../FakeDB/Data/CertificateData';

const certificatesData = Data;

function Certificates() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl px-4 font-bold text-gray-800 mb-6 text-center">Certificates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificatesData.map(certificate => (
          <div key={certificate.id} className="bg-white rounded-lg shadow-md flex flex-col">
            <div className="p-6 flex-1">
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-2">{certificate.title}</h3>
              <p className="text-gray-700">{certificate.content}</p>
            </div>
            <div className="px-6 py-4 bg-gray-100 border-t border-gray-200">
              <a href={certificate.downloadLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline block text-center">Certificate</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
