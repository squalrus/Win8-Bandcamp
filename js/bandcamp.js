// Bandcamp API
// @author Chad Schulz

var Bandcamp = WinJS.Class.define(

  // Constructor
  function (key) {

    // Debug mode -- '&debug'
    this.debug = false;

    // Bandcamp API key
    this.key = key;
    this.module = 'band';
    this.version = 3;
    this.url = 'http://api.bandcamp.com/api/album/2/';

    this.moduleBand = 'band';
    this.moduleBandVersion = 3;
    // search, discography, info

    this.moduleAlbum = 'album';
    this.moduleAlbumVersion = 2;
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
    bandSearch: function (name) {
      // TODO: account for All URL-escaping
      var searchTerm = term.replace(' ', '%20');
      return WinJS.xhr({
        responseType: 'json',
        type: 'GET',
        url: this.url + 'search?key=' + this.key + '&name=' + searchTerm
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

    albumInfo: function (albumId) {
      return WinJS.xhr({
        responseType: 'json',
        type: 'GET',
        url: this.url + 'info?key=' + this.key + '&album_id=' + albumId
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
