
function getParagraph1() {

    var inputs = [];

    for (var i = 1; i <= 6; i++) {
        inputs.push(document.getElementById("para1_input_box_1" + i).value);
        console.log(inputs);
    }

    inputs.join(".");{
    document.getElementById("showParagraph1").innerHTML = inputs.join(".");
    }
}

function getParagraph2() {

    var input = [];

    for (var i = 1; i <= 6; i++) {
        input.push(document.getElementById("para2_input_box_1" + i).value);
        console.log(input);

    }

    inputs.join("."); {

        document.getElementById("showParagraph2").innerHTML = inputs.join(".");

    }

}