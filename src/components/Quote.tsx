import { Quote as QuoteIcon } from 'lucide-react';

export default function Quote() {
  return (
    <section className="py-16 bg-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <QuoteIcon className="w-16 h-16 mx-auto mb-8 text-indigo-400 opacity-50" />
          <blockquote className="text-2xl md:text-3xl font-serif italic mb-8">
            "শিক্ষা, সংগঠন, আন্দোলন - এই হল আমাদের অস্ত্র।"
          </blockquote>
          <div className="text-xl font-semibold">ডঃ বি.আর. আম্বেদকর</div>
          <div className="text-indigo-300 mt-2">ভারতের সংবিধানের জনক</div>
        </div>
      </div>
    </section>
  );
}