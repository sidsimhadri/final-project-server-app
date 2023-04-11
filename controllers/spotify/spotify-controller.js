import SpotifyWebApi
    from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: "a51802c21c16456bb8381012bc3f1102",
  clientSecret: "cb69b38d83534ab19497927ac4d63389"
});

const SpotifyController = (app) => {
    app.get('/api/spotify/album/:albumId', findAlbum);
    app.get('/api/spotify/albums/:artistId', findArtistAlbums);
    app.get('/api/spotify/newreleases', findNewReleases);
    app.get('/api/spotify/searchAlbums', searchAlbums);
    app.get('/api/spotify/searchArtists', searchArtists);
    app.get('/api/spotify/playlist/:playlistId', findPlaylist);
}
spotifyApi.clientCredentialsGrant()
  .then(data => {
    console.log('Access token:', data.body.access_token);
    spotifyApi.setAccessToken(data.body.access_token);
  })
  .catch(error => {
    console.error(error);
  });



const findAlbum =  async (req, res) => {
    const albumId = req.params['albumId'];
    try {
        const results = await spotifyApi.getAlbum(albumId)
        res.json(results)
    }
    catch (err) {
        console.error(err);
        res.status(500).json({error: 'Something went wrong'})
    }
}

const findArtistAlbums = async (req, res) => {
    const artistId = req.params['artistId'];
    try {
        const results = await spotifyApi.getArtistAlbums(artistId);
        res.json(results)
    }
    catch (err) {
        console.error(err);
        res.status(500).json({error: 'Something went wrong'})
    }
}

const findNewReleases = async (req, res) => {
    try {
        const results = await spotifyApi.getNewReleases({ limit : 10, offset: 0});
        res.json(results)
    }
    catch (err) {
        console.error(err);
        res.status(500).json({error: 'Something went wrong'})
    }
}

const searchAlbums = async (req, res) => {
    try {
        const query = req.query
        const results = await spotifyApi.searchAlbums(query)
        res.json(results)
    }
    catch (err) {
        console.error(err);
        res.status(500).json({error: 'Something went wrong'})
    }
}
const searchArtists = async (req, res) => {
    try {
        const query = req.query
        const results = await spotifyApi.searchArtists(query)
        res.json(results)
    }
    catch (err) {
        console.error(err);
        res.status(500).json({error: 'Something went wrong'})
    }
}

const findPlaylist = async (req, res) => {
    const playlistId = req.params['playlistId'];
    try {
        const results = await spotifyApi.getPlaylist(playlistId)
        res.json(results)
    }
    catch (err) {
        console.error(err);
        res.status(500).json({error: 'Something went wrong'})
    }
}

export default SpotifyController;