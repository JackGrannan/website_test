var main = function() {
  
  $('.roboky-2d').box2d({'shape':'circle','density':.3, 'restitution':0.8, 'friction':.8, 'y-velocity': 30});
  
  //$('.notmyman').box2d({'shape':'circle','density':0, 'restitution':1, 'friction':.1, 'y-velocity': 50});
  
}

$(document).ready(main);