$(document).ready(function(){$(".right-button").click(function(){var n=$(".slider-down img")
.last();n.fadeIn(1e3,function(){n.remove(),$(".slider-down").prepend(n)});var e=$(".slider-up img")
.last();e.fadeIn(1e3,function(){e.animate({width:"toggle"},350),e.remove(),$(".slider-up")
.prepend(e)})}),$(".left-button").click(function(){var n=$(".slider-down img").first();n.fadeOut(0,function(){$(".slider-down")
.append(n),n.fadeIn(1e3)});var e=$(".slider-up img").first();e.fadeOut(0,function(){$(".slider-up").append(e),e.fadeIn(1e3)})})});