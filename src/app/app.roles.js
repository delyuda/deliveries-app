function roles (PermPermissionStore, storageService) {
    'ngInject';

    PermPermissionStore
        .definePermission('ADMIN', () => {
            const userRole = storageService.getRole();
            return userRole === 'ADMIN';
        });

    PermPermissionStore
        .definePermission('USER', () => {
            const userRole = storageService.getRole();
            return userRole === 'USER';
        });
}

module.exports = roles;