function logical() {
    const a = 'a';
    const b = 'b';
    const d = 7;
    console.log(a > b, a > d);

    const c = true;
    const e = false;
    console.log(c&&e,  c||e);

    const f = null;
    const g = 4;
    const h = 'a';
    console.log(f ?? g ?? h );
}

logical();
