import ytdl from "ytdl-core";
import ytsearch from "yt-search";
import readline from "readline";
import chalk from "chalk";
import fs from "fs";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Please enter a search term or link and file format saperated by "|" - do not use "|" in the search term!`, async function (string) {
    console.log(string);
    const search = string.split('|');
    const searchTerm = search[0];
    const fileFormat = search[1];
    if (fileFormat === undefined) {
        console.log(chalk.red(`You did not enter a file format!`));
        return;
    }
    if (searchTerm === undefined) {
        console.log(chalk.red(`You did not enter a search term!`));
        return;
    }
    console.log(searchTerm);
    let veryfy = await ytdl.validateURL(searchTerm);
    if (veryfy) {

	let songData = await ytdl.getInfo(searchTerm);
	let song = {
		title: songData.videoDetails.title,
		url: songData.videoDetails.video_url,
	}
    console.log(chalk.green(`The song is: ${song.title}`));
    console.log(chalk.green(`The url is: ${song.url}`));
    ytdl(searchTerm).pipe(fs.createWriteStream(`./ytdl/downloads/${song.title}.${fileFormat}`));
    } else {
        let result = await ytsearch(searchTerm);
        console.log(chalk.green(`The song is: ${result.videos[0].title}`));
        console.log(chalk.green(`The url is: ${result.videos[0].url}`));
        ytdl(result.videos[0].url).pipe(fs.createWriteStream(`./ytdl/downloads/${result.videos[0].title}.${fileFormat}`));
    }


    rl.close()
})
