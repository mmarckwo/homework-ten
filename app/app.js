import * as MODEL from "../model/model.js";

function init(){

    showNav1();

    nav1Listener();
    nav2Listener();

    addHomeListeners();
    
}

function showNav1() {
    $(".nav1").css("display", "block");
    $(".nav2").css("display", "none");
}

function showNav2() {
    $(".nav2").css("display", "block");
    $(".nav1").css("display", "none");
}

function nav1Listener() {
    $("#app .nav1 a").click(function(e) {

        let btnID = this.id;
        let contentID = btnID + "Content";
        
        if (btnID !== "home") {
            showNav2();
            MODEL.getPageContent(contentID);
            addListeners(btnID);
        }

    });
}

function nav2Listener() {
    $(".nav2 a").click(function(e) {

        let btnID = this.id;
        let contentID = btnID + "Content";
        
        MODEL.getPageContent(contentID);
        addListeners(btnID);

        if (btnID == "home") {
            showNav1();
            nav1Listener();
        }
        
    });
}

function addListeners(btnID) {
    if (btnID == "home") {
        addHomeListeners();
    } else if (btnID == "tours") {
        addToursListeners();
    } else if (btnID == "special") {
        addOfferListeners();
    };
}

function addHomeListeners() {
    $("#app .hero .button").click(function (e) {
        MODEL.getPageContent("aboutContent");
        showNav2();
    });

    $("#app .promo-tours .promo #israel").click(function (e) {
        MODEL.getPageContent("israelContent");
        showNav2();
    });

    $("#app .promo-tours .promo #usa").click(function (e) {
        MODEL.getPageContent("usaContent");
        showNav2();
    });

    $("#app .promo-tours .promo #australia").click(function (e) {
        MODEL.getPageContent("ausContent");
        showNav2();
    });
}

function addToursListeners() {
    $("#app .tour .tours .tourPromo #israel").click(function (e) {
        MODEL.getPageContent("israelContent");
    });

    $("#app .tour .tours .tourPromo #usa").click(function (e) {
        MODEL.getPageContent("usaContent");
    });

    $("#app .tour .tours .tourPromo #australia").click(function (e) {
        MODEL.getPageContent("ausContent");
    });

    $("#app .tour .tours .tourPromo #nz").click(function (e) {
        MODEL.getPageContent("nzContent");
    });

    $("#app .tour .tours .tourPromo #france").click(function (e) {
        MODEL.getPageContent("franceContent");
    });

    $("#app .tour .tours .tourPromo #egypt").click(function (e) {
        MODEL.getPageContent("egyptContent");
    });

    $("#app .tour .tours .tourPromo #japan").click(function (e) {
        MODEL.getPageContent("japanContent");
    });

    $("#app .tour .tours .tourPromo #canada").click(function (e) {
        MODEL.getPageContent("canadaContent");
    });

    $("#app .tour .tours .tourPromo #uae").click(function (e) {
        MODEL.getPageContent("uaeContent");
    });
}

function addOfferListeners() {
    $("#app .special .offer .location .location-desc #spain").click(function (e) {
        console.log("spain");
    });

    $("#app .special .offer .location .location-desc #thailand").click(function (e) {
        console.log("thailand");
    });
}

$(document).ready(function() {
    MODEL.getPageContent("homeContent");
    init();
});