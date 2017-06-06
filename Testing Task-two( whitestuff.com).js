
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


// select  size filtering stiky box
var sizeArea=$("#facetMiddleBlock>div.bd-color2:first-child");

// assign container css of size filtering stiky box
sizeArea.css(fixerCSS);


// select  box header area
var headerarea=$("#facetMiddleBlock>div.bd-color2:first-child div.header");

// change box header text
headerarea.text("Shop Your Size");


// assign css for size filtering box header
$("#facetMiddleBlock>div.bd-color2:first-child div.header").css(headerCSS);


// declare   css for minize and maximize button  
var btncsstext="float: right; position: absolute;top: 0px;right: 0px;height: 28px;display: block;background: #616A75;width: 33px;text-align: center;padding-top: 5px";

// declare svg icon content for minize button
var minimizeBTN='<svg fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <path d="M19 13H5v-2h14v2z"/> <path d="M0 0h24v24H0z" fill="none"/> </svg>';

// declare svg icon content for maximize button
var morebtn='<svg fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';
	
// set maximize button as default
headerarea.append('<span style="'+btncsstext+'">'+morebtn+"</span>");


// add text after box header
headerarea.next('ul').prepend('<p style="padding: 10px 0px">Select your size to see item that are  in stock for you</p>');



// assign css of size filtering list
$("#facetMiddleBlock>div.bd-color2:first-child ul>li").css(listCSS);
 

 
 // change minimize and maximize button depend on click event 
 headerarea.click(function(){
	if($(this).hasClass('opened')){
	$(this).find('span').html(morebtn);	
	}else{
		$(this).find('span').html(minimizeBTN);	
	} 
	 
 });
 
 
 
 // change after header  text depend on select 
sizeArea.find('ul>li>a').click(function(){
	sizeArea.find('ul>p').text('Select several sizes to broaiden your chooice' ) ;
	 
 });
 
 // click on header when click on min/max button
 headerarea.find('span').click(function(){
	 
headerarea.click();
	 
 })
 
 