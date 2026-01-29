const fs = require("fs")
const http = require("http")
const url=require("url")

const server = http.createServer((req, res) => {
    // console.log(req.headers)

    const log = `${Date.now()} ${req.url} new request received!\n`
    if (req.url === "/favicon.ico") {
    res.statusCode = 204
    return res.end()
}

    fs.appendFile("log_data.txt", log, (err) => {
        if (err) {
            res.statusCode = 500
            return res.end("logging failed")
           
        }

        res.end("yes worked")
        // console.log(req.url)
         console.log(url.parse(req.url))
    })
})


server.listen(3000, () => {
    console.log("server running on port 3000")
})
