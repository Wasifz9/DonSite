$(document).ready(() => {
    var link = window.location.href;
    var page = link.split("/")[3].split(".")[0];
    var linkID = "#" + page + "-link"
    
    if (page.length == 0) {
        linkID = "#home-link"
    } 

    $(linkID).addClass("active-page")
})