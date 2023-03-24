
// let date = 0;
setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`
    // return date = d;
    document.getElementById("H").innerText = htime + ":";
    document.getElementById("M").innerText = mtime + ":";
    document.getElementById("S").innerText = stime;
}, 1000);

