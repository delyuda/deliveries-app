import angular from 'angular';

import 'angular-ui-router';
import 'angular-permission';

import routerConfig from './app.routes';
import CONSTS from './app.consts.js';

import ComponentsModule from './components/components.module';
import ContainersModule from './containers/containers.module';

import DataPageService from './services/data-page.service';
import OptionsService from './services/options.service';
import StorageService from './services/storage.service';

import roles from './app.roles';

angular
    .module('deliveriesApp', [
        'ui.router',
        'permission',
        'permission.ui',
        ComponentsModule,
        ContainersModule
    ])
    .constant('CONSTS', CONSTS)
    .service('dataPageService', DataPageService)
    .service('optionsService', OptionsService)
    .service('storageService', StorageService)
    .config(routerConfig)
    .config(['$locationProvider', ($locationProvider) => {
        $locationProvider.html5Mode(true);
    }])
    .run(roles)
    .name;