import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import "leaflet/dist/leaflet.css";
import schools from "../data/schools.json";

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const position: any = [36.3759586, 10.5428839];

export default function Schools() {
  function handleMarkerClick(id: number, metadata: string) {
    return (e: any) => {
      console.log(e.latlng);
      const { lat, lng } = e.latlng;
      console.log({
        id,
        metadata,
        lat,
        lng,
      });
    };
  }

  return (
    <div className="flex">
      <div className="w-[500px]">hey</div>
      <div className="flex-1">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <ReactLeafletGoogleLayer
            apiKey={googleMapsApiKey}
            type={"satellite"}
          />

          {schools
            .filter((v) => !Number.isNaN(v.lat) && !Number.isNaN(v.lng))
            .map((v) => (
              <Marker
                key={v.code}
                position={[Number(v.lat), Number(v.lng)]}
                eventHandlers={{
                  click: handleMarkerClick(v.code, v.name),
                }}
              />
            ))}
        </MapContainer>
      </div>
    </div>
  );
}
