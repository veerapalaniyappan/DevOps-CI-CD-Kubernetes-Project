const http = require('http')

const server = http.createServer((req,res)=>{
res.write("DevOps CI/CD Kubernetes Project")
res.end()
})

server.listen(3000)