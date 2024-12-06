import { Quote as QuoteIcon } from 'lucide-react';

export default function Quote() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <QuoteIcon className="w-16 h-16 mx-auto mb-8 text-blue-400 opacity-50" />
          <blockquote className="text-2xl md:text-3xl font-serif italic mb-8 relative">
            <span className="absolute -left-4 top-0 text-blue-400 opacity-50 text-6xl">"</span>
            "Education, Organization, Movement - These are our weapons."
            <span className="absolute -right-4 bottom-0 text-blue-400 opacity-50 text-6xl">"</span>
          </blockquote>
          <div className="text-xl font-semibold">Dr. B.R. Ambedkar</div>
          <div className="text-blue-300 mt-2">Father of the Indian Constitution</div>
        </div>
      </div>
    </section>
  );
}