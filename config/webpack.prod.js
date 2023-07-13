const os = require("os");
const path = require("path");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const PreloadWebpackPlugin = require("@vue/preload-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const threads = os.cpus().length;
const glob = require("glob");
const htmlFiles = glob.sync("./public/iframeFile/*.html");
const getStyleLoaders = preProcessor => {
    return [
        MiniCssExtractPlugin.loader,
        "css-loader",
        {
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    plugins: ["postcss-preset-env"],
                },
            },
        },
        preProcessor,
    ].filter(Boolean);
};

module.exports = {
    entry: {
        main: "./src/js/main.js",
        memory: "./src/js/memory.js",
        iframeJs: "./src/js/iframeStyle.js",
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "static/js/[name].[contenthash:8].js",
        chunkFilename: "static/js/[name].[contenthash:8].chunk.js",
        assetModuleFilename: "static/media/[name].[hash][ext]",
        clean: true,
    },
    module: {
        rules: [
            {
                oneOf: [
                    { test: /\.css$/, use: getStyleLoaders() },
                    { test: /\.s[ac]ss$/, use: getStyleLoaders("sass-loader") },
                    {
                        test: /\.(png|jpe?g|gif|svg|webp|ico)$/,
                        type: "asset",
                        parser: {
                            dataUrlCondition: {
                                maxSize: 10 * 1024,
                            },
                        },
                    },
                    {
                        test: /\.(ttf|woff2?|map3|map4|avi)$/,
                        type: "asset/resource",
                    },
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: [
                            {
                                loader: "thread-loader",
                                options: {
                                    workers: threads,
                                },
                            },
                            {
                                loader: "babel-loader",
                                options: {
                                    cacheDirectory: true,
                                    cacheCompression: false,
                                    plugins: ["@babel/plugin-transform-runtime"],
                                },
                            },
                        ],
                    },
                ],
            },
        ],
    },
    plugins: [
        new ESLintWebpackPlugin({
            context: path.resolve(__dirname, "../src"),
            exclude: "node_modules",
            cache: true,
            cacheLocation: path.resolve(__dirname, "../node_modules/.cache/.eslintcache"),
            threads,
        }),
        new HtmlWebpackPlugin({
            title: "MyLifeMemory",
            template: path.resolve(__dirname, "../public/index.html"),
            filename: "index.html",
            chunks: ["main"],
        }),
        new HtmlWebpackPlugin({
            title: "Memory",
            template: path.resolve(__dirname, "../public/memory.html"),
            filename: "memory.html",
            chunks: ["memory"],
        }),
        ...htmlFiles.map(file => {
            const filename = path.basename(file);
            return new HtmlWebpackPlugin({
                template: file,
                filename: path.join("iframeFile", filename),
                chunks: ["iframeJs"], // 指定使用的入口文件
            });
        }),
        new MiniCssExtractPlugin({
            filename: "static/css/[name].[contenthash:8].css",
            chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
        }),
        new PreloadWebpackPlugin({
            rel: "preload",
            as: "script",
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
        }),
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                parallel: threads,
            }),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminGenerate,
                    options: {
                        plugins: [
                            ["gifsicle", { interlaced: true }],
                            ["jpegtran", { progressive: true }],
                            ["optipng", { optimizationLevel: 5 }],
                            [
                                "svgo",
                                {
                                    plugins: [
                                        "preset-default",
                                        "prefixIds",
                                        {
                                            name: "sortAttrs",
                                            params: {
                                                xmlnsOrder: "alphabetical",
                                            },
                                        },
                                    ],
                                },
                            ],
                        ],
                    },
                },
            }),
        ],
        splitChunks: {
            chunks: "all",
        },
        runtimeChunk: {
            name: entrypoint => `runtime~${entrypoint.name}`,
        },
    },
    mode: "production",
    devtool: "source-map",
};
