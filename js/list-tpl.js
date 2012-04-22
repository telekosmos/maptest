$(document).ready(function () {
  console.info("Starting...")
  var listTpl = 'Client List <div class="max-height-200 scrollable" id="list">' +
    '<table class="table table-striped">' +
    '{{#clients}}<tr><td>{{name}} ({{loc}})</td></tr>{{/clients}}' +
    '</table></div>'

  var output = Mustache.render(listTpl, clients);
  $('#clientListDiv').remove('table')
  $('#clientListDiv').append(output)

  $('#gmap3').gmap3({
    action:'addMarker',
//    address:"place de l'étoile, paris",
    address: "casiano martínez 39, vigo, spain",
    map:{
      center:true,
      zoom:14
    },
    marker:{
      options:{
        draggable:true
      }
    },
    infowindow:{
      options:{
        content:'I live here !'
      }
    }
  })
})
