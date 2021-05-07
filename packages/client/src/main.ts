import { app, BrowserWindow } from 'electron'

let appWindow = null

const bootstrap = () => {
  appWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  appWindow.webContents.openDevTools()

  appWindow.loadURL('http://localhost:3000')
}

app.whenReady().then(() => bootstrap)
