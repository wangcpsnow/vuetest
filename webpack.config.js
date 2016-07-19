require('babel-core/register')({
    presets: ['es2015', 'stage-2']
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist',
        publicPath: './dist/',//这个在router是动态加载异步时候有用，head里面会插入一个asyc属性，没有这个会显示文件路径错误
        filename: '[name].js'
    },
    module: {
 
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.less$/,
                loader: 'style!css!autoprefixer!less'
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            },
            {
                // edit this for additional asset file types
                test: /\.(png|jpg|gif)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[path][name].[ext]?[hash]'
                }
            }
        ]
    }
};