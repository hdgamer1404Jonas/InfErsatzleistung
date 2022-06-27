"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ytdl_core_1 = __importDefault(require("ytdl-core"));
const yt_search_1 = __importDefault(require("yt-search"));
const readline_1 = __importDefault(require("readline"));
const chalk_1 = __importDefault(require("chalk"));
const fs_1 = __importDefault(require("fs"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question(`Please enter a search term or link`, async function (searchTerm) {
    console.log(searchTerm);
    if (searchTerm.includes("youtube.com")) {
        let veryfy = await ytdl_core_1.default.validateURL(searchTerm);
        if (!veryfy) {
            console.log(chalk_1.default.red(`The link is not valid`));
            return;
        }
        let songData = await ytdl_core_1.default.getInfo(searchTerm);
        let song = {
            title: songData.videoDetails.title,
            url: songData.videoDetails.video_url,
        };
        console.log(chalk_1.default.green(`The song is: ${song.title}`));
        console.log(chalk_1.default.green(`The url is: ${song.url}`));
        (0, ytdl_core_1.default)(searchTerm).pipe(fs_1.default.createWriteStream(`../../src/ytdl/downloads/${song.title}.mp3`));
    }
    else {
        let result = await (0, yt_search_1.default)(searchTerm);
        console.log(chalk_1.default.green(`The song is: ${result.videos[0].title}`));
        console.log(chalk_1.default.green(`The url is: ${result.videos[0].url}`));
        (0, ytdl_core_1.default)(result.videos[0].url).pipe(fs_1.default.createWriteStream(`${result.videos[0].title}.mp3`));
    }
    rl.close();
});
