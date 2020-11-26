function bookList(e, n) {
    var bs = document.getElementById("BookList");
    var book = document.getElementById("list" + n);
    var span = bs.getElementsByTagName("span");

    if (e.ctrlKey) {
        if (book.style.backgroundColor == "orange")
            book.style.backgroundColor = "inherit";
        else
            book.style.backgroundColor = "orange";
        return;
    }
    for (b of span) {
        b.style.backgroundColor = "inherit";
    }
    book.style.backgroundColor = "orange";

    if (e.ShiftKey) {
        if (book.style.backgroundColor == "orange")
            for (b of span) {
                if (book.style.backgroundColor == "inherit")
                    b.style.backgroundColor = "orange";
                esle
                return;
            }
    }
}