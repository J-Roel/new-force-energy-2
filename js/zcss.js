$(function() {
          $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
        });
    });

  setTimeout( function(){
    $('#main-menu').attr('checked','true');
  },3000);



// FOR OUR SALES PITCH
var btCount = 0;
var fade = true;
setInterval( function(){

  switch(btCount){
    case 0:
      if(fade === true){
        $('.bannerText').text("Safety Oriented");
        $('.bannerText').fadeIn(300);
        fade = false;
      } else {
        $('.bannerText').fadeOut(300);
        fade = true;
        btCount++;
      }
      break;
      
    case 1:
      if(fade === true){
        $('.bannerText').text("Integrity");
        $('.bannerText').fadeIn('slow');
        fade = false;
      } else {
        $('.bannerText').fadeOut(300);
        fade = true;
        btCount++;
      }
      break;
    case 2:
     if(fade === true){
        $('.bannerText').text("Environmentally Friendly");
        $('.bannerText').fadeIn(300);
        fade = false;
      } else {
        $('.bannerText').fadeOut(300);
        fade = true;
        btCount++;
      }
      break;
    case 3:
      if(fade === true){
        $('.bannerText').text("Cutting Edge Ingenuity")
        $('.bannerText').fadeIn(300);
        fade = false;
      } else {
        $('.bannerText').fadeOut(300);
        fade = true;
        btCount++;
      }
      break;
    case 4:
    if(fade === true){
        $('.bannerText').text("Environmentally Friendly")
        $('.bannerText').fadeIn(300);
        fade = false;
      } else {
        $('.bannerText').fadeOut(300);
        fade = true;
        btCount++;
      }
      break;
    default:
      $('.bannerText').text("Small Foot Print");
  }

  
  
  if(btCount > 4){
    btCount = 0;
  }

},3000);


$( document ).ready(function() {

	//DRAWER OPEN AND CLOSE FUNCTIONS
	$('#drawer-button').click(function(){
		this.classList.toggle( "active" );
		$('#drawer').slideToggle(300);

	});
	$('.screen-side').click(function(){
		$('#drawer-button').removeClass( "active" );
		$('#drawer').slideToggle(300);
	});
    $('.drawer-side a').click(function(){
  		$('#drawer-button').removeClass( "active" );
  		$('#drawer').slideToggle(300);    	
    });

    //Mouse over for arrow jump
    $('.cd-btn').hover(function(){
    	$("i",this).addClass('bounce');
    }, function(){
    	$("i",this).removeClass('bounce');
    });




    //=============================================================
    //RIG SELECTION POPUP
    //First set to not display, should be set in CSS, but make sure here
    $('#rigs-popup').css('display', 'none');
    
    $('#rigs-click').click(function(){
        
        $('#rigs-popup').slideToggle(300);
        // $('#drawer-button').css("display", "none" );
    });
  
    $('#rigs-popup').mouseleave( function(){
        $('#rigs-popup').slideToggle(300);
        // $('#drawer-button').css("display", "block" );
    });


	//SCROLL FUNCTION TO MAKE HEADER DISAPPEAR
	//Make sure header is out when we load the page
  $("#header").fadeOut(10);

  
	$(window).on("scroll", function() {
        if($(window).scrollTop() > 35) {
            $('#drawer-button').css('left', '3%');
        } else {
            $('#drawer-button').css('left', '50%');
        }
	});











// Original from: http://callmenick.com/post/advanced-parallax-scrolling-effect
// New approach for mobile and single image moves created by txopi (quidware)

window.requestAnimationFrame = window.requestAnimationFrame
															 || window.mozRequestAnimationFrame
															 || window.webkitRequestAnimationFrame
															 || window.msRequestAnimationFrame
															 || function(f){setTimeout(f, 1000/60)}

function doParallax(){
  var parallax = document.querySelectorAll(".parallax"),
      speed = -0.3;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

			var windowYOffset = window.pageYOffset, elementYOffset = el.offsetTop, elBackgrounPos = "50% " + ((windowYOffset - elementYOffset) * speed) + "px";
      el.style.backgroundPosition = elBackgrounPos;

    });
  };
}

window.addEventListener('scroll', function(){ // on page scroll
	requestAnimationFrame(doParallax) // call doParallax() on next available screen repaint
}, false)

window.addEventListener('resize', function(){ // on window resize
	requestAnimationFrame(doParallax) // call doParallax() on next available screen repaint
}, false)















function slideToggleProjects(projectsPreviewWrapper, projectIndex, index, bool) {
  var randomProjectIndex = makeUniqueRandom();
  
  if( index < numRandoms - 1 ) {
    projectsPreviewWrapper.eq(randomProjectIndex).toggleClass('slide-out', bool);
    setTimeout( function(){
      //animate next preview project
      slideToggleProjects(projectsPreviewWrapper, projectIndex, index + 1, bool);
    }, 150);
  } else {
    //this is the last project preview to be animated 
    projectsPreviewWrapper.eq(randomProjectIndex).toggleClass('slide-out', bool).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
      // ...
      animating = false;
    });
  }
}























	


