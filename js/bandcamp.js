// Bandcamp API
// @author Chad Schulz
// @version 0.1.0

  // Constructor
var Bandcamp = function ( key ){

  // Debug mode -- '&debug'
  this.debug = false;

  // Bandcamp API key
  this._key = key;

  // Version
  this.VERSION = '0.1.0';

  this._BASE_URL = 'http://api.bandcamp.com/api/';

  // Default module
  this.moduleDefault = 'band';
  this.versionDefault = 3;

  // Band module [search. discography, info]
  this._MODULE_BAND = 'band';
  this._MODULE_BAND_VERSION = 3;

  // Album module [info]
  this._MODULE_ALBUM = 'album';
  this._MODULE_ALBUM_VERSION = 2;

  // Track module [info]
  this._MODULE_TRACK = 'track';
  this._MODULE_TRACK_VERSION = 3;

  // Url module [info]
  this._MODULE_URL = 'url';
  this._MODULE_URL_VERSION = 1;


  /*
   * bandSearch() Search for a band name
   * @param name <String> The band name term to search on
   * @example http://api.bandcamp.com/api/band/3/search?key=<key>&name=finch
   */
  this.bandSearch = function( name ){

      var searchTerm;
      // TODO: account for All URL-escaping
      searchTerm = name.replace(' ', '%20');
      searchTerm = name.replace('#', '%23');
      searchTerm = name.replace('&', '%26');
      searchTerm = name.replace('?', '%3F');

      // Return the xhr object
      return $.ajax({
          dataType: 'jsonp',
          type: 'GET',
          url: this._BASE_URL + this._MODULE_BAND + '/' + this._MODULE_BAND_VERSION + '/search?key=' + this._key + '&name=' + searchTerm
      });
  },

  /*
   * bandDiscography() Search for a band's discography
   * @param bandId <Number> The band's id of which to search
   * @example http://api.bandcamp.com/api/band/3/discography?key=<key>&name=4151651232
   */
  this.bandDiscography = function( bandId ){
      return $.ajax({
          dataType: 'jsonp',
          type: 'GET',
          url: this._BASE_URL + this._MODULE_BAND + '/' + this._MODULE_BAND_VERSION + '/discography?key=' + this._key + '&band_id=' + bandId
      });
  },

  /*
   * bandInfo() Search for a band's info
   * @param bandId <Number> The band's id of which to search
   * @example http://api.bandcamp.com/api/band/3/info?key=<key>&name=4151651232
   */
  this.bandInfo = function( bandId ){
      return $.ajax({
          dataType: 'jsonp',
          type: 'GET',
          url: this._BASE_URL + this._MODULE_BAND + '/' + this._MODULE_BAND_VERSION + '/info?key=' + this._key + '&band_id=' + bandId
      });
  },

  /*
   * albumInfo() Retrieve the album information based on album ID
   * @param albumId <String> The ID representing the album
   * @example http://api.bandcamp.com/api/album/2/info?key=<key>&album_id=2830519537
   */
  this.albumInfo = function( albumId ){
      return $.ajax({
          dataType: 'jsonp',
          type: 'GET',
          url: this._BASE_URL + this._MODULE_ALBUM + '/' + this._MODULE_ALBUM_VERSION + '/info?key=' + this._key + '&album_id=' + albumId
      });
  },

  /*
   * trackInfo() Retrieve the track information based on track ID
   * @param trackId <String> The ID representing the track
   * @example http://api.bandcamp.com/api/track/3/info?key=<key>&track_id=1822857759
   */
  this.trackInfo = function( trackId ){
      return $.ajax({
          dataType: 'jsonp',
          type: 'GET',
          url: this._BASE_URL + this._MODULE_TRACK + '/' + this._MODULE_TRACK_VERSION + '/info?key=' + this._key + '&track_id=' + trackId
      });
  },

  /*
   * urlInfo() Retrieve the band ID from the URL
   * @param url <String> The ID representing the track
   * @example http://api.bandcamp.com/api/url/1/info?key=<key>&url=http://finchmusic.bandcamp.com
   */
  this.urlInfo = function( url ){
      return $.ajax({
          dataType: 'jsonp',
          type: 'GET',
          url: this._BASE_URL + this._MODULE_URL + '/' + this._MODULE_URL_VERSION + '/info?key=' + this._key + '&url=' + url
      });
  }

};
