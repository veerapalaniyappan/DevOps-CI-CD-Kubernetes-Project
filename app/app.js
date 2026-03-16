const http = require('http')

const server = http.createServer((req,res)=>{
res.write("DevOps CI/CD Kubernetes Project - Version 2")
res.end()
})

server.listen(3000)