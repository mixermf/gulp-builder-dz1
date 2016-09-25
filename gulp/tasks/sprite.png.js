'use strict';

module.exports = () => {
    $.gulp.task('sprite', () =>{
        var spriteData = $.gulp.src('./source/images/icons/*.png')
            .pipe($.gp.spritesmith({
                imgName: 'sprite.png',
                imgPath: '../img/sprite.png',
                cssName: 'sprite.scss'
            }));
    return spriteData.img.pipe($.gulp.dest('source/images/sprites/'));
    return spriteData.css.pipe($.gulp.dest('source/style/'));

    });
};


