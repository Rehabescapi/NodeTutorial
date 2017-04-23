/*eslint-disable no-console*/

import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'produciton';


console.log (chalk.blue('Generating minified bundle for produciton. This will take a momnet...'));

webpack(webpackConfig).run((err, stats) => {
    if(err) {
        console.log(chalk.red(err));
        return 1;
    }
    const jsonStats = stats.toJson();
    if(jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }
    if(jsonStats.hasWarnings){
        console.log(chalk.yellow('Webpack generated the following warnings : '));
        jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
    }
    console.log(`Webpack stats: ${stats}`);


    console.log(chalk.green(`Your app has been built for productions and sent to the dst folder`));
    return 0;
})