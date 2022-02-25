const Movie = require("./model");

exports.addMovie = async (titleStr, actorStr) => {
    try {
        await Movie.create({title: titleStr, actor: actorStr});
        return "Sucess";
    } catch (error) {
        console.log(error)
    }
}

exports.list = async () => {
    try {
        return await Movie.find({});
    } catch (error) {
        console.log(error)
    }
}

exports.update = async (current, updated, parameter) => {
    try {
        if (parameter === "title") {
            return await Movie.updateOne({title: current}, {title: updated});
        } else if (parameter === "actor") {
            return await Movie.updateOne({actor: current}, {actor: updated});
        };
    } catch (error){
        console.log(error)
        };
    };

exports.removeMovie = async (title) => {
    try {
        await Movie.remove({title});
        console.log("successfully removed movie")
    } catch (error) {
        console.log(error)
    }
}