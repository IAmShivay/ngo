import React, { useState, useEffect } from 'react';

interface SiteData {
  _id?: string;
  name: string;
  description: string;
  url: string;
  logoUrl?: string;
}

const Sites: React.FC = () => {
  const [sitesData, setSitesData] = useState<SiteData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSites = async () => {
      try {
        // Replace with your actual API endpoint for sites
        const response = await fetch('https://collify.sanakamedical.com/api/content/sites');
        const result = await response.json();
        console.log('Sites data:', result);

        setSitesData(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        console.error('Error fetching sites:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSites();
  }, []);

  // For demo/development purposes - remove in production
  useEffect(() => {
    if (sitesData.length === 0 && !isLoading) {
      // Sample data to show component layout if API fails or during development
      setSitesData([
        {
          _id: '1',
          name: 'Main Organization Site',
          description: 'Official website for Akhand Bharat SC/ST/OBC/ Minority Joint Forum',
          url: 'https://akhandbharat.org',
          logoUrl: 'https://via.placeholder.com/150'
        },
        {
          _id: '2',
          name: 'Educational Resources',
          description: 'Educational materials and support for members',
          url: 'https://education.akhandbharat.org',
          logoUrl: 'https://via.placeholder.com/150'
        },
        {
          _id: '3',
          name: 'Community Portal',
          description: 'Connect with community members and access resources',
          url: 'https://community.akhandbharat.org',
          logoUrl: 'https://via.placeholder.com/150'
        }
      ]);
    }
  }, [isLoading, sitesData.length]);

  if (isLoading) {
    return (
      <div className="w-full py-16 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gray-300 mb-4"></div>
          <div className="h-4 w-32 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }

  if (error && sitesData.length === 0) {
    return (
      <div className="w-full py-16 flex items-center justify-center">
        <p className="text-red-500">Failed to load sites information</p>
      </div>
    );
  }

  return (
    <div className="relative py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Network</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our affiliated sites and platforms dedicated to supporting and empowering our communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitesData.map((site) => (
            <div 
              key={site._id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform hover:translate-y-2 hover:shadow-xl"
            >
              <div className="p-6">
                {site.logoUrl && (
                  <div className="mb-4 flex justify-center">
                    <img 
                      src={site.logoUrl} 
                      alt={`${site.name} logo`} 
                      className="h-16 w-16 object-contain rounded-lg"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2 text-center">{site.name}</h3>
                <p className="text-gray-600 mb-4 text-center">{site.description}</p>
                <div className="flex justify-center">
                  <a 
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sites;