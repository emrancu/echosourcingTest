
/*
this js file for http://www.whitestuff.com/bargains/womens-bargains/
Author: AL EMRAN
Author URL:alemran.media
Author Email:emrancu1@gmail.com
Author Mobile:01766603578,01515287271

Created for Echo Sourcing Pvt. Ltd

*/

// declare container css of size filtering stiky box
var fixerCSS={'position':'fixed','right':'50px','bottom':'-13px','width':'300px','z-index':'100','background':'white'};


// declare   css of size filtering box header
var headerCSS={'background-position':'right center','background-origin': 'content-box','background-color': '#f2f2f2'};


// declare   css of size filtering list
var listCSS={'display':'inline-block','width':'33.3333%'};


// change box header text
$("#facetMiddleBlock>div.bd-color2:first-child div.header").text("Filter by Size");

// assign container css of size filtering stiky box
$("#facetMiddleBlock>div.bd-color2:first-child").css(fixerCSS);

// assign css of size filtering box header

$("#facetMiddleBlock>div.bd-color2:first-child div.header").css(headerCSS);

// assign css of size filtering list
$("#facetMiddleBlock>div.bd-color2:first-child ul>li").css(listCSS);
 