import { app, ipcMain } from 'electron'

import { AboutWindow, AppWindow, SettingsWindow } from './windows'

export class App {
  private appWindow: AppWindow
  private aboutWindow: AboutWindow
  private settingsWindow: SettingsWindow

  private constructor() {
    this.bootstrap()
  }

  public static main(): App {
    return new App()
  }

  private bootstrap() {
    app.whenReady().then(() => {
      this.createWindows()
    })
  }

  private createWindows() {
    this.appWindow = new AppWindow()
    this.aboutWindow = new AboutWindow()
    this.settingsWindow = new SettingsWindow()
  }

  private createIPC() {
    this.ipc = new IPC()
  }
}
