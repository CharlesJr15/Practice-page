// This is JavaScript Section //
moreBtn.onclick = function () {
    document.getElementById("textHold").style.height = "75vh";
    document.getElementById("moreBtn").style.display = "none"
    document.getElementById("lessBtn").style.display = "block";
}

lessBtn.onclick = function () {
    document.getElementById("textHold").style.height = "10vh";
    document.getElementById("lessBtn").style.display = "none";
    document.getElementById("moreBtn").style.display = "block";
}
