import {createNewPoup} from './ad-popup.js';

const MAIN_PIN_ICON_SIZE_PARAMETERS = [52, 52];
const MAIN_PIN_ICON_ANCHOR_PARAMETERS = [52, 52];
const MAX_ADS_COUNT = 10;
const MAIN_PIN_ICON_INITIAL_LAT_COORDINATE = 35.6895;
const MAIN_PIN_ICON_INITIAL_LNG_COORDINATE = 139.69171;
const GENERAL_PIN_ICON_SIZE_PARAMETERS = [40, 40];
const GENERAL_PIN_ICON_ANCHOR_PARAMETERS = [20, 40];

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: MAIN_PIN_ICON_SIZE_PARAMETERS,
  iconAnchor: MAIN_PIN_ICON_ANCHOR_PARAMETERS,
});

const mainMarker = L.marker(
  {
    lat: MAIN_PIN_ICON_INITIAL_LAT_COORDINATE,
    lng: MAIN_PIN_ICON_INITIAL_LNG_COORDINATE,
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
      iconSize: GENERAL_PIN_ICON_SIZE_PARAMETERS,
      iconAnchor: GENERAL_PIN_ICON_ANCHOR_PARAMETERS,
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

const getMarkersGroup = (adsArr) => createGroupOfMarker(adsArr.slice(0, MAX_ADS_COUNT));

export { mainMarker, removeMarkers, getMarkersGroup };
