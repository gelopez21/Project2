// var layers = {
  //   one_train: new L.LayerGroup(),
  //   Two_train: new L.LayerGroup(),
  //   Three_train: new L.LayerGroup(),
  //   Four_train: new L.LayerGroup(),
  //   Five_train: new L.LayerGroup(),
  //   Five_Point_5_train: new L.LayerGroup(),
  //   Six_train: new L.LayerGroup(),
  //   Seven_train: new L.LayerGroup(),
  //   A_train: new L.LayerGroup(),
  //   A_A_train: new L.LayerGroup(),
  //   C_train: new L.LayerGroup(),
  //   E_train: new L.LayerGroup(),
  //   B_train: new L.LayerGroup(),
  //   D_train: new L.LayerGroup(),
  //   F_train: new L.LayerGroup(),
  //   M_train: new L.LayerGroup(),
  //   J_train: new L.LayerGroup(),
  //   Z_train: new L.LayerGroup(),
  //   G_train: new L.LayerGroup(),
  //   L_train: new L.LayerGroup(),
  //   S_train: new L.LayerGroup(),
  //   N_train: new L.LayerGroup(),
  //   Q_train: new L.LayerGroup(),
  //   R_train: new L.LayerGroup(),
  //   W_train: new L.LayerGroup()
  // };
 

    // layers: [
    //   layers.my_icon,
    //   layers.one_train,
    //   layers.Two_train,
    //   layers.Three_train,
    //   layers.Four_train,
    //   layers.Five_train,
    //   layers.Five_Point_5_train,
    //   layers.Six_train,
    //   layers.Seven_train,
    //   layers.A_train,
    //   layers.A_A_train,
    //   layers.C_train,
    //   layers.E_train,
    //   layers.B_train,
    //   layers.D_train,
    //   layers.F_train,
    //   layers.M_train,
    //   layers.J_train,
    //   layers.Z_train,
    //   layers.G_train,
    //   layers.L_train,
    //   layers.S_train,
    //   layers.N_train,
    //   layers.Q_train,
    //   layers.R_train,
    //   layers.W_train
    // ]

  // var overlays = {
  //   'all stops':layers.my_icon,
  //    'one train': layers.one_train,
  //     'two train':layers.Two_train,
  //     'three train':layers.Three_train,
  //     'four train':layers.Four_train,
  //     'five train':layers.Five_train,
  //     'five.five train':layers.Five_Point_5_train,
  //     'six train':layers.Six_train,
  //     'seven train':layers.Seven_train,
  //     'A train':layers.A_train,
  //     'A.A train':layers.A_A_train,
  //     'C train':layers.C_train,
  //     'E train':layers.E_train,
  //     'B train':layers.B_train,
  //     'D train':layers.D_train,
  //     'F train':layers.F_train,
  //     'M train':layers.M_train,
  //     'J train':layers.J_train,
  //     'Z train':layers.Z_train,
  //     'G train':layers.G_train,
  //     'L train':layers.L_train,
  //     'S train':layers.S_train,
  //     'N train':layers.N_train,
  //     'Q train':layers.Q_train,
  //     'R train':layers.R_train,
  //     'W train':layers.W_train
  // };
   // L.control.layers(null, overlays).addTo(map);
    
//    var map = L.eeGeo.map('map', eeGeo_api_key, {
//     center: [40.7128,-74.0060],
//     zoom: 15
// });
//   var my_icon = L.icon({
//     iconUrl: 'black_map_marker.png',
//     iconSize: [15, 15],
//   });
    
 
  d3.csv("static/js/DOITT_SUBWAY_STATION_01.csv").then(function(stops_info) {
    stops_info.forEach(function(data2) {
      data2.lat = +data2.lat;
      data2.lon = +data2.lon;
    })
    stops_info.forEach(function(data2) {
      L.marker([data2.lat,data2.lon],{icon: my_icon})
      .bindPopup(`<h1> ${data2.NAME} <br /><hr> ${data2.LINE} </h1>`).addTo(map);
      });
      
    setTimeout(function() {
      map.setView([40.7128,-74.0060], 17, {headingDegrees: 204.374, tiltDegrees:15.0});
    }, 10000);

// ONE TWO THREE
L.polyline(one_train, {color:'red', opacity: .75}).addTo(map);
L.polyline(Two_train, {color:'red' ,opacity: .75}).addTo(map);
L.polyline(Three_train, {color:'red' ,opacity: .75}).addTo(map);

// FOUR FIVE SIX
L.polyline(Four_train, {color:'#173B0A', opacity: .75}).addTo(map);
L.polyline(Five_train, {color:'#173B0A', opacity: 1}).addTo(map);
L.polyline(Five_Point_5_train, {color:'#173B0A', opacity: 1}).addTo(map);
L.polyline(Six_train, {color:'#173B0A', opacity: .75}).addTo(map);

// SEVEN
L.polyline(Seven_train, {color:'purple', opacity: .75}).addTo(map);

// ACE 
L.polyline(A_train, {color:'blue', opacity: .75}).addTo(map);
L.polyline(A_A_train, {color:'blue', opacity: .75}).addTo(map);
L.polyline(C_train, {color:'blue', opacity: .75}).addTo(map);
L.polyline(E_train, {color:'blue', opacity: 1}).addTo(map);

// BDFM
L.polyline(B_train, {color:'#FF8333', opacity: .85}).addTo(map);
L.polyline(D_train, {color:'#FF8333', opacity: .85}).addTo(map);
L.polyline(F_train, {color:'#FF8333', opacity: .85}).addTo(map);
L.polyline(M_train, {color:'#FF8333', opacity: .85}).addTo(map);

// JZ
L.polyline(J_train, {color:'#3B250A', opacity: .85}).addTo(map);
L.polyline(Z_train, {color:'#3B250A', opacity: .85}).addTo(map);

// G
L.polyline(G_train, {color:'#46FF33', opacity: .85}).addTo(map);

// L 
L.polyline(L_train, {color:'black', opacity: .7}).addTo(map);

// S
L.polyline(S_train, {color:'black', opacity: .7}).addTo(map);

// NQRW
L.polyline(N_train, {color:'yellow', opacity: .75 }).addTo(map);
L.polyline(Q_train, {color:'yellow', opacity: .75 }).addTo(map);
L.polyline(R_train, {color:'yellow', opacity: .75 }).addTo(map);
// L.polyline(W_train, {color:'yellow', opacity: .75 }).attTo(map);



});
