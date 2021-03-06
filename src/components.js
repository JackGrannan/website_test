import React from 'react';
import ReactDOM from 'react-dom';

const render = function(el, comp, props)
{
  $(function()
  {
    // el is an element, and it can be anything that $() will accept, although
    // passing a function or html fragment will be rough
    if ( typeof el === "function" )
    {
      throw "Cannot pass function in el parameter to render_element()";
    }

    let $el = $(el);
    if ( $el.length == 0 )
    {
      console.warn("0 Elements found in el parameter:", el);
    }

    $el.each(
      function()
      {
        ReactDOM.render(
          React.createElement(comp, props),
          this
        );
      }
    );
  });
};

export { render };
export { default as Clock } from './components/clock.jsx';
export { default as RoboKy } from './characters/roboKy.jsx'
