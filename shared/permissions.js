window.DashboardPermissions = {
  roles: {
    admin: ['events', 'interviews', 'raqabh', 'roles', 'scenario', 'ban'],
    viewer: ['events'],
    manager: ['events', 'scenario']
  },

  getAccessibleModules(userRole) {
    const rolePermissions = this.roles[userRole] || [];
    return rolePermissions;
  }
};
