const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

const { config } = require("../package");

let win; // global window object reference to avoid garbage collection

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "../renderer/index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  win.setFullScreen(true);
  win.setMenuBarVisibility(false);

  // close our obnoxious full screen alert after n secs.
  setTimeout(() => {
    win.close();
  }, config.timeoutMs);

  win.on("closed", () => {
    win = null; // dereference the global
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (win === null) createWindow();
});