/*
	SETUP EVENTS 
	- Grabs the children in the events-data class and populates the
	events-container div with the information passed through the
	HTML5 Dataset
	- Helps to keep the index.html code cleaner
*/

//Below is test data and moch code for a event entry

	// data-title="Code For FoCo Openhouse"
	// data-date="5/20/2016"
	// data-startTime="9:00AM"
	// data-endTime="12:00PM"
	// data-desc="Do you need visual outreach for your idea, but don't have the financial well being? Code For Fort Collins is reaching out to the community. Stop by and get to know us. Let us show you how we can help bring your ideas to life."
	// data-info="242 Linden St. Fort Collins, CO | Pizza and beer will be provided."
	// data-img="../assets/slideshow/image-a.jpg"
	// data-link="event.html"

	// <!-- TEST -->
	 //    <a href="eventspage.html">
	 //    <div class="event slide-effect card row">
	 //        <div class="one-third">
	 //            <h4 class="date">5/20/2016</h4>
	 //            <h4 class="time">9:00AM</h4><h4 class="time">-</h4>
	 //            <h4 class="time">12:00PM</h4> 
	 //        </div>
	 //        <div class="two-third">
	 //          <div class="row">
	 //          <h4 class="title">Code For Fort Collins Openhouse</h4>
	 //          </div>
	 //          <div class="row">
	 //            <p>242 Linden St. Fort Collins, CO | Pizza will be served</p>
	 //          </div>
	 //        </div>
	 //    </div>
	 //    </a>	




function buildList(dataLocation, destination){
	var children = dataLocation;
	var myContainer = destination;

	if(children.length > 0){

		for(var i = 0; i <= children.length-1; i++){
			var data = children[i].dataset;

			//Make new card link
			var newLink = document.createElement('a');
			newLink.href = data.link;
			
			//Make new card
			var newCard = document.createElement('div');
            newCard.className = 'list-item slide-effect event row';
            
        	//Setup column
        	var column = document.createElement('div');
        	column.className = 'one-third';
            
            //Make Date
            var dateH4 = document.createElement('h4');
            dateH4.className="date";
            dateH4.innerHTML = data.date;
            	//Append to date-time
            	column.appendChild(dateH4);
            
            //Make start time
            var startTimeH4 = document.createElement('h4');
            startTimeH4.innerHTML = data.starttime;
            startTimeH4.className="time";
            	//Append to date-time
            	column.appendChild(startTimeH4);
            
            //Make to
            var toH4 = document.createElement('h4');
            toH4.className="time";
            toH4.innerHTML = "-";
            
            	//Append to date-time
            	column.appendChild(toH4);
            
            //Make end time
            var endTimeH4 = document.createElement('h4');
            endTimeH4.innerHTML = data.endtime;
            endTimeH4.className="time";
            	//Append to date-time
            	column.appendChild(endTimeH4);

            	//Append to card
            	newCard.appendChild(column);

            	//Now do the title, info
            	//Setup column
        		var column = document.createElement('div');
        		column.className = 'two-third row';

        		//Make row
        		var row = document.createElement('div');
        		row.className = 'row';

        		//Make Title
            	var h4 = document.createElement('h4');
            	h4.className="title";
            	h4.innerHTML = data.title;
            		//Append to row
            		row.appendChild(h4);

            		//Append to column
            		column.appendChild(row);

            	//Make row
        		var row = document.createElement('div');
        		row.className = 'row';

        		//Make Title
            	var p = document.createElement('p');
            	p.innerHTML = data.info;
            		//Append to row
            		row.appendChild(p);

            		//Append to column
            		column.appendChild(row);

	            	//Append to card
	            	newCard.appendChild(column);

            	//Append card to link
            	newLink.appendChild(newCard);
	        	//Finally append it to container
	        	myContainer.append(newLink);

		}//End for

		//Call this after we have setup all our cards so methods work
            $(".description").hide();

			var show = function() {
			    $(this).children(".description").slideDown(400);
			};
			var hide = function() {
			    $(this).children(".description").slideUp(400);
			};  

			$(".card").hover(show, hide); 

	}//End if
}//End setup events




/*
	Syntax: buildList(dataLocation, destination)
	- datalocation: parent element where all the div's
	containing our datasets reside
	- destination: element (container) that we want our newly built
	cards to be appended to.
*/

//This is for EVENTS
buildList( $(".events-data").children(), $(".events-container") );

//This is for BLOG
buildList( $(".blog-data").children(), $(".blog-container") );

//---------------------------------------------------------------------------





});//END DOCUMENT ON READY






/* END OF FILE */




