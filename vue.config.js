const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'))
            .set('@views', resolve('src/views'))
            .set('@utils', resolve('src/utils'))
            .set('@router', resolve('src/router'))
    }
}