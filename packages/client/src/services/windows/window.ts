import {
  BrowserWindow,
  BrowserWindowConstructorOptions,
  LoadURLOptions
} from 'electron'

export class Window {
  private quit: boolean = false
  private win: BrowserWindow

  public constructor(options: BrowserWindowConstructorOptions) {
    this.win = new BrowserWindow(options)
  }

  public show() {
    this.win.show()
  }

  public hide() {
    this.win.hide()
  }

  public toggle() {
    this.win.isVisible() ? this.win.hide() : this.win.show()
  }

  public forceQuit() {
    this.quit = true
  }

  public loadURL(url: string, options: LoadURLOptions) {
    this.win.loadURL(url, options)
  }

  public onClose(event: Event, callback: (even: Event) => void) {
    if (this.quit) {
      return event.preventDefault()
    }

    callback(event)
  }
}
