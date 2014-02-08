require([ "./vendor/raphael" ], function (Raphael)
{
	function randomInRange(min, max)
	{
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}


	function handleAnimationDone(e)
	{
		console.log(e);
	}

	function floatRight(set, floatOriginX, floatOriginY, radius, scaleString)
	{
		var boundsLeft = (floatOriginX - (radius * .5));
		var boundsRight = (floatOriginX + (radius * .5));
		var boundsTop = (floatOriginY - (radius * .5));
		var boundsBottom = (floatOriginY + (radius * .5));

		var endX = randomInRange(boundsLeft, boundsRight);
		var endY = randomInRange(boundsTop, boundsBottom);
		var endXString = "t"+String(endX)+","+String(endY);

		set.animate({transform:endXString+","+scaleString}, randomInRange(2000,5000), "<>", function(){
			floatLeft(set, floatOriginX, floatOriginY, radius, scaleString);
		});
	}

	function floatLeft(set, floatOriginX, floatOriginY, radius, scaleString)
	{
		var boundsLeft = (floatOriginX - (radius * .5));
		var boundsRight = (floatOriginX + (radius * .5));
		var boundsTop = (floatOriginY - (radius * .5));
		var boundsBottom = (floatOriginY + (radius * .5));

		var endX = randomInRange(boundsLeft, boundsRight);
		var endY = randomInRange(boundsTop, boundsBottom);
		var endXString = "t"+String(endX)+","+String(endY);

    	set.animate({transform:endXString+","+scaleString}, randomInRange(2000,5000), "<>", function(){
			floatRight(set, floatOriginX, floatOriginY, radius, scaleString);
		});
	}


	function drawBalloon(containerName, balloonColor, balloonScale, floatOriginX, floatOriginY, startFloat)
	{

		var floatRadius = 50;
		var paperWidth = 1200;
		var paperHeight = 900;

		var container = document.getElementById(containerName);
    	var paper = Raphael(container, paperWidth, paperHeight);

    	var balloonString = paper.rect(51, 99, 1, 240); 
    		balloonString.attr({fill: '#ffffff', stroke: '#ffffff', 'stroke-width': 0});

    	var balloon = paper.circle(50, 50, 100);  
    		balloon.attr({fill: balloonColor, stroke: balloonColor, 'stroke-width': 0});

    	var balloonKnot = paper.path("M 51 140 l -7 19 l 14 2 z"); 
    		balloonKnot.attr({fill: balloonColor, stroke: balloonColor, 'stroke-width': 0});  

		var balloonElements = paper.set();
		    balloonElements.push(balloon);
			balloonElements.push(balloonKnot);
			balloonElements.push(balloonString);
		
		
		var endXString = "t"+String(floatOriginX)+","+String(floatOriginY);
		var scaleString = "s"+String(balloonScale)+","+String(balloonScale)+",50, 50";

    	balloonElements.transform(endXString+scaleString);

		if(startFloat)
			floatRight(balloonElements, floatOriginX, floatOriginY, floatRadius, scaleString);
			
	}

	function drawFloatingUpBalloon(containerName, balloonColor, balloonScale, floatOriginX, floatOriginY)
	{
		var paperWidth = 1200;
		var paperHeight = 900;

		var container = document.getElementById(containerName);
    	var paper = Raphael(container, paperWidth, paperHeight);

    	var balloonString = paper.rect(51, 99, 1, 240); 
    		balloonString.attr({fill: '#ffffff', stroke: '#ffffff', 'stroke-width': 0});

    	var balloon = paper.circle(50, 50, 100);  
    		balloon.attr({fill: balloonColor, stroke: balloonColor, 'stroke-width': 0});

    	var balloonKnot = paper.path("M 51 140 l -7 19 l 14 2 z"); 
    		balloonKnot.attr({fill: balloonColor, stroke: balloonColor, 'stroke-width': 0});  

		var balloonElements = paper.set();
		    balloonElements.push(balloon);
			balloonElements.push(balloonKnot);
			balloonElements.push(balloonString);
		
		
		var endXString = "t"+String(floatOriginX)+","+String(floatOriginY);
		var scaleString = "s"+String(balloonScale)+","+String(balloonScale)+",50, 50";

    	balloonElements.transform(endXString+scaleString);

		floatUp(balloonElements, floatOriginX, paperHeight, 50, scaleString);			
	}


	function floatUp(set, floatOriginX, floatOriginY, radius, scaleString)
	{
		var boundsLeft = (floatOriginX - (radius * .5));
		var boundsRight = (floatOriginX + (radius * .5));
		var boundsTop = (floatOriginY - (radius * .5));
		var boundsBottom = (floatOriginY + (radius * .5));

		var endX = randomInRange(boundsLeft, boundsRight);
		var endY = -200;
		var endXString = "t"+String(endX)+","+String(endY);

		

    	set.animate({transform:endXString+","+scaleString}, randomInRange(2000,5000), "<>", function(){
			set.paper.clear();
		});
	}




	drawBalloon("balloon0", '#44c8f5', 2, 150, 0, false);
	drawBalloon("balloon1", '#ff403f', 1.6, 600, 90, false);
	drawBalloon("balloon2", '#99cf16', 2.2, 400, 120, false);
	drawBalloon("balloon3", '#99cf16', 2.4, 884, 60, false);
	drawBalloon("balloon4", '#0079c1', 2.2, 190, 380, true);
	drawBalloon("balloon5", '#0079c1', 3.2, 800, 380, true);
	drawBalloon("balloon6", '#99cf16', 1.4, 120, 600, true);
	drawBalloon("balloon7", '#ff403f', 2.2, 900, 160, true);
	drawBalloon("balloon8", '#ff403f', 2.6, 420, 500, true);


	//drawFloatingUpBalloon("banner-balloon0", '#99cf16', 2.6, 420, 500);
	//drawFloatingUpBalloon("banner-balloon1", '#ff403f', 2.6, 420, 500, true);
	//drawFloatingUpBalloon("banner-balloon2", '#0079c1', 2.6, 420, 500, true);

	
	document.getElementById("initially-hidden-content").style.display = "block";
	document.getElementById("intro-button").style.display = "block";

	var toPop = -1;
	var popperButton = document.getElementById('intro-button');
	popperButton.addEventListener('click',incrementPop,false);

	var balloonsToPop = new Array();
		balloonsToPop[0] = new Array('balloon4', "balloon7");
		balloonsToPop[1] = new Array('balloon0', 'balloon6', 'balloon1','balloon3');
		balloonsToPop[2] = new Array("balloon-wrapper");
		


	
	
	function incrementPop()
	{
		toPop++;
		var last = Object.size(balloonsToPop)

		if(toPop < last)
		{

			var popObject = balloonsToPop[toPop];
			
			for(var index in popObject)
			{
				console.log("index "+popObject[index]);
				document.getElementById(popObject[index]).style.display = "none";
			}

			if(toPop >= last - 1)
			{
				console.log("show video");

				var frame = document.getElementById('playerframe');
				frame.addEventListener('click',togglePoster,false);

				videoElement.style.visibility = "visible";
			}
			
		}
		else
		{
			console.log("no more balloons to pop");
			clearInterval(introInterval);
		}
	}

	Object.size = function(obj)
	{
	    var size = 0, key;
	    for (key in obj) {
	        if (obj.hasOwnProperty(key)) size++;
	    }
	    return size;
	};


	var introInterval = setInterval(incrementPop, 1500);




/*
/////////////////////
		VIDEO
/////////////////////
*/
	
	var videoElement = document.getElementById('videoelement');
	var playButton = document.getElementById('playerframe');
	
	function togglePoster()
	{
		//playButton.style.visibility = "hidden";
		videoElement.play();
	}






/*
///////////////////////////////////
		link rollovers
///////////////////////////////////
*/
	
	//var linkElement = document.getElementById('videoelement');

	
	$( ".no-touch .link-container" ).hover(
		function()
		{
    		//$( this ).children( ".pre-link-arrow" ).fadeTo( 500, 1 );

    		//$( this ).children("pbslink").animate({ color: "#ec037b" }, 100);
    		//$( this ).children( ".link-arrow" ).fadeTo( 100, 0 );

    		// $( this ).children( ".pre-link-arrow" ).animate(
    		// 	{
      //           	marginRight : "0px"
      //           	,opacity:1
      //       	},100);

  		}

  		,function()
  		{
  			//$( this ).children( ".pre-link-arrow" ).fadeTo( 100, 0 );
    		//$( this ).children("pbslink").animate({ color: "#ffffff" }, 500);
    		//$( this ).children( ".link-arrow" ).fadeTo( 500, 1 );

    		// $( this ).children( ".pre-link-arrow" ).animate(
    		// 	{
      //           	marginRight : "10px"
      //           	,opacity:0
      //       	},500);
  		}
  	);

	// $( ".no-touch #cta" ).hover( function(){
	// 													drawFloatingUpBalloon("banner-balloon0", '#99cf16', 2.6, 420, 500);
	// 												}
	// );

});








    