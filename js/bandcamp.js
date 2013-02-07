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

    this._moduleTrack = 'track';
    this._moduleTrackVersion = 3;
    // info

    this._moduleUrl = 'url';
    this._moduleUrlVersion = 1;
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

    /*
     * bandDiscogrophy() Retrieve a band discogrophy given a band ID
     * @param name <String> The ID representing the album
     * @sample
     */
    bandDiscogrophy: function (bandId) {

      // Return the xhr object
      return WinJS.xhr({
        responseType: 'json',
        type: 'GET',
        url: this._baseUrl + this._moduleBand + '/' + this._moduleBandVersion + '/discography?key=' + this._key + '&band_id=' + bandId
      });
    },

    /*
     * bandInfo() Retrieve band info given a band ID
     * @param name <String> The ID representing the album
     * @sample
     */
    bandInfo: function (bandId) {

      // Return the xhr object
      return WinJS.xhr({
        responseType: 'json',
        type: 'GET',
        url: this._baseUrl + this._moduleBand + '/' + this._moduleBandVersion + '/info?key=' + this._key + '&band_id=' + bandId
      });
    },

    /*
     * albumInfo() Retrieve the album information based on album ID
     * @param albumId <String> The album ID
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

    /*
     * trackInfo() Retrieve the track information based on track ID
     * @param albumId <String> The track ID
     * @sample
     */
    trackInfo: function (trackId) {

      // Return the xhr object
      return WinJS.xhr({
        responseType: 'json',
        type: 'GET',
        url: this._baseUrl + this._moduleTrack + '/' + this._moduleTrackVersion + '/info?key=' + this._key + '&track_id=' + trackId
      });
    },

    /*
     * urlInfo() Retrieve the url information based on a URL
     * @param url <String> The URL
     * @sample
     */
    urlInfo: function (url) {

      // Return the xhr object
      return WinJS.xhr({
        responseType: 'json',
        type: 'GET',
        url: this._baseUrl + this._moduleUrl + '/' + this._moduleUrlVersion + '/info?key=' + this._key + '&url=' + url
      });
    }
  },
  // Static Members
  {
  }
);
