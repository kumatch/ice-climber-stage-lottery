
function enableStages() {
    return $('.sw-stages:checked').map(function (i, elm) {
        return elm.getAttribute("data-on");
    });
}

$("#lot-btn").on("click", function () {
    var stages = enableStages()
    if (stages.length) {
        var stage = stages[Math.floor(Math.random() * stages.length)];
        $("#lot-no").text(stage)
    }
});

$("#allon").on("click", function () {
    $('.sw-stages').prop("checked", true).change()
});
$("#alloff").on("click", function () {
    $('.sw-stages').prop("checked", false).change()
});
