import angular from 'angular';
import NavBarComponent from './nav-bar.component';

const navBar = angular
    .module('navBar',[])
    .component('navBar', NavBarComponent)
    .name;

export default navBar;