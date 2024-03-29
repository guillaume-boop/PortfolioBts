/* Check External Source: bvambient.js */ 
document.addEventListener("DOMContentLoaded", function() {
    var demo1 = new BVAmbient({
selector: "#ambient",
fps: 60,
max_transition_speed: 12000,
min_transition_speed: 8000,
particle_number: 30,
particle_maxwidth: 60,
particle_minwidth: 10,
particle_radius: 50,
particle_opacity: true,
particle_colision_change: true,
particle_background: 'rgba(200, 200, 200, 1)',
particle_image: {
image: false,
src: ""
},
responsive: [
 {
   breakpoint: 768,
   settings: {
     particle_number: "25"
   }
 },
 {
   breakpoint: 480,
   settings: {
     particle_number: "15"
   }
 }
]
});
});
