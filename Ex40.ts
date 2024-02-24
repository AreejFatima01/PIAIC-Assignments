//Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object.
// Make at least one new function call that includes the number of tracks on an album.
function makeAlbum(
  artistName: string,
  albumTitle: string,
  tracks?: number
): object {
  // Create an empty album object
  const album: object = {};

  // Add artist and title properties
  album["artist"] = artistName;
  album["title"] = albumTitle;

  // Add tracks property if provided
  if (tracks) {
    album["tracks"] = tracks;
  }

  // Return the album object
  return album;
}

// Create three albums
const album1 = makeAlbum("The Beatles", "Abbey Road", 17);
const album2 = makeAlbum("Pink Floyd", "The Dark Side of the Moon");
const album3 = makeAlbum("Nirvana", "Nevermind");

// Print each album's information
console.log(album1); // Output: { artist: 'The Beatles', title: 'Abbey Road', tracks: 17 }
console.log(album2); // Output: { artist: 'Pink Floyd', title: 'The Dark Side of the Moon' }
console.log(album3); // Output: { artist: 'Nirvana', title: 'Nevermind' }
