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
rl.question(`Please enter a search term or link and file format saperated by "|" - do not use "|" in the search term!`, async function (string) {
    console.log(string);
    const search = string.split('|');
    const searchTerm = search[0];
    const fileFormat = search[1];
    if (fileFormat === undefined) {
        console.log(chalk_1.default.red(`You did not enter a file format!`));
        return;
    }
    if (searchTerm === undefined) {
        console.log(chalk_1.default.red(`You did not enter a search term!`));
        return;
    }
    console.log(searchTerm);
    let veryfy = await ytdl_core_1.default.validateURL(searchTerm);
    if (veryfy) {
        let songData = await ytdl_core_1.default.getInfo(searchTerm);
        let song = {
            title: songData.videoDetails.title,
            url: songData.videoDetails.video_url,
        };
        console.log(chalk_1.default.green(`The song is: ${song.title}`));
        console.log(chalk_1.default.green(`The url is: ${song.url}`));
        (0, ytdl_core_1.default)(searchTerm).pipe(fs_1.default.createWriteStream(`./ytdl/downloads/${song.title}.${fileFormat}`));
    }
    else {
        let result = await (0, yt_search_1.default)(searchTerm);
        console.log(chalk_1.default.green(`The song is: ${result.videos[0].title}`));
        console.log(chalk_1.default.green(`The url is: ${result.videos[0].url}`));
        (0, ytdl_core_1.default)(result.videos[0].url).pipe(fs_1.default.createWriteStream(`./ytdl/downloads/${result.videos[0].title}.${fileFormat}`));
    }
    rl.close();
});
