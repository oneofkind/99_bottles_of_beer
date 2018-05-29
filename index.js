module.exports = main;


function main(X) {
    let lyric = '';
    if (X < 0) {
        return 'undefine'
    }
    while (X > 0) {
        if (X == 1) {
            let line = `1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.
        `
            lyric = lyric + line;
            return lyric.trim();
        }
        let str = (X == 2) ? 'bottle' : 'bottles';
        let line = `${X} bottles of beer on the wall, ${X} bottles of beer.\nTake one down and pass it around, ${X-1} ${str} of beer on the wall.\n`
        lyric = lyric + line;
        --X;
    }
}
