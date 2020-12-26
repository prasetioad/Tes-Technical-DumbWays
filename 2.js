function cetakPola(x) {
    let y = '';
    for (i = 0; i < x; i++) {
        for (t = 1; t <= i; t++) {
            y += ' ';
        }
        for (q = x; q > i; q--) {
            y += "* ";
        }
        for (a = x - 1; a > i; a--) {
            y += "* ";
        }
        y += '\n';

    }
    console.log(y);
}

cetakPola(7); //<<< Ubah disini
