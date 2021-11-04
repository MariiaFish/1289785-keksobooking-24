// import { adsArray } from './similarAds.js';
import {renderNewPopup, createNewPoup} from './similarAds.js';

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  {
    lat: 35.6895,
    lng: 139.69171,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const createGroupOfMarker = (points) => {
  const newPopup = createNewPoup();
  const markerGroup = L.layerGroup();
  points.forEach((point) => {
    const { location: { lat, lng }} = point;
    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker({
      lat,
      lng,
    },
    {
      icon,
    },
    );
    marker
      .addTo(markerGroup)
      .bindPopup(renderNewPopup(newPopup, point));
  });
  return markerGroup;
};

export { mainMarker, createGroupOfMarker };
