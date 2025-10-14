import mapLoc from './mapLocation.js';

const container = document.getElementById('map');

function locView(lat, lon) {
  const options = {
    center: new kakao.maps.LatLng(lat, lon),
    level: 10,
  };

  const map = new kakao.maps.Map(container, options);

  for (let i = 0; i < mapLoc.length; i++) {
    const marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(mapLoc[i].lat, mapLoc[i].lon),
      // title: mapLoc[i].name,
    });

    const customOverlay = new kakao.maps.CustomOverlay({
      map: map,
      position: new kakao.maps.LatLng(mapLoc[i].lat, mapLoc[i].lon),
      // title: mapLoc[i].name,
      content: `<div class="mapLoc">${mapLoc[i].name}</div>`,
      xAnchor: 2,
      yAnchor: -0.1,
    });
  }

  // marker.setMap(map);
}

export default locView;
