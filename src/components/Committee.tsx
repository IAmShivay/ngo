interface MemberProps {
  name: string;
  position: string;
  contact?: string;
  image?: string;
}

function CommitteeMember({ name, position, contact }: MemberProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
      <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-blue-600 font-medium mt-1">{position}</p>
        {contact && <p className="text-gray-500 mt-2">{contact}</p>}
      </div>
    </div>
  );
}

export default function Committee() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Committee Members</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Our committee members are tirelessly working towards social development
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CommitteeMember 
            name="Rahul Bauri"
            position="Honorary President"
            contact="+91 98328 08213"
          />
          <CommitteeMember 
            name="Syed Iqbal Khan"
            position="State Minority President"
          />
          <CommitteeMember 
            name="Mala Maji"
            position="State Women's Wing Leader"
          />
          <CommitteeMember 
            name="Satyajit Parmanik"
            position="Asansol Division President"
          />
          <CommitteeMember 
            name="Mukesh Paswan"
            position="Asansol Division (SC) President"
          />
          <CommitteeMember 
            name="Ranjan Kumar Singh"
            position="Asansol Division (OBC) President"
          />
        </div>
      </div>
    </section>
  );
}