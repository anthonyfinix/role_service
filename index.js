const location_service = require('./dist').default;
const port = 3006
location_service({
    mongoURI: 'mongodb://localhost:27017/role',
    amqplibURL:"amqps://zutacfqe:3EfVmYuVBftoLLugUOfBAIGnvxvQ_JK_@puffin.rmq2.cloudamqp.com/zutacfqe",
    port
}).then(app => {
    app.listen(port, () => {
        console.log('listening to '+port)
    })
});