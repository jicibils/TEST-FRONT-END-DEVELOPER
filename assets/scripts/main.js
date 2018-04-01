console.log('hello there!');
$('.bloque').smoove({offset:'20%'});


// ********************************************************
// TABLA
// ********************************************************

$(document).ready(function() {
    $('#myTable').dataTable();
} );


var select = document.getElementById('optionsAjax');
select.addEventListener('change',function() {
  var selectedOption = this.options[select.selectedIndex];
  console.log(selectedOption.value + ': ' + selectedOption.text);
    $('#myTable').dataTable( {

      "ajax": {
            "url": "./../data.json",
            "type": "GET",
             "data": {},
            "dataSrc": function ( data ) {
              for (var i = 0; i < data.length; i++) {
                if (selectedOption.text == 'Vacio') {
                  return "";
                }
                if(selectedOption.text == data[i].label){
                  console.log(data[i]);
                  return data[i].data;
                }
              }
            }
          },
      "bDestroy": true
  } );
})


// Boton para tabla
$('.show-card').click(function(e) {
  $('.card').addClass('show').css('display', 'block');
  $('.show-card').addClass('hide');
});

$('.card .close').click(function(e) {
  $('.card').addClass('hide');
  setTimeout(function() {
    $('.card').css('display', 'none').removeClass('show').removeClass('hide');
  }, 1000);
  $('.show-card').removeClass('hide');
});

// ********************************************************
// GRAFICO
// ********************************************************
function makeChart(nameLabel,data) {
  $('canvas#myChart').remove();
  $("div.myChart").append('<canvas id="myChart"></canvas>');
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Data1", "Data2", "Data3", "Data4",
               "Data5", "Data6", "Data7", "Data8",
               "Data9", "Data10","Data11","Data12",
               "Data13","Data14","Data15","Data16",
               "Data17","Data18","Data19","Data20",
               "Data21","Data22","Data23","Data24"
             ],
      datasets: [{
          label: nameLabel,
          data: data,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)'
          ],

          borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    },
  });
}


var selectGraphic = document.getElementById('optionsAjax-graphic');
makeChart("Vacio","")



selectGraphic.addEventListener('change',function() {
  $('canvas#myChart').remove();
  $("div.myChart").append('<canvas id="myChart"></canvas>');
  var selectedOptionGraphic = this.options[selectGraphic.selectedIndex];
  $.ajax({
    url: "./../data.json",
    type: "GET",
    data: {},
    success: function ( data ) {
      response = JSON.parse(data)
      for (var i = 0; i < response.length; i++) {
        if (selectedOptionGraphic.text == 'Vacio') {
          makeChart("Vacio","")
        }
        if(selectedOptionGraphic.text == response[i].label){
          var arrayData = [  response[i].data[0][1], response[i].data[1][1], response[i].data[2][1],
                   response[i].data[3][1], response[i].data[4][1], response[i].data[5][1],
                   response[i].data[6][1], response[i].data[7][1], response[i].data[8][1],
                   response[i].data[9][1], response[i].data[10][1],response[i].data[11][1],
                   response[i].data[12][1],response[i].data[13][1],response[i].data[14][1],
                   response[i].data[15][1],response[i].data[16][1],response[i].data[17][1],
                   response[i].data[18][1],response[i].data[19][1],response[i].data[20][1],
                   response[i].data[21][1],response[i].data[22][1],response[i].data[23][1]
               ]
          makeChart(selectedOptionGraphic.text,arrayData)
        }
      }
    }

  })
})

// Boton para grafico
$('.show-card-graphic').click(function(e) {
  $('.card-graphic').addClass('show').css('display', 'block');
  $('.show-card-graphic').addClass('hide');
});

$('.card-graphic .close').click(function(e) {
  $('.card-graphic').addClass('hide');
  setTimeout(function() {
    $('.card-graphic').css('display', 'none').removeClass('show').removeClass('hide');
  }, 1000);
  $('.show-card-graphic').removeClass('hide');
});
