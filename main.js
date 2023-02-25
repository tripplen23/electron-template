const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = !app.isPackaged;

function createWindow () {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      worldSafeExecuteJavaScript: true,
      javascriptEnabled: true,
      preload: path.join (__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
  isDev && win.webContents.openDevTools()
}

if (isDev) {
  require('electron-reload')(__dirname, {
    electron:path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
