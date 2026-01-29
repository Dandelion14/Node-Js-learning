const fs = require("fs")
const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req.headers)

    const log = `${Date.now()} ${req.url} new request received!\n`

    fs.appendFile("log_data.txt", log, (err) => {
        if (err) {
            res.statusCode = 500
            return res.end("logging failed")
        }

        res.end("yes worked")
        console.log(req.url)
    })
})

server.listen(3000, () => {
    console.log("server running on port 3000")
})
