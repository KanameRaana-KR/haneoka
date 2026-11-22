var c=e=>Object.freeze({supportedActions:Object.freeze(["advance","choose","pause","resume","skip"]),dispatch(s){switch(s.type){case"advance":return e.requestNext();case"choose":return e.choose(s.key);case"pause":return e.pause();case"resume":return e.resume();case"skip":return e.skip()}}});export{c as a};
/*! For license information please see chunk-IR5XPXYH.js.LEGAL.txt */
