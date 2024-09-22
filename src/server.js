import { Server } from "socket.io";
import express from "express";
import path from "path";
import http from 'http'
import url from 'url'

const app = express()
const PORT = process.env.PORT || 3000
const currentUrl = url.fileURLToPath(import.meta.url)
const publicUrl = path.join(currentUrl, '../..', 'public')

app.use(express.static(publicUrl))

const httpServer = http.createServer(app)

httpServer.listen(PORT, () => {
  console.log('Listening on port ' + PORT)
})

const io = new Server(httpServer)

export default io;