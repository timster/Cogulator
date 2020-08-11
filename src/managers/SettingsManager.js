const config = require('electron-json-config');

class SettingsManager{

    constructor() {
        if (config.get('darkMode') == undefined) config.set('darkMode', false);
        if (config.get('sidebarWidth') == undefined) config.set('sidebarWidth', 190);
    }
    
    setSetting(key, value){
        config.set(key, value);
    }
    
    getSetting(key) {
        return config.get(key);
    }
    
}



G.settingsManager = new SettingsManager();