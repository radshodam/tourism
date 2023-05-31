const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: "production", //optimize for production
  entry: "./src/index.js", // entry path
  output: {
    filename: "[name].[contenthash].js", // catching
    path: path.resolve(__dirname, "dist"), // save path
    publicPath: "/dist/", // public path
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, //compile js
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.(scss|sass|css)$/, // for sass
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i, // compress and copy img
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "images", // save output img
                name: "[name].[ext]", //
              },
            },
            {
              loader: "image-webpack-loader",
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65, // quality JPEG
                },
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: [0.65, 0.9], // quality PNG
                  speed: 4,
                },
                gifsicle: {
                  interlaced: false,
                },
                webp: {
                  quality: 75, // quality WebP
                },
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimize: true, // minimize active
      minimizer: [
        new TerserPlugin(), // compress Terser
        new OptimizeCssAssetsPlugin(), // Compress file CSS
      ],
      usedExports: true, // remove code Unused
      concatenateModules: true, //contact chunk
      splitChunks: {
        chunks: "all", // optimize chunk
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "style.css", // return css
      }),
    ],
  },
};
