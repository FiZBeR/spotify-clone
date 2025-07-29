export interface Song {
    _id: string;
    title: string;
    artist: string;
    albumId: string | null;
    imagenUrl: string;
    audioUrl: string;
    duraction: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Album {
    _id: string;
    title: string;
    artist: string;
    imagenUrl: string;
    releaseYear: number;
    songs: Song[];
}