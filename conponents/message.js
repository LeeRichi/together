import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 40.712776,
    lng: -74.005974
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

// export default Map;

export default function Message({ children, avatar, username, description })
{
  return (
    <div class="bg-white rounded-lg shadow-md p-4 mb-2 border-2">
      <div class="flex items-center gap-4">
        <img src={avatar} class="w-10 h-10 rounded-full" />
        <div>
          <h2 class="text-lg font-bold">captain {username}</h2>
          {/* <p class="text-gray-500">{description}</p> */}
        </div>
        <p class="text-gray-500">{description}</p>




      </div>
      {children}
    </div>
  );
}