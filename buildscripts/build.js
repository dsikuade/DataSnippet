/* eslint-disable no-console */
import webpack from 'webpack';
import config from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.green('Generating minified bundle. Please wait...'));

webpack(config).run((err,stats) => {
    if (err) {
        console.log(chalk.red(err));
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.error.map(error => console.log(chalk.red(error)));
    }

    if (jsonStats.hasWarnings) {
        console.log(chalk.yellow('webpack generated the following warnings'));
        jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
    }

    console.log(`webpack stats ${stats}`);

    console.log(chalk.green('App has been built and is located in dist'));

    return 0;
});

