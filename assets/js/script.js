$(document).ready(function(){
    $("#home-menu").click(function(){
        $("#home").removeClass('hide');
        $("#bio").addClass('hide');
        $("#projects").addClass('hide');
        $("#skills").addClass('hide');
        $("#contact").addClass('hide');
        $(".active").removeClass('active');
        $("#home-menu").addClass('active');
    });

    $("#bio-menu").click(function(){
        $("#bio").removeClass('hide');
        $("#home").addClass('hide');
        $("#projects").addClass('hide');
        $("#skills").addClass('hide');
        $("#contact").addClass('hide');
        $(".active").removeClass('active');
        $("#bio-menu").addClass('active');
    });

    $("#projects-menu").click(function(){
        $("#projects").removeClass('hide');
        $("#home").addClass('hide');
        $("#bio").addClass('hide');
        $("#skills").addClass('hide');
        $("#contact").addClass('hide');
        $(".active").removeClass('active');
        $("#projects-menu").addClass('active');
    });

    $("#skills-menu").click(function(){
        $("#skills").removeClass('hide');
        $("#home").addClass('hide');
        $("#projects").addClass('hide');
        $("#bio").addClass('hide');
        $("#contact").addClass('hide');
        $(".active").removeClass('active');
        $("#skills-menu").addClass('active');
    });

    $("#contact-menu").click(function(){
        $("#contact").removeClass('hide');
        $("#home").addClass('hide');
        $("#projects").addClass('hide');
        $("#skills").addClass('hide');
        $("#bio").addClass('hide');
        $(".active").removeClass('active');
        $("#contact-menu").addClass('active');
    });
})

$(document).ready(function(){
    $("#home-mobile-menu").click(function(){
        $("#home").removeClass('hide');
        $("#bio").addClass('hide');
        $("#projects").addClass('hide');
        $("#skills").addClass('hide');
        $("#contact").addClass('hide');
        $(".active").removeClass('active');
        $("#home-mobile-menu").addClass('active');
    });

    $("#bio-mobile-menu").click(function(){
        $("#bio").removeClass('hide');
        $("#home").addClass('hide');
        $("#projects").addClass('hide');
        $("#skills").addClass('hide');
        $("#contact").addClass('hide');
        $(".active").removeClass('active');
        $("#bio-mobile-menu").addClass('active');
    });

    $("#projects-mobile-menu").click(function(){
        $("#projects").removeClass('hide');
        $("#home").addClass('hide');
        $("#bio").addClass('hide');
        $("#skills").addClass('hide');
        $("#contact").addClass('hide');
        $(".active").removeClass('active');
        $("#projects-mobile-menu").addClass('active');
    });

    $("#skills-mobile-menu").click(function(){
        $("#skills").removeClass('hide');
        $("#home").addClass('hide');
        $("#projects").addClass('hide');
        $("#bio").addClass('hide');
        $("#contact").addClass('hide');
        $(".active").removeClass('active');
        $("#skills-mobile-menu").addClass('active');
    });

    $("#contact-mobile-menu").click(function(){
        $("#contact").removeClass('hide');
        $("#home").addClass('hide');
        $("#projects").addClass('hide');
        $("#skills").addClass('hide');
        $("#bio").addClass('hide');
        $(".active").removeClass('active');
        $("#contact-mobile-menu").addClass('active');
    });
})

var TxtRotate = function(el, toRotate, period) {
this.toRotate = toRotate;
this.el = el;
this.loopNum = 0;
this.period = parseInt(period, 10) || 2000;
this.txt = '';
this.tick();
this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
var i = this.loopNum % this.toRotate.length;
var fullTxt = this.toRotate[i];

if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
} else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
}

this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

var that = this;
var delta = 300 - Math.random() * 100;

if (this.isDeleting) { delta /= 2; }

if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
} else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
}

setTimeout(function() {
    that.tick();
}, delta);
};

window.onload = function() {
var elements = document.getElementsByClassName('txt-rotate');
for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
    new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
}
// INJECT CSS
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
document.body.appendChild(css);
};