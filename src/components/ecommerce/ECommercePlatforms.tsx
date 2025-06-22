
interface Platform {
  name: string;
  description: string;
  features: string[];
}

interface ECommercePlatformsProps {
  platforms: Platform[];
}

const ECommercePlatforms = ({ platforms }: ECommercePlatformsProps) => {
  return (
    <div className="bg-cyan-50 rounded-2xl p-8 mb-12">
      <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">UAE Marketplaces We Work With</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platforms.map((platform, index) => (
          <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md">
            <h4 className="font-bold text-gray-900 mb-2">{platform.name}</h4>
            <p className="text-sm text-gray-600 mb-4">{platform.description}</p>
            <ul className="text-xs text-gray-500 space-y-1">
              {platform.features.map((feature, idx) => (
                <li key={idx}>• {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ECommercePlatforms;
