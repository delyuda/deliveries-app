import angular from 'angular';

import pageContent from './page-content/page-content.module';

const ComponentsModule = angular
    .module('deliveriesApp.components', [
        pageContent
    ])
    .name;

export default ComponentsModule;