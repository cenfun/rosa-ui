const fs = require('fs');
const path = require('path');

module.exports = (o, Util) => {

    // console.log(o.jobList);

    const item = o.jobList.find((it) => it.name === 'rosa-ui');
    if (!item) {
        return 0;
    }

    // console.log(item);

    if (!item.production) {
        return 0;
    }

    const assets = Util.getValue(item, 'report.statsData.assets.subs');
    const asset = assets[0] || {};
    const size = Util.BF(asset.size);
    const gzip = Util.BF(asset.sizeGzip);

    const minified = Boolean(item.production);

    const sizeStr = `Dist size (js minified: ${minified}): ${size} / gzip: ${gzip}`;

    console.log(sizeStr);

    const dirs = fs.readdirSync(path.resolve(__dirname, '../packages/rosa-ui/src/components'));

    const componentsStr = dirs.map((dir) => {
        const N = dir.slice(0, 1).toUpperCase() + dir.slice(1).toLowerCase();
        return `* Rui${N}  `;
    }).join('\r');

    const readmeStr = fs.readFileSync(path.resolve(__dirname, 'README.md'), 'utf8');

    const readme = Util.replace(readmeStr, {
        'placeholder-size': sizeStr,
        'placeholder-components': componentsStr
    });

    fs.writeFileSync(path.resolve(__dirname, '../README.md'), readme);
    fs.writeFileSync(path.resolve(__dirname, '../packages/rosa-ui/README.md'), readme);

    Util.logGreen('updated README.md');

    return 0;
};
