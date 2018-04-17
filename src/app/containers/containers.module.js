import angular from 'angular';

import roleBar from './role-bar/role-bar.module';
import navBar from '../containers/nav-bar/nav-bar.module';

const ContainersModule = angular
    .module('deliveries.containers', [
        roleBar,
        navBar
    ])
    .name;

export default ContainersModule;