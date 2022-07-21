// // const cliendId = "ef3cdfd3ce8f448c877eb8cb7806c50f";
// // const redirectUri = "http://localhost:3000/";

// // let accessToken;

// // const Spotify = {
// //     getAccessToken() {
// //         if (accessToken) {
// //             return accessToken;
// //         }

// //         //check for access token match 
// //         const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
// //         const expiresInMatch = window.localStorage.href.match(/expires_in=([^&]*)/)

// //         if (accessTokenMatch && expiresInMatch) {
// //             accessToken = accessTokenMatch[1];
// //             const expiresIn = Number(expiresInMatch[1]);
// //             // This clears the parameters, allowing us to grap a new access token when it expires.
// //             window.setTimeout(() => accessToken = '', expiresIn * 1000);
// //             window.history.pushState('Access Token', null, '/');
// //             return accessToken;
// //         } else {
// //             const accessUrl = `https://accounts.spotify.com/authorize?client_id=${cliendId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
// //             Window.location = accessUrl;
// //         }
// //     },

// //     search(term) {
// //         const accessToken = Spotify.getAccessToken();
// //         return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
// //             {
// //                 headers: {
// //                     Authorization: `Bearer ${accessToken}`
// //                 }
// //             }).then(response => {
// //                 return response.json();
// //             }).then(jsonResponse => {
// //                 if(!jsonResponse.tracks) {
// //                     return [];
// //                 }
// //                 return jsonResponse.tracks.items.map(track => ({
// //                     id: track.id,
// //                     name: track.name,
// //                     artist: track.artist[0].name,
// //                     album: track.album.name,
// //                     uri: track.uri
// //                 }));
// //             });
// //     },

// //     savePlaylist(name, trackUris) {
// //         if (!name || !trackUris.length) {
// //             return;
// //         }

// //         const accessToken = Spotify.getAccessToken();
// //         const headers = {Authorization: `Bearer ${accessToken}`}
// //         let userId;

// //         return fetch('https://api.spotify.com/v1/me',{headers: headers}
// //         ).then(response => response.json()
// //         ).then(jsonResponse => {
// //             userId = jsonResponse.id;
// //             return fetch(`https://api.spotify.com/v1/users/{userId}/playlists`,
// //             {
// //                 headers: headers,
// //                 method: 'Post',
// //                 body: JSON.stringify({name: name})
// //             }).then(response => response.json()
// //             ).then(jsonResponse => {
// //                 const playlistId = jsonResponse.id;
// //                 return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
// //                   headers: headers,
// //                   method: 'POST',
// //                   body: JSON.stringify({uris: trackUris})  
// //                 })
// //             })
// //         })
// //     }
// // }

// // export default Spotify;
// // TODO: Get Client ID from https://developer.spotify.com/dashboard/ and put it here

// // const clientId = "ef3cdfd3ce8f448c877eb8cb7806c50f";
// // const redirectUri = "http://localhost:3000/";
// // const spotifyUrl = `https://accounts.spotify.com/authorize?response_type=token&scope=playlist-modify-public&client_id=${clientId}&redirect_uri=${redirectUri}`;
// // let accessToken = undefined;
// // let expiresIn = undefined;

// // const Spotify = {
// //   getAccessToken() {
// //     if (accessToken) {
// //       return accessToken;
// //     }
// //     const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
// //     const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
// //     if (urlAccessToken && urlExpiresIn) {
// //       accessToken = urlAccessToken[1];
// //       expiresIn = urlExpiresIn[1];
// //       window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
// //       window.history.pushState("Access Token", null, "/");
// //     } else {
// //       window.location = spotifyUrl;
// //     }
// //   },

// //   async search(term) {
// //     const replaceEmptySpace = term.replace(" ", "%20");
// //     const searchUrl = `https://api.spotify.com/v1/search?type=track&q=${replaceEmptySpace}`;
// //     return fetch(searchUrl, {
// //       headers: {
// //         Authorization: `Bearer ${accessToken}`,
// //       },
// //     })
// //       .then((response) => response.json())
// //       .then((jsonResponse) => {
// //         if (!jsonResponse.tracks) return [];
// //         return jsonResponse.tracks.items.map((track) => {
// //           return {
// //             id: track.id,
// //             name: track.name,
// //             artist: track.artists[0].name,
// //             album: track.album.name,
// //             uri: track.uri,
// //           };
// //         });
// //       });
// //   },

