import React from "react";
import { Book, Mic, ClipboardCheck, Bot } from "lucide-react";

const features = [
  {
    icon: <Mic className="w-10 h-10 text-blue-600" />,
    title: "Speaking Practice",
    desc: "Daily speaking sessions with trainers to boost fluency and confidence.",
  },
  {
    icon: <ClipboardCheck className="w-10 h-10 text-blue-600" />,
    title: "Mock Tests",
    desc: "Regular mock tests with detailed feedback to track progress.",
  },
  {
    icon: <Bot className="w-10 h-10 text-blue-600" />,
    title: "AI Band Score",
    desc: "AI-powered band score prediction for smarter preparation.",
  },
  {
    icon: <Book className="w-10 h-10 text-blue-600" />,
    title: "Grammar Training",
    desc: "Special focus on grammar and vocabulary building.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Our Features</h2>
        <p className="mt-2 text-gray-600">
          Everything you need to prepare effectively for your IELTS exam
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-blue-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
