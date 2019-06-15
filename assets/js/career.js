/* decalration and initialization....*/
var inputname = $("#username");
var submitbutton = $(".submit");
var previousbutton = $(".previous");
var modalheader = $("#mheader");
var modalLabel = $("#myModalLabel");
var checkbox = $(".checkbox");
var checkbox1 = $("#checkbox1");
var checkbox2 = $("#checkbox2");
var checkbox3 = $("#checkbox3");
var checkbox4 = $("#checkbox4");
var checkbox5 = $("#checkbox5");
var introduction = $("#intro");
var cSpace = $("#courseSpace");
var limit = 2;

$("#start").click(function () {
    $(".Username").text(inputname.val());
    submitbutton.hide();
    previousbutton.hide();
});

/*radiobutton limit function.....*/
$("input.checkbox").on("change", function (evt) {

    if ($("input[name='course']:checked").length == limit) {
        submitbutton.show();
    } else if ($("input[name='course']:checked").length > limit) {
        this.checked = false;
        alert("only 2 courses are allowed");
    } else {
        submitbutton.hide();
    }
});

submitbutton.click(function () {
    previousbutton.show();
    checkbox.hide();
    submitbutton.hide();
    introduction.addClass("bold");
    modalLabel.text("Recommended course(s) for you");
    modalheader.text("your recommended courses are");

    //inference rules for the inference engine
    if (checkbox1.is(":checked") && checkbox2.is(":checked")) {
        introduction.text("your favourite subjects are: Computer and Biology");
        cSpace.text("Computer Science, Biology, Forensics");

    } else if (checkbox1.is(":checked") && checkbox3.is(":checked")) {
        introduction.text("your favourite subjects are: Computer and Chemistry");
        cSpace.text("Computer Science, Chemistry, System Engineering, Process Engineering");
    } else if (checkbox1.is(":checked") && checkbox4.is(":checked")) {
        introduction.text("your favourite subjects are: Computer and Physics");
        cSpace.text("Computer Science, Computer Engineering, Physics");
    } else if (checkbox1.is(":checked") && checkbox5.is(":checked")) {
        introduction.text("your favourite subjects are: Computer and Mathematics");
        cSpace.text("Computer Science, Computer Engineering, Physics, Control and Instrumentation");
    } else if (checkbox2.is(":checked") && checkbox3.is(":checked")) {
        introduction.text("your favourite subjects are: Biology and Chemistry");
        cSpace.text("Biology, Chemistry,  Biochemistry, Microbiology, medicine, Pharmacy, Nursing, Botany, Zoology, Agricultural Science");
    } else if (checkbox2.is(":checked") && checkbox4.is(":checked")) {
        introduction.text("your favourite subjects are: Biology and Physics");
        cSpace.text("Biology, Physioterapy, Physics, Food Engineering");
    } else if (checkbox2.is(":checked") && checkbox5.is(":checked")) {
        introduction.text("your favourite subjects are: Biology and Mathematics");
        cSpace.text("Biology, Mathematics, Agricultural & Enviromental Engineering");
    } else if (checkbox3.is(":checked") && checkbox4.is(":checked")) {
        introduction.text("your favourite subjects are: Chemistry and Physics");
        cSpace.text("Chemistry,  Biochemistry, Physics, Chemical Engineering");
    } else if (checkbox3.is(":checked") && checkbox5.is(":checked")) {
        introduction.text("your favourite subjects are: Chemistry and Mathematics");
        cSpace.text("Chemistry,  Biochemistry, Mathematics, Chemical Engineering, Industrial Chemistry");
    } else {
        introduction.text("your favourite subjects are: Physics and Mathematics");
        cSpace.text("Physics,  Industrial/Applied Physics, Mathematics, Computer Engineering, Electrical/Electronic Engineering, Mechanical Engineering, Civil Engineering");
    }
    cSpace.show();
    introduction.show();
});


previousbutton.click(function () {
    checkbox.show();
    previousbutton.hide();
    submitbutton.show();
    modalLabel.text("Favourite Subject(s) selector");
    modalheader.text("choose your two (2) favourite subject(s) from the ones listed below.");
    cSpace.hide();
    introduction.hide();
});