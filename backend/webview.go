//go:build webview
// +build webview

package main

import (
	"github.com/promethiumjs/photon-lib-go/photon"
	"github.com/webview/webview"
)

func init() {
	photon.Initialize(content, "dist/static", start, fileServerPort, ipcPort)
	go launchWebviewUI()
	photon.IPCInit(ipcPort)
}

func launchWebviewUI() {
	photon.ListenForConnection(fileServerPort)
	w := webview.New(false)
	defer w.Destroy()
	w.SetTitle("Augment")
	w.SetSize(1024, 576, webview.HintMin)
	w.Navigate("http://127.0.0.1:53172/")
	w.Run()
}