// //   async savePlaylist(name, trackIds) {
// //     if (Array.isArray(trackIds) && trackIds.length) {
// //       const createPlaylistUrl = `https://api.spotify.com/v1/me/playlists`;
// //       const response = await fetch(createPlaylistUrl, {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${accessToken}`,
// //         },
// //         body: JSON.stringify({
// //           name: name,
// //           public: true,
// //         }),
// //       });
// //       const jsonResponse = await response.json();
// //       const playlistId = jsonResponse.id;
// //       if (playlistId) {
// //         const replacePlaylistTracksUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
// //         await fetch(replacePlaylistTracksUrl, {
// //           method: "PUT",
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${accessToken}`,
// //           },
// //           body: JSON.stringify({
// //             uris: trackIds.map((id) => "spotify:track:".concat(id)),
// //           }),
// //         });
// //       }
// //     }
// //   },
// // };

// // export default Spotify;

// // const clientId = "ef3cdfd3ce8f448c877eb8cb7806c50f";
// // let accessToken = "";
// // const redirectURI = "http://localhost:3000/";

// // export const Spotify = {
// //   getAccessToken() {
// //     if (accessToken) {
// //       return;
// //     }

// //     const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
// //     const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
// //     if (accessTokenMatch && expiresInMatch) {
// //       accessToken = accessTokenMatch[1];
// //       const expiresIn = Number(expiresInMatch[1]);
// //       window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
// //       window.history.pushState("Access Token", null, "/"); // This clears the parameters, allowing us to grab a new access token when it expires.

// //       return accessToken;
// //     } else {
// //       const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
// //       window.location = accessUrl;
// //     }
// //   },

// //   search(searchTerm) {
// //     let spotifyTracks = fetch(
// //       `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`,
// //       {
// //         headers: { Authorization: `Bearer ${accessToken}` },
// //       }
// //     )
// //       .then((response) => response.json())
// //       .then((jsonResponse) => {
// //         if (!jsonResponse) {
// //           return [{}];
// //         }

// //         let tracks = jsonResponse.tracks.items.map((track) => ({
// //           id: track.id,
// //           name: track.name,
// //           artist: track.artists[0].name,
// //           album: track.album.name,
// //           uri: track.uri,
// //         }));

// //         return tracks;
// //       })
// //       .catch((error) => {
// //         console.log("Spotify search error");
// //       });

// //     return spotifyTracks;
// //   },

// //   async savePlaylist(playlistName, tracksUri) {
// //     if (!(playlistName && tracksUri)) return;

// //     // Get spotify user Id
// //     let userId = await fetch("https://api.spotify.com/v1/me", {
// //       headers: {
// //         Authorization: `Bearer ${accessToken}`,
// //       },
// //     })
// //       .then((response) => response.json())
// //       .then((jsonResponse) => jsonResponse.id)
// //       .catch((error) => {
// //         console.log("User id Fetch error");
// //       });

// //     // Create playlist
// //     let playlistId = await fetch(
// //       `https://api.spotify.com/v1/users/${userId}/playlists`,
// //       {
// //         method: "POST",
// //         headers: {
// //           Authorization: `Bearer ${accessToken}`,
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           name: playlistName,
// //         }),
// //         json: true,
// //       }
// //     )
// //       .then((response) => response.json())
// //       .then((jsonResponse) => jsonResponse.id)
// //       .catch((error) => {
// //         console.log("Create Playlist error");
// //       });

