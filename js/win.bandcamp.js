// Bandcamp API
// @author Chad Schulz
// @version 0.1.0

var Bandcamp = WinJS.Class.define(

  // Constructor
  function ( key ){

      // Debug mode -- '&debug'
      this.debug = false;

      // Bandcamp API key
      this._key = key;

      // Version
      this.VERSION = '0.1.0';

      this.BASE_URL = 'http://api.bandcamp.com/api/';

      // Default module
      this.moduleDefault = 'band';
      this.versionDefault = 3;

      // Band module [search. discography, info]
      this.MODULE_BAND = 'band';
      this.MODULE_BAND_VERSION = 3;

      // Album module [info]
      this.MODULE_ALBUM = 'album';
      this.MODULE_ALBUM_VERSION = 2;

      // Track module [info]
      this.moduleTrack = 'track';
      this.moduleTrackVersion = 3;

      // Url module [info]
      this.moduleUrl = 'url';
      this.moduleUrlVersion = 1;
  },

  // Instance Members
  {

      /*
       * bandSearch() Search for a band name
       * @param name <String> The band name term to search on
       * @sample http://api.bandcamp.com/api/band/3/search?key=<key>&name=baron%20von%20luxxury
       */
      bandSearch: function( name ){

          var searchTerm;
          // TODO: account for All URL-escaping
          searchTerm = name.replace(' ', '%20');
          searchTerm = name.replace('#', '%23');
          searchTerm = name.replace('&', '%26');
          searchTerm = name.replace('?', '%3F');

          // Return the xhr object
          return WinJS.xhr({
              responseType: 'json',
              type: 'GET',
              url: this.BASE_URL + this.MODULE_BAND + '/' + this.MODULE_BAND_VERSION + '/search?key=' + this._key + '&name=' + searchTerm
          });
      },

      /*
       * bandDiscography() Search for a band's discography
       * @param bandId <Number> The band's id of which to search
       */
      bandDiscography: function (bandId) {
          return WinJS.xhr({
              responseType: 'json',
              type: 'GET',
              url: this.BASE_URL + this.MODULE_BAND + '/' + this.MODULE_BAND_VERSION + '/discography?key=' + this._key + '&band_id=' + bandId
          });
      },

      /*
       * bandInfo() Search for a band's info
       * @param bandId <Number> The band's id of which to search
       */
      bandInfo: function (bandId) {
          return WinJS.xhr({
              responseType: 'json',
              type: 'GET',
              url: this.BASE_URL + this.MODULE_BAND + '/' + this.MODULE_BAND_VERSION + '/info?key=' + this._key + '&band_id=' + bandId
          });
      },

      /*
       * albumInfo() Retrieve the album information based on album ID
       * @param name <String> The ID representing the album
       * @sample http://api.bandcamp.com/api/album/2/info?key=<key>&album_id=2587417518
       */
      albumInfo: function (albumId) {

          // Return the xhr object
          return WinJS.xhr({
              responseType: 'json',
              type: 'GET',
              url: this.BASE_URL + this.MODULE_ALBUM + '/' + this.MODULE_ALBUM_VERSION + '/info?key=' + this._key + '&album_id=' + albumId
          });
      },

      trackInfo: function (trackId) {
          return WinJS.xhr({
              responseType: 'json',
              type: 'GET',
              url: this.url + 'info?key=' + this.key + '&track_id=' + trackId
          });
      },

      urlInfo: function (url) {
          return WinJS.xhr({
              responseType: 'json',
              type: 'GET',
              url: this.url + 'info?key=' + this.key + '&url=' + url
          });
      }
  },
  // Static Members
  {
  }
);
