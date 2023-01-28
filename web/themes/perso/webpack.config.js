const path = require("path");
const glob = require('glob');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Construction du tableau d'entrée des fichiers pour webpack.
let entryArray = [
  './scss/style.scss'
];
glob.sync('./js/**.js').reduce(function (obj, el) {
  entryArray.push(el);
}, {});

module.exports = (env, argv) => {
  const isDevMode = argv.mode === "development";
  return {
    mode: isDevMode ? "development" : "production",
    devtool: isDevMode ? "source-map" : false,
    entry: {
      main: entryArray
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                modules: false,
              }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              }
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env", {modules: false}]]
            }
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: "../../../../themes/custom/sophia/assets/fonts/[name][ext][query]",
          },
        },
      ]
    },
    output: {
      path: path.resolve(__dirname, "assets"),
      filename: "[name].min.js",
      publicPath: "/assets/"
    },
    plugins: [
      new MiniCssExtractPlugin(),
    ],
    stats: {
      errorDetails: true, // --display-error-details
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
  };
};
