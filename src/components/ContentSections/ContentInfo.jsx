import React from "react";

const ContentInfo = () => {
  return (
    <div className="h-full p-8 bg-white border-l-4 border-indigo-500 rounded-3xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
      {" "}
      <h2 className="text-3xl font-bold mb-4 text-gray-900 tracking-tight">
        Julian Ertle, <span className="text-indigo-600">B.Sc.</span>
      </h2>
      <h3 className="text-xl font-medium text-gray-500 mb-6">
        Angewandte Informatik
      </h3>
      <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
        <p>
          Absolvent der{" "}
          <span className="font-semibold text-gray-800 border-b-2 border-indigo-100">
            Hochschule Heilbronn
          </span>{" "}
          mit Studienschwerpunkt{" "}
          <span className="bg-indigo-50 px-2 py-0.5 rounded text-indigo-700">
            Mobile Computing
          </span>
          .
        </p>
        <p>
          <span className="font-semibold text-gray-800 italic underline decoration-indigo-300 decoration-2 underline-offset-4">
            Softwareentwicklung
          </span>{" "}
          bereitet mir am meisten Freude. Mein Ziel ist die Spezialisierung im
          Bereich <strong>Cybersecurity</strong>.
        </p>
      </div>
    </div>
  );
};

export default ContentInfo;
