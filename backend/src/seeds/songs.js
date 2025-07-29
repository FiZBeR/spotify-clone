import mongoose from "mongoose";
import { Song } from "../models/song.model.js";
import { config } from "dotenv";

config();

const songs = [
	{
		title: "Stay With Me",
		artist: "Sarah Mitchell",
		imagenUrl: "/cover-images/1.jpg",
		audioUrl: "/songs/1.mp3",
		duraction: 46, // 0:46
	},
	{
		title: "Midnight Drive",
		artist: "The Wanderers",
		imagenUrl: "/cover-images/2.jpg",
		audioUrl: "/songs/2.mp3",
		duraction: 41, // 0:41
	},
	{
		title: "Lost in Tokyo",
		artist: "Electric Dreams",
		imagenUrl: "/cover-images/3.jpg",
		audioUrl: "/songs/3.mp3",
		duraction: 24, // 0:24
	},
	{
		title: "Summer Daze",
		artist: "Coastal Kids",
		imagenUrl: "/cover-images/4.jpg",
		audioUrl: "/songs/4.mp3",
		duraction: 24, // 0:24
	},
	{
		title: "Neon Lights",
		artist: "Night Runners",
		imagenUrl: "/cover-images/5.jpg",
		audioUrl: "/songs/5.mp3",
		duraction: 36, // 0:36
	},
	{
		title: "Mountain High",
		artist: "The Wild Ones",
		imagenUrl: "/cover-images/6.jpg",
		audioUrl: "/songs/6.mp3",
		duraction: 40, // 0:40
	},
	{
		title: "City Rain",
		artist: "Urban Echo",
		imagenUrl: "/cover-images/7.jpg",
		audioUrl: "/songs/7.mp3",
		duraction: 39, // 0:39
	},
	{
		title: "Desert Wind",
		artist: "Sahara Sons",
		imagenUrl: "/cover-images/8.jpg",
		audioUrl: "/songs/8.mp3",
		duraction: 28, // 0:28
	},
	{
		title: "Ocean Waves",
		artist: "Coastal Drift",
		imagenUrl: "/cover-images/9.jpg",
		audioUrl: "/songs/9.mp3",
		duraction: 28, // 0:28
	},
	{
		title: "Starlight",
		artist: "Luna Bay",
		imagenUrl: "/cover-images/10.jpg",
		audioUrl: "/songs/10.mp3",
		duraction: 30, // 0:30
	},
	{
		title: "Winter Dreams",
		artist: "Arctic Pulse",
		imagenUrl: "/cover-images/11.jpg",
		audioUrl: "/songs/11.mp3",
		duraction: 29, // 0:29
	},
	{
		title: "Purple Sunset",
		artist: "Dream Valley",
		imagenUrl: "/cover-images/12.jpg",
		audioUrl: "/songs/12.mp3",
		duraction: 17, // 0:17
	},
	{
		title: "Neon Dreams",
		artist: "Cyber Pulse",
		imagenUrl: "/cover-images/13.jpg",
		audioUrl: "/songs/13.mp3",
		duraction: 39, // 0:39
	},
	{
		title: "Moonlight Dance",
		artist: "Silver Shadows",
		imagenUrl: "/cover-images/14.jpg",
		audioUrl: "/songs/14.mp3",
		duraction: 27, // 0:27
	},
	{
		title: "Urban Jungle",
		artist: "City Lights",
		imagenUrl: "/cover-images/15.jpg",
		audioUrl: "/songs/15.mp3",
		duraction: 36, // 0:36
	},
	{
		title: "Crystal Rain",
		artist: "Echo Valley",
		imagenUrl: "/cover-images/16.jpg",
		audioUrl: "/songs/16.mp3",
		duraction: 39, // 0:39
	},
	{
		title: "Neon Tokyo",
		artist: "Future Pulse",
		imagenUrl: "/cover-images/17.jpg",
		audioUrl: "/songs/17.mp3",
		duraction: 39, // 0:39
	},
	{
		title: "Midnight Blues",
		artist: "Jazz Cats",
		imagenUrl: "/cover-images/18.jpg",
		audioUrl: "/songs/18.mp3",
		duraction: 29, // 0:29
	},
];

const seedSongs = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);

		// Clear existing songs
		await Song.deleteMany({});

		// Insert new songs
		await Song.insertMany(songs);

		console.log("Songs seeded successfully!");
	} catch (error) {
		console.error("Error seeding songs:", error);
	} finally {
		mongoose.connection.close();
	}
};

seedSongs();