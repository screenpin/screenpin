const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 400,
    resizable: false,
    minimizable: false,
    maximizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
    height: 150,
    titleBarStyle: 'hidden',
    autoHideMenuBar: true,
  });
  if(process.platform == 'darwin') {
    mainWindow.setWindowButtonVisibility(false)
  }
  mainWindow.setMenu(null);
  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};


const template = [
  {
    label: 'ScreenPin',
    submenu: [
      { role: 'about' },

      { type: 'separator' },

      { role: 'services' },

      { type: 'separator' },

      { role: 'hide' },
      { role: 'hideOthers' },

      { type: 'separator' },

      { role: 'quit' }
    ]
  },
  {
    label: 'Edit',
    role: 'editMenu'
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forceReload'},
      { type: 'separator' },
      { role: 'zoomIn' },
      { role: 'zoomOut' }
    ]
  },
  {
    label: 'Window',
    role: 'windowMenu'
  },
  {
    label: 'Help',
    submenu: [
      { label: '(empty)' }
    ]
  }
]

  template[2].submenu[6] = {role:'toggleDevTools'};


const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    app.quit();
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
