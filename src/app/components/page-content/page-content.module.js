import angular from 'angular';
import PageContentComponent from './page-content.component';

const pageContent = angular
    .module('pageContent', [])
    .component('pageContent', PageContentComponent)
    .name;

export default pageContent;