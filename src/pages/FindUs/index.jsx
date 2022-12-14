import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: true,  // Hides or shows the InfoWindow
    activeMarker: {lat: 46.248997,
      lng: 17.101704},          // Shows the active marker upon click
    selectedPlace: {lat: 46.248997,
      lng: 17.101704}          // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const containerStyle = {
      position: 'relative',
      width: '70%',
      height: '60%',
      '@media screen and (maxWidth: 992px)': {width: '100%', height:'100%'},
    }

    return (
      <div class="flex flex-col items-center justify-around h-screen">
        <div class="flex-col items-center justify-center w-screen md:w-1/3">
          <div class="text-center bg-gray-100/30 rounded-md shadow-md shadow-gray-300 text-menuBackground px-4 py-8 md:mx-2">
            <h1 class="text-2xl italic mb-4"><strong> A címünk:</strong></h1>
            <p class="text-xl">
              Utca: Eötvös utca 20.<br />
              Város: Csurgó<br />
              Ir.szám: 8840
            </p>
          </div>
        </div>
        <div class="text-gray-500 text-center">
        Az útvonalhoz kattintson
                  <a class="text-red-500 hover:text-red-700" href="https://www.google.com/maps/dir//'46.248997,17.101704'" rel='noreferrer' target="_blank"> ide </a>
                  (átirányítás a Google maps-re)
        </div>
        <>
          <Map
            containerStyle={containerStyle}
            google={this.props.google}
            zoom={10}
            initialCenter={
              {
                lat: 46.248997,
                lng: 17.101704
              }
            }
            >
            <Marker
              title={'Your destination'}
              name={'Fenyofa-Kerteszet'}
              position={{lat: 46.248997, lng: 17.101704}} />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map>
      {/* </div> */}
        </>
    </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB1GXzr2xqUY69TlQndFhMpmiENKnuJXEs'
})(MapContainer);