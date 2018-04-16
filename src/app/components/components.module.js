import angular from 'angular';

import navBar from './nav-bar/nav-bar.module';

const ComponentsModule = angular
    .module('deliveriesApp.components', [
        navBar
    ])
    .name;

export default ComponentsModule;