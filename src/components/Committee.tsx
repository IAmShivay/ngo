interface MemberProps {
  name: string;
  position: string;
  contact?: string;
  image?: string;
}

function CommitteeMember({ name, position, contact, image }: MemberProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-indigo-600 font-medium mt-1">{position}</p>
        {contact && <p className="text-gray-500 mt-2">{contact}</p>}
      </div>
    </div>
  );
}

export default function Committee() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">কমিটির সদস্যবৃন্দ</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          আমাদের কমিটির সদস্যরা সমাজের উন্নয়নে নিরলসভাবে কাজ করে যাচ্ছেন
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CommitteeMember 
            name="রাহুল বউরি"
            position="সম্মানীয় সভাপতি"
            contact="৯৮৩২৮০৮২১৩"
          />
          <CommitteeMember 
            name="সৈয়দ ইকবাল খান"
            position="রাজ্য সংখ্যালঘু সভাপতি"
          />
          <CommitteeMember 
            name="মালা মাজি"
            position="রাজ্য মহিলা মর্চা প্রধান"
          />
          <CommitteeMember 
            name="সত্যজিৎ পরমাণিক"
            position="আসানসোল বিভাগ সভাপতি"
          />
          <CommitteeMember 
            name="মুকেশ পাসওয়ান"
            position="আসানসোল বিভাগ (SC) সভাপতি"
          />
          <CommitteeMember 
            name="রঞ্জন কুমার সিং"
            position="আসানসোল বিভাগ (OBC) সভাপতি"
          />
        </div>
      </div>
    </section>
  );
}