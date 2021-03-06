
	  horizontalTitle = {title: 'dates',  titleTextStyle: {color: '#FF0000'}}
	  myGridlines = {color: '#FF0000', count: '8'}
	  
	  myMinor = {}
	  
	  // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {
      	    	
      	var bigArray = [];
      	
      	//use a for loop to make an array of arrays out of relevant JSON data    	
      	for(var i=0;i<JSONFredData.observations.length;i++){
      		
      		var smallArray = [];
      		
      		var FRED1 = JSONFredData.observations[i];
      		
      		smallArray.push(FRED1.date);
      	    smallArray.push(Number(FRED1.value));
      	
      	bigArray.push(smallArray);
      	
      	}
      	
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Date');
        data.addColumn('number', 'Value');
        data.addRows(bigArray);

        // Set chart options
        var options = {'title':'THIS ASSIGNMENT IS HARD',
                       'width':1200,
                       'height':800,
                       'hAxis':{}
                      };
        
        // add the red title Dates to the hAxis.
		options.hAxis = horizontalTitle; 
		// I can't make the gridlines work.
		options.hAxis.gridlines = myGridlines;
		

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }