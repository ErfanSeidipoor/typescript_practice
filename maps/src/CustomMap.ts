
export interface Mappabale {
  location: {
    lat: number,
    lng: number,
  },
  markerContent(): string,
  color: string,
}

export class CustomMap {
  private googleMap: google.maps.Map;
  
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId),
      {
        zoom: 0,
        center: {
          lat: 35,
          lng: 54
        }
      }
    )
  }

  // addUserMarker(user: User):void {
  //   const marker = new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng,
  //     }
  //   })
  // }

  // addCompanyMarker(company: Company):void {
  //   const marker = new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     }
  //   })
  // }

  // addMarker(mappable: User | Company ):void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: mappable.location.lat,
  //       lng: mappable.location.lng,
  //     }
  //   })
  // }

  addMarker(mappable: Mappabale ):void {
    const Marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      }
    })

    const infoWindow = new google.maps.InfoWindow({
      content: mappable.markerContent()
    })

    Marker.addListener('click', ()=>{
      infoWindow.open(this.googleMap, Marker)
    })
  }
}

