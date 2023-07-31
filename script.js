$(document).ready(function() {
  // AJAX request to load GeoJSON data
  $.ajax({
    type: 'GET',
    url: 'http://mukul007ju.heliohost.us/postgis2geojson.php',
    dataType: 'json',
    success: function(data) {
      // Data received successfully, let's populate the table
      if (data.features && data.features.length > 0) {
        var tableBody = $('#table-body');
        $.each(data.features, function(index, features) {
          var plot_no = features.properties.plot_no;
          var landuse = features.properties.landuse;
          var katha = features.properties.katha;
          
          // Append data to the table
          var row = '<tr>' +
                      '<td>' + plot_no + '</td>' +
                      '<td>' + landuse + '</td>' +
                      '<td>' + katha + '</td>' +
					  
					  
                    '</tr>';
          tableBody.append(row);
        });
      }
    },
    error: function(xhr, status, error) {
      console.error('Error loading GeoJSON data:', error);
    }
  });
});
