import {adForm} from './form-validation.js';
import {isAllowedFileType} from './util.js';

const FIRST_FILE_OF_INPUT_FILE_ARR = 0;
const ALLOWED_FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const PHOTO_PREVIEW_WIDTH = 40;
const PHOTO_PREVIEW_HIGHT = 44;

const avatarContainer = adForm.querySelector('.ad-form-header__upload');
const avatarInput = avatarContainer.querySelector('input[type=file]');
const avatarPreview = avatarContainer.querySelector('.ad-form-header__preview').querySelector('img');
const adPhotosContainer = adForm.querySelector('.ad-form__photo-container');
const adPhotosInput = adPhotosContainer.querySelector('input[type=file]');
const adPhotosPreviewContainer = adPhotosContainer.querySelector('.ad-form__photo');

const addPhotoToPreview = (photoInput, photoPreview) => {
  const photoFile = photoInput.files[FIRST_FILE_OF_INPUT_FILE_ARR];
  const photoFileName = photoFile.name.toLowerCase();

  if (isAllowedFileType(ALLOWED_FILE_TYPES, photoFileName)) {
    photoPreview.src = URL.createObjectURL(photoFile);
  }
};

const createNewPreviewElement = () => {
  const newPreviewElement = document.createElement('img');
  newPreviewElement.width = PHOTO_PREVIEW_WIDTH;
  newPreviewElement.height = PHOTO_PREVIEW_HIGHT;
  return newPreviewElement;
};

const setAvatarPreview = () => {
  addPhotoToPreview(avatarInput, avatarPreview);
};

const setAdPhotosPreview = () => {
  const newAdPhotoPreview = createNewPreviewElement();
  addPhotoToPreview(adPhotosInput, newAdPhotoPreview);
  adPhotosPreviewContainer.appendChild(newAdPhotoPreview);
};

export { avatarInput, setAvatarPreview, avatarPreview, adPhotosInput, setAdPhotosPreview, adPhotosPreviewContainer};
