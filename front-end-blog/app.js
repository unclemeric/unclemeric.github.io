const ssd = require('simple-sftp-deploy')
const path = require('path')
ssd.start({
  remote_path: '/data/webapps/hwagain-web/blog',
  assets_path: path.resolve(__dirname,'./public'),
  host: '192.168.68.207',
  port: '22',
  user: 'portal',
  password: 'portal'
})