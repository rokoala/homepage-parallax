import Parallax from 'parallax-js';
import $ from 'jquery';

$(document).ready(()=>{
  let scene = $("#scene")[0];
  let parallaxInstance = new Parallax(scene);

  let $kid = $(".kid");
  let $message = $(".message");

  $(".island").click((e)=>{
    let $island = $(e.currentTarget);
    $island.toggleClass("island-big");
    $kid.toggleClass("kid-big");
  });


  $kid.click((e)=>{
    $message.css("visibility","visible");
  })
});