(function () {
  const prefixes = window.DashboardConfig?.storagePrefixes || {};

  function namespaceKey(scope, key) {
    const prefix = prefixes[scope] || '';
    return prefix + key;
  }

  function getScopedStorage(scope) {
    return {
      getItem(key) {
        return localStorage.getItem(namespaceKey(scope, key));
      },
      setItem(key, value) {
        localStorage.setItem(namespaceKey(scope, key), String(value));
      },
      removeItem(key) {
        localStorage.removeItem(namespaceKey(scope, key));
      },
      clear() {
        Object.keys(localStorage).forEach((itemKey) => {
          if (itemKey.startsWith(prefixes[scope] || '')) {
            localStorage.removeItem(itemKey);
          }
        });
      }
    };
  }

  window.ScopedStorage = {
    get: getScopedStorage,
    namespaceKey
  };
})();
