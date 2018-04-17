import angular from 'angular';
import RoleBarComponent from './role-bar.component';
import OptionsService from '../../services/options.service';
import StorageService from '../../services/storage.service';

const roleBar = angular
    .module('roleBar', [])
    .component('roleBar', RoleBarComponent)
    .service('optionsService', OptionsService)
    .service('storageService', StorageService)
    .name;

export default roleBar;