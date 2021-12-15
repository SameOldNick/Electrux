import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackDevServer from 'webpack-dev-server';

declare module 'electrux' {
	export interface IPackageOptions {
		modes: {
			dev: {
				entry: string;
				outDir: string;
			};

			prod: {
				entry: string;
				outDir: string;
			};

			watch: {
				webpackConfig: WebpackDevServer.Configuration;
				baseUrl: string;
			};
		};
		
		modules: {
			main: {
				webpackPath: string;
				entry: {
					electron: string;
					window?: string;
				};
				outDir: string;
				tsConfigPath: string;
			};

			preload: {
				webpackPath: string;
				entry: Record<string, string>;
				outDir: string;
				tsConfigPath: string;
			};

			renderer: {
				webpackPath: string;
				entry: string;
				outDir: string;
				tsConfigPath: string;
				html: {
					template: string;
					output: string;
					extras?: {
						dev?: HtmlWebpackPlugin.Options;
						prod?: HtmlWebpackPlugin.Options;
					};
				};
			};
		};
	}
}