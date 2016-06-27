
fis.match('{p, p-common, lib-home, components}/**.less', {
    rExt: '.css', // from .less to .css
    parser: fis.plugin('less-2.x', {
        // fis-parser-less-2.x option
    })
});

fis.match('node_modules/normalize/**.styl', {
    parser: fis.plugin('stylus', {
        sourcemap: true
    }),
    rExt: '.css'
});

fis.match('{p, p-common, lib-home, components}/**.{css,less, js}',{
    useHash : true
});

fis.match('node_modules/normalize/**.tpl', {
    useHash : true
});
