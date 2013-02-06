// Bandcamp API
// @author Chad Schulz

var Bandcamp = WinJS.Class.define(

  // Constructor
  function (key) {

    // Debug mode -- '&debug'
    this.debug = false;

    // Bandcamp API key
    this._key = key;

    this.module = 'band';
    this.version = 3;
    this._baseUrl = 'http://api.bandcamp.com/api/';

    this._moduleBand = 'band';
    this._moduleBandVersion = 3;
    // search, discography, info

    this._moduleAlbum = 'album';
    this._moduleAlbumVersion = 2;
    // info

    this.moduleTrack = 'track';
    this.moduleTrackVersion = 3;
    // info

    this.moduleUrl = 'url';
    this.moduleUrlVersion = 1;
    // info
  },

  // Instance Members
  {

    /*
     * bandSearch() Search for a band name
     * @param name <String> The band name term to search on
     * @sample http://api.bandcamp.com/api/band/3/search?key=<key>&name=baron%20von%20luxxury
     */
    bandSearch: function(name) {

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
        url: this._baseUrl + this._moduleBand + '/' + this._moduleBandVersion + '/search?key=' + this._key + '&name=' + searchTerm
      });
    },

    bandDiscogrophy: function (bandId) {
      return WinJS.xhr({
        responseType: 'json',
        type: 'GET',
        url: this.url + 'discography?key=' + this.key + '&band_id=' + bandId
      });
    },

    bandInfo: function (bandId) {
      return WinJS.xhr({
        responseType: 'json',
        type: 'GET',
        url: this.url + 'info?key=' + this.key + '&band_id=' + bandId
      });
    },

    /*
     * albumInfo() Retrieve the album information based on album ID
     * @param name <String> The ID representing the album
     * @sample http://api.bandcamp.com/api/album/2/info?key=<key>&album_id=2587417518
     */
    albumInfo: function(albumId) {

      // Return the xhr object
      return WinJS.xhr({
        responseType: 'json',
        type: 'GET',
        url: this._baseUrl + this._moduleAlbum + '/' + this._moduleAlbumVersion + '/info?key=' + this._key + '&album_id=' + albumId
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
