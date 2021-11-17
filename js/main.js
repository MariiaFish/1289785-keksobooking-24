import { setInactiveStateForm } from './form-mode.js';
import {activatePage, mapFilter} from './page-mode.js';
import {adForm} from './form-validation.js';

const inactiveElements = [adForm, mapFilter];

setInactiveStateForm(inactiveElements);
activatePage();