// //     await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
// //       method: "POST",
// //       headers: {
// //         Authorization: `Bearer ${accessToken}`,
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({
// //         uris: tracksUri,
// //       }),
// //     })
// //       .then((response) => {
// //         console.log("Songs added to playlist");
// //       })
// //       .catch((error) => {
// //         console.log("Fetch error while adding songs to the playlist");
// //       });
// //   },
// // };
// // export default Spotify;
// const cliendId = "ef3cdfd3ce8f448c877eb8cb7806c50f";
// const redirectUri = "http://localhost:3000/";

// let accessToken;

// const Spotify = {
//     getAccessToken() {
//         if (accessToken) {
//             return accessToken;
//         }

//         //check for access token match 
//         const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
//         const expiresInMatch = window.localStorage.href.match(/expires_in=([^&]*)/)

//         if (accessTokenMatch && expiresInMatch) {
//             accessToken = accessTokenMatch[1];
//             const expiresIn = Number(expiresInMatch[1]);
//             // This clears the parameters, allowing us to grap a new access token when it expires.
//             window.setTimeout(() => accessToken = '', expiresIn * 1000);
//             window.history.pushState('Access Token', null, '/');
//             return accessToken;
//         } else {
//             const accessUrl = `https://accounts.spotify.com/authorize?client_id=${cliendId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
//             Window.location = accessUrl;
//         }
//     },

//     search(term) {
//         const accessToken = Spotify.getAccessToken();
//         return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
//             {
//                 headers: {
//                     Authorization: `Bearer ${accessToken}`
//                 }
//             }).then(response => {
//                 return response.json();
//             }).then(jsonResponse => {
//                 if(!jsonResponse.tracks) {
//                     return [];
//                 }
//                 return jsonResponse.tracks.items.map(track => ({
//                     id: track.id,
//                     name: track.name,
//                     artist: track.artist[0].name,
//                     album: track.album.name,
//                     uri: track.uri
//                 }));
//             });
//     },

//     savePlaylist(name, trackUris) {
//         if (!name || !trackUris.length) {
//             return;
//         }

//         const accessToken = Spotify.getAccessToken();
//         const headers = {Auhorization: `Bearer ${accessToken}`}
//         let userId;

//         return fetch('https://api.spotify.com/v1/me',{headers: headers}
//         ).then(response => response.json()
//         ).then(jsonResponse => {
//             userId = jsonResponse.id;
//             return fetch(`https://api.spotify.com/v1/users/{userId}/playlists`,
//             {
//                 headers: headers,
//                 method: 'Post',
//                 body: JSON.stringify({name: name})
//             }).then(response => response.json()
//             ).then(jsonResponse => {
//                 const playlistId = jsonResponse.id;
//                 return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
//                   headers: headers,
//                   method: 'POST',
//                   body: JSON.stringify({uris: trackUris})  
//                 })
//             })
//         })
//     }
// }

// export default Spotify;

// TODO: Get Client ID from https://developer.spotify.com/dashboard/ and put it here
const clientId = "ef3cdfd3ce8f448c877eb8cb7806c50f";

// const redirectUri = "http://localhost:3000/";
const redirectUri = "http://jammingNeen.surge.sh/";
const spotifyUrl = `https://accounts.spotify.com/authorize?response_type=token&scope=playlist-modify-public&client_id=${clientId}&redirect_uri=${redirectUri}`;
let accessToken = undefined;
let expiresIn = undefined;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
    const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
    if (urlAccessToken && urlExpiresIn) {
      accessToken = urlAccessToken[1];
      expiresIn = urlExpiresIn[1];
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
    } else {
      window.location = spotifyUrl;
    }
  },

  async search(term) {
    const accessToken = Spotify.getAccessToken();
    const replaceEmptySpace = term.replace(" ", "%20");
    const searchUrl = `https://api.spotify.com/v1/search?type=track&q=${replaceEmptySpace}`;
    return fetch(searchUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (!jsonResponse.tracks) return [];
        return jsonResponse.tracks.items.map((track) => {
          return {
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri,
          };
        });
      });
  },

  async savePlaylist(name, trackIds) {
    if (Array.isArray(trackIds) && trackIds.length) {
      const createPlaylistUrl = `https://api.spotify.com/v1/me/playlists`;
      const response = await fetch(createPlaylistUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          name: name,
          public: true,
        }),
      });
      const jsonResponse = await response.json();
      const playlistId = jsonResponse.id;
      if (playlistId) {
        const replacePlaylistTracksUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
        await fetch(replacePlaylistTracksUrl, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            uris: trackIds.map((id) => "spotify:track:".concat(id)),
          }),
        });
      }
    }
  },
};

export default Spotify;