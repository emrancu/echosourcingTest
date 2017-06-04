 
 
 
/*
this js file for changing DOM content of https://www.butlins.com/latest-offers/prices.aspx?start=08/2017
Author: AL EMRAN
Author URL:alemran.media
Author Email:emrancu1@gmail.com
Author Mobile:01766603578,01515287271

Created for Echo Sourcing Pvt. Ltd

*/
 
 
 
 function changecontent(){
 $(".grid-row .selected").each(function(){
		
		// select title 
         var titleselect=$(this).find('a#whatsOnLink');
		 
		 // select about icon button
         var morebutton=$(this).find('a.lightbox-accomodation-more-info');
		 
		 // select price 
         var priceContent=$(this).find('.latest-offer-price');
		 // separate money sign 
         var priceSign=(priceContent.text()).replace(/\d+/g,'');
		 
		 // separate number of price
         var priceNumber=(priceContent.text()).replace(/[^0-9\.]/g, '');
		 
		 if(priceNumber==199){
		 // calculate new price
	     var newprice=priceNumber*4;
		 
		 // set new price with money sign 
		 priceContent.html(priceSign+' '+newprice);
		 
		 		 // insert extra text
		 $('<span style="padding-top: 6px;display: block;font-size: 13px;"> 2 Adults and 2 Children</span>').insertAfter($(this).find(".latest-type"));
		 
		 
		 }
		 // clone/copy title content
		 var titlecontent=titleselect.clone();
		 
		 //clone/copy about buttonn
		 var moreclone=morebutton.clone();
		 // remove previous tite
		 titleselect.remove(); 
		  
		// remove previous more button
		 morebutton.remove(); 
		
		 // place title after get a quote
         $(titlecontent.css({'display':'block','padding-top':'10px'})).insertAfter($(this).find('a.bookingEngine'));
		 
			 // insert more button after brand name
		 $(moreclone.css('margin-bottom','0px')).insertBefore($(this).find(".latest-type br")); 
		

		// add css to brand and price 
		 $(this).find(".latest-type").css({'font-size':'15px','line-height': '22px','font-weight': 'bold'});
		 
		 // change height of box
		 $(this).find(">:first-child").css({'min-height':'160px','height':'auto'});
		
		  
    });
	//$(".grid-row .alpha>.calendar").css('height','160px');
 }
 
 
 // call content chnge function
 changecontent();
  
 // check ajax request completed or not if complete or stop then execute 
  ! function () {
    var changableContent;
    $(document).ajaxStop(function () {
	
        var $changableContentArea = $(".grid_planner_container");
		
        if(changableContent !== $changableContentArea.html()){
            changableContent = $changableContentArea.html();
            $changableContentArea.trigger('contentChanged');
        }
    });
}();

// detect content change event 

$(".grid_planner_container").on('contentChanged',function(){
	
	
 setTimeout(function(){  
 
 changecontent();// call contentchange function 

 }, 500);

	
});