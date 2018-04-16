import angular from 'angular';

import navBar from './nav-bar/nav-bar.module';
import pageContent from './page-content/page-content.module';

const ComponentsModule = angular
    .module('deliveriesApp.components', [
        navBar,
        pageContent
    ])
    .name;

export default ComponentsModule;