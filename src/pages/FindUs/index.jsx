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
      '@media screen and (max-width: 992px)': {width: '100%'},
    }

    return (
      <div class="flex flex-col items-center h-screen">
        <div class="flex-col items-center justify-center py-20">
          <div class="bg-menuBackground/70 rounded-md shadow-md shadow-menuBackground text-gray-200 text-xl p-2 mx-2">
            <h1 class="text-center">A címünk</h1>
            <span>Utca: Eötvös utca 20</span><br />
            <span>Város: Csurgó</span><br />
            <span>Az útvonalhoz kattintson
                  <a class="text-red-600" href="https://www.google.com/maps/dir//'46.248997,17.101704'" rel='noreferrer' target="_blank"> ide </a>
                  (átirányítás a Google maps-re)
            </span>
          </div>
        </div>
      {/* <div class="flex justify-center items-center border-2 border-red-600" style={{height: '88vh'}}> */}
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
              name={'Fenyo-Kerteszet'}
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