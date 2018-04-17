import angular from 'angular';

import '@uirouter/angularjs';
import 'angular-permission';
import 'angular-mocks';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/styles/main.scss';

import routerConfig from './app.routes';
import CONSTS from './app.consts.js';

import ComponentsModule from './components/components.module';
import ContainersModule from './containers/containers.module';

import DataPageService from './services/data-page.service';
import OptionsService from './services/options.service';
import StorageService from './services/storage.service';

import roles from './app.roles';
import mockBackend from './mock-backend/mock-backend';

angular
    .module('deliveriesApp', [
        'ui.router',
        'permission',
        'permission.ui',
        'ngMockE2E',
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
    .run(mockBackend);