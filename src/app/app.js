// import 'font-awesome/css/font-awesome.min.css';

import angular from 'angular';

import 'angular-ui-router';

import routerConfig from './app.routes';
// import config from './app.config';

import CONSTS from './app.consts.js';

import ComponentsModule from './components/components.module';
import ContainersModule from './containers/containers.module';

angular
    .module('deliveriesApp', [
        'ui.router',
        ComponentsModule,
        ContainersModule
    ])
    .constant('CONSTS', CONSTS)
    .config(routerConfig)
    .config(['$locationProvider', ($locationProvider) => {
        $locationProvider.html5Mode(true);
    }])
    .name;