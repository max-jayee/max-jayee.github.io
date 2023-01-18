for (const theadNode of document.getElementsByTagName(`thead`)) {
    const thNode = document.createElement(`th`);
    thNode.style.textAlign = `center`;
    thNode.innerText = `No.`;

    const trNode = theadNode.firstElementChild;
    trNode.prepend(thNode);
}

for (const tbodyNode of document.getElementsByTagName(`tbody`)) {
    for (var i = 0; i < tbodyNode.children.length; i++) {
        const tdNode = document.createElement(`td`);
        tdNode.style.textAlign = `center`;
        tdNode.innerText = `${i + 1}`;

        const trNode = tbodyNode.children.item(i);
        trNode.prepend(tdNode);
    }
}