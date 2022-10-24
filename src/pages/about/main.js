import Alpine from 'alpinejs';

import './styles/main.scss';

import theme from '../../hooks/theme';

window.Alpine = Alpine;

Alpine.data('theme', theme);

Alpine.start();
