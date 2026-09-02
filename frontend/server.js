// Custom server so cPanel's "Setup Node.js App" (Phusion Passenger) has a
// plain JS file to run as the startup file — Passenger can't invoke the
// "next start" npm script directly, and it assigns the port itself via
// process.env.PORT, which this file must honor.
const http = require('http')
const next = require('next')

const app = next({ dev: false })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    handle(req, res)
  })

  const port = process.env.PORT || 3000
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Next.js server started on port ${port}`)
  })
})

process.on('SIGINT', () => process.exit(0))
process.on('SIGTERM', () => process.exit(0))
