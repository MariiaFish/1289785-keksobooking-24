const ANY_SELECT = 'any';
const FEATURES_NAME = 'features';
const FILTER_DATA_HOUSING_ROOMS_NAME = 'housing-rooms';
const FILTER_DATA_HOUSING_GUESTS_NAME = 'housing-guests';
const FILTER_DATA_HOUSING_TYPE_NAME = 'housing-type';
const FILTER_DATA_HOUSING_PRICE_NAME = 'housing-price';
const FILTER_DATA_FEATURES_NAME = 'features';
const MIDDLE_PRICE_CATEGORY_NAME = 'middle';
const LOW_PRICE_CATEGORY_NAME = 'low';
const HIGH_PRICE_CATEGORY_NAME = 'high';
const MAX_LOW_PRICE = 10000;
const MAX_MIDDLE_PRICE = 50000;

const filterForm = document.querySelector('.map__filters');

const getFilterFormData = (evt, featuresArr) => {
  const data = Object.fromEntries(new FormData(filterForm).entries());
  data.features = featuresArr;
  if (evt.target.name === FEATURES_NAME && evt.target.checked) {
    featuresArr.push(evt.target.value);
    data.features = featuresArr;
  }
  if (evt.target.name === FEATURES_NAME && !evt.target.checked) {
    const uncheckedIndex = featuresArr.indexOf(evt.target.value);
    featuresArr.splice(uncheckedIndex, 1);
    data.features = featuresArr;
  }
  return data;
};

const filterHousingRooms = (ad, filterData) => {
  const filterValue = filterData[FILTER_DATA_HOUSING_ROOMS_NAME];
  return filterValue === ANY_SELECT ? true : ad.offer.rooms === Number(filterValue);
};

const filterHousingGuests = (ad, filterData) => {
  const filterValue = filterData[FILTER_DATA_HOUSING_GUESTS_NAME];
  return filterValue === ANY_SELECT ? true : ad.offer.guests === Number(filterValue);
};

const filterHousingType = (ad, filterData) => {
  const filterValue = filterData[FILTER_DATA_HOUSING_TYPE_NAME];
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
  const filterValue = filterData[FILTER_DATA_FEATURES_NAME];
  return filterValue.length === 0 ? true : isEveryFeature(ad.offer.features, filterValue);
};

const getPriceCategory = (priceValue) => {
  let priceCategory = MIDDLE_PRICE_CATEGORY_NAME;

  if (priceValue < MAX_LOW_PRICE) {
    priceCategory = LOW_PRICE_CATEGORY_NAME;
  }
  if (priceValue > MAX_MIDDLE_PRICE) {
    priceCategory = HIGH_PRICE_CATEGORY_NAME;
  }
  return priceCategory;
};

function filterHousingPrice(ad, filterData) {
  const filterValue = filterData[FILTER_DATA_HOUSING_PRICE_NAME];
  const priceValue = getPriceCategory(ad.offer.price);
  return filterValue === ANY_SELECT ? true : priceValue === filterValue;
}

const filterAds = (ads, filterData) => {
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
  const filteredData = filterAds(ads, filterDataObj);
  return filteredData;
};

export { getFilteredAdsArr, filterAds, filterForm };
