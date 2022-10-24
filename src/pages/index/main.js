import Alpine from 'alpinejs';

import './styles/main.scss';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/regular.css';
import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/solid.css';

import theme from '../../hooks/theme';

window.Alpine = Alpine;

Alpine.data('theme', theme);

Alpine.start();
