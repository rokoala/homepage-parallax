import Parallax from 'parallax-js';
import $ from 'jquery';

$(document).ready(()=>{
  let scene = $("#scene")[0];
  let parallaxInstance = new Parallax(scene);
});