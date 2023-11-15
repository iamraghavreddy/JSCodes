function displayMultiplicationTableFL() {
    const number = parseInt(document.getElementById("numberInput1").value);

    // Using for loop
    let forLoopTableHTML = "<table>";
    for (let i = 1; i <= 10; i++) {
        forLoopTableHTML += `<tr><td>${number}</td><td>*</td><td>${i}</td><td>=</td><td>${number * i}</td></tr>`;
    }
    forLoopTableHTML += "</table>";
    document.getElementById("forLoopTable").innerHTML = forLoopTableHTML;

}

function displayMultiplicationTableWL() {
    const number = parseInt(document.getElementById("numberInput2").value);

    // Using while loop
    let whileLoopTableHTML = "<table>";
    let j = 1;
    while (j <= 10) {
        whileLoopTableHTML += `<tr><td>${number}</td><td>*</td><td>${j}</td><td>=</td><td>${number * j}</td></tr>`;
        j++;
    }
    whileLoopTableHTML += "</table>";
    document.getElementById("whileLoopTable").innerHTML = whileLoopTableHTML;

}

function displayMultiplicationTableDWL() {
    const number = parseInt(document.getElementById("numberInput3").value);

    // Using do-while loop
    let doWhileLoopTableHTML = "<table>";
    let k = 1;
    do {
        doWhileLoopTableHTML += `<tr><td>${number}</td><td>*</td><td>${k}</td><td>=</td><td>${number * k}</td></tr>`;
        k++;
    } while (k <= 10);
    doWhileLoopTableHTML += "</table>";
    document.getElementById("doWhileLoopTable").innerHTML = doWhileLoopTableHTML;
}
