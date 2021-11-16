const ANY_SELECT = 'any';

const filterForm = document.querySelector('.map__filters');

const getFilterFormData = (evt, featuresArr) => {
  const data = Object.fromEntries(new FormData(filterForm).entries());
  data.features = featuresArr;
  if (evt.target.name === 'features' && evt.target.checked) {
    featuresArr.push(evt.target.value);
    data.features = featuresArr;
  }
  if (evt.target.name === 'features' && !evt.target.checked) {
    const uncheckedIndex = featuresArr.indexOf(evt.target.value);
    featuresArr.splice(uncheckedIndex, 1);
    data.features = featuresArr;
  }
  return data;
};

const filterHousingRooms = (ad, filterData) => {
  const filterValue = filterData['housing-rooms'];
  return filterValue === ANY_SELECT ? true : ad.offer.rooms === Number(filterValue);
};

const filterHousingGuests = (ad, filterData) => {
  const filterValue = filterData['housing-guests'];
  return filterValue === ANY_SELECT ? true : ad.offer.guests === Number(filterValue);
};

const filterHousingType = (ad, filterData) => {
  const filterValue = filterData['housing-type'];
  return filterValue === ANY_SELECT ? true : ad.offer.type === filterValue;
};

const isFeature = (arr, adFeatureValue) => arr.some((feature) => feature === adFeatureValue);

const isEveryFeature = (serverDatafeatures, filterDataFeatures) => {
  let truthy = true;
  if (!serverDatafeatures) {
    truthy = false;
  } else {
    filterDataFeatures.forEach((filterDataFeature) => {
      if (!isFeature(serverDatafeatures, filterDataFeature)) {
        truthy = false;
      }
    });
    return truthy;
  }
};

const filterFeatures = (ad, filterData) => {
  const filterValue = filterData['features'];
  return filterValue.length === 0 ? true : isEveryFeature(ad.offer.features, filterValue);
};

const getPriceCategory = (priceValue) => {
  let priceCategory = 'middle';

  if (priceValue < 10000) {
    priceCategory = 'low';
  }
  if (priceValue > 50000) {
    priceCategory = 'high';
  }
  return priceCategory;
};

function filterHousingPrice(ad, filterData) {
  const filterValue = filterData['housing-price'];
  const priceValue = getPriceCategory(ad.offer.price);
  return filterValue === ANY_SELECT ? true : priceValue === filterValue;
}

const filterdAds = (ads, filterData) => {
  const filteredAds = [];
  for (const ad of ads) {
    if (
      filterHousingRooms(ad, filterData) &&
      filterHousingGuests(ad, filterData) &&
      filterHousingType(ad, filterData) &&
      filterHousingPrice(ad, filterData) &&
      filterFeatures(ad, filterData)
    ) {
      filteredAds.push(ad);
    }
  }
  return filteredAds;
};

const getFilteredAdsArr = (filterDataObj, evt, ads, features) => {
  filterDataObj = getFilterFormData(evt, features);
  const filteredData = filterdAds(ads, filterDataObj);
  return filteredData;
};

export { getFilteredAdsArr, filterdAds, filterForm };
