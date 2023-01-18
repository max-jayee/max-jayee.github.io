for (const theadNode of document.getElementsByTagName(`thead`)) {
    const thNode = document.createElement(`th`)
    .style.textAlign(`center`)
    .innerHtml(`No.`);

    const trNode = theadNode.firstElementChild;
    trNode.prepend(thNode);
}

for (const tbodyNode of document.getElementsByTagName(`tbody`)) {
    tbodyNode.children.forEach((trNode, i) => {
        const tdNode = document.createElement(`td`)
        .style.textAlign(`center`)
        .innerHtml(`${i + 1}`);

        trNode.prepend(tdNode);
    });
}