import { ipcMain } from 'electron'

export class IPC {
  public constructor() {
    this.registerSync()
    this.registerAsync()
  }

  private registerSync() {}

  private registerAsync() {}
}
