import angular from 'angular';

import 'angular-ui-router';
import routerConfig from './app.routes';
import CONSTS from './app.consts.js';

import ComponentsModule from './components/components.module';
import ContainersModule from './containers/containers.module';

import DataPageService from './services/data-page.service';
import OptionsService from './services/options.service';

angular
    .module('deliveriesApp', [
        'ui.router',
        ComponentsModule,
        ContainersModule
    ])
    .constant('CONSTS', CONSTS)
    .service('dataPageService', DataPageService)
    .service('optionsService',OptionsService)
    .config(routerConfig)
    .config(['$locationProvider', ($locationProvider) => {
        $locationProvider.html5Mode(true);
    }])
    .name;