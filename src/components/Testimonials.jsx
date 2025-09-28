import React from "react";

const testimonials = [
  {
    name: "Amit Sharma",
    text: "IELTS Pro helped me achieve Band 8. Trainers were very supportive and the AI mock tests were super useful.",
  },
  {
    name: "Priya Verma",
    text: "The speaking practice sessions gave me the confidence I needed. Highly recommended!",
  },
  {
    name: "Rohan Mehta",
    text: "Best institute for IELTS preparation. The personalized feedback made all the difference.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Student Testimonials</h2>
        <p className="mt-2 text-gray-600">What our students say about us</p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition"
            >
              <p className="text-gray-700 italic">"{t.text}"</p>
              <h4 className="mt-4 font-semibold text-blue-600">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
