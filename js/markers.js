import {createNewPoup} from './ad-popup.js';

const MAX_ADS_COUNT = 10;

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
      .bindPopup(createNewPoup(point));
  });
  return markerGroup;
};

const removeMarkers = (map, group) => {
  group.remove(map);
};

const getMarkersGroup = (adsArr) => {
  const markersGroup = createGroupOfMarker(adsArr.slice(0, MAX_ADS_COUNT));
  return markersGroup;
};

export { mainMarker, removeMarkers, getMarkersGroup };
