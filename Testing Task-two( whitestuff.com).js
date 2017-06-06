
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
var headerCSS={'background-image':'none', 'background-color': '#717B87','color':'white'};


// declare   css of size filtering list
var listCSS={'display':'inline-block','width':'33.3333%'};


// change box header text
var headerarea=$("#facetMiddleBlock>div.bd-color2:first-child div.header");

headerarea.text("Shop Your Size");


var btncsstext="float: right; position: absolute;top: 0px;right: 0px;height: 28px;display: block;background: #616A75;width: 33px;text-align: center;padding-top: 5px";
	


headerarea.next('ul').prepend('<p style="padding: 10px">select your size to see item that are  in stock for you</p>');

var minimizeBTN='<svg fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <path d="M19 13H5v-2h14v2z"/> <path d="M0 0h24v24H0z" fill="none"/> </svg>';

var morebtn='<svg fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';

headerarea.append('<span style="'+btncsstext+'">'+morebtn+"</span>");

// assign container css of size filtering stiky box
$("#facetMiddleBlock>div.bd-color2:first-child").css(fixerCSS);

// assign css of size filtering box header

$("#facetMiddleBlock>div.bd-color2:first-child div.header").css(headerCSS);

// assign css of size filtering list
$("#facetMiddleBlock>div.bd-color2:first-child ul>li").css(listCSS);
 
 
 
 headerarea.click(function(){
	if($(this).hasClass('opened')){
	$(this).find('span').html(morebtn);	
	}else{
		$(this).find('span').html(minimizeBTN);	
	} 
	 
 });
 
 
 
  
headerarea.next('ul>li').click(function(){
	headerarea.next('ul>p').text('Select several sizes to broaiden your chooice' ) ;
	 
 });
 
 
 
 
 