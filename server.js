const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const config = require("./webpack.config");

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  port: config.devServer.port,
  host: config.devServer.host,
  headers: config.devServer.headers,
  historyApiFallback: true,
}).listen(3000, "0.0.0.0", function(err, result) {
  if (err) {
    return console.log(err);
  }

  console.log("Listening at http://0.0.0.0:3000/");
});
