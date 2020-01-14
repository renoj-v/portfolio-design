const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const sitemap = require("./sitemap.js");
const pages = sitemap.pages;
const nav = sitemap.nav;
const footer = sitemap.footer;

const plugins = pages.map(function(page, i) {
    const plug = new HtmlWebpackPlugin({
        ...page,
        pages: pages,
        nav: nav,
        footer: footer,
        inject: false
    });
    return plug;
});
const pug = {
    test: /\.pug$/,
    use: {
        loader: "pug-loader",
        options: {
            self: true
        }
    }
};
const babel = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader"
    }
};
const scss = {
    test: /\.scss$/,
    use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        {
            loader: "clean-css-loader",
            options: {
                compatibility: "ie9",
                level: 2,
                inline: ["remote"]
            }
        },
        "postcss-loader",
        "resolve-url-loader",
        "sass-loader"
    ]
};
const images = {
    test: /\.(jpg|png|svg|pdf|zip|mp4)$/,
    use: {
        loader: "file-loader",
        options: {
            name: "[path][name].[ext]"
        }
    }
};
const fonts = {
    test: /\.(woff2?|ttf|otf|eot|svg)$/,
    exclude: /node_modules/,
    loader: 'file-loader',
    options: {
        name: '[path][name].[ext]'
    }
}
const config = {
    entry: { main: "./src/main.js" },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [babel, pug, scss, images,fonts]
    },
    devServer: {
        contentBase: path.join(__dirname, "/dist/"),
        watchContentBase: true,
        port: 8000,
        disableHostCheck: true
    },
    plugins: [
        ...plugins,
        new MiniCssExtractPlugin({
            filename: "main.css"
        })
    ]
};

module.exports = config;
