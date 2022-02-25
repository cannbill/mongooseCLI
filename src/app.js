require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { addMovie, list, update, removeMovie } = require("./movie/functions");

const app = async (yargsObj) => {
    try {
        if (yargsObj.add) {
            console.log(await addMovie(yargsObj.title, yargsObj.actor));
            //add functionality
        } else if (yargsObj.list) {
            console.log(await list())
            //list functionality 
        } else if (yargsObj.update) { // this yargsObj.update update is different to the one exported from functions.js
            console.log(await update(yargsObj.current, yargsObj.updated, yargsObj.parameter));
        } else if (yargsObj.remove) {
            console.log(await removeMovie(yargsObj.title))
        } else {
            console.log("Incorrect command")
        }
        await mongoose.disconnect();
    } catch (error) {
        console.log(error)
    };
}

app(yargs.argv);