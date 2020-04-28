new ClipboardJS("#copy");

function ok() {
    var a = document.getElementById("atas").value;

    var b = a.split(" ").join("\n");

    var c = b
        .split("\n")
        .filter((item, i, allItems) => {
            return i === allItems.indexOf(item);
        })
        .join("\n");

    document.getElementById("bawah").value = c;

    var count = c.split(/\r\n|\r|\n/).length;
    document.getElementById("hasil").value = count;
}

function newLine() {
    var bawah = document.getElementById("bawah").value;

    var result = bawah.replace(/((.*\n){10})/g, "$1\n");
    document.getElementById("result_separate").value = result;
}

function copyEachRow() {
    var result = document.getElementById("result_separate").value;
    var asd = result.split("\n");
    var get = [];
    for (var key in asd.slice(0, 10)) {
        get.push(asd[key]);
    }
    var copyText = get.join("\n");
    copyStringToClipboard(copyText);

    document.getElementById("result_separate").value = result
        .split("\n")
        .slice(11)
        .join("\n");

    alert("Copied");
}

function copyStringToClipboard(str) {
    var el = document.createElement("textarea");

    el.value = str;

    el.setAttribute("readonly", "");
    el.style = { position: "absolute", left: "-9999px" };
    document.body.appendChild(el);

    el.select();

    document.execCommand("copy");

    document.body.removeChild(el);
}
