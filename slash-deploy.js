require('dotenv').config({path: '../.env'});
const { REST, Routes, SlashCommandBuilder } = require("discord.js");

//Info needed for slash commands
const botId = "1195077330939416648"
const serverId = "872734285398937620";
const botToken = process.env.TOKEN;

const rest = new REST().setToken(botToken);


const slashRegister = async () => {
    try {
        await rest.put(Routes.applicationGuildCommands(botId,serverId), {
            body: [
                new SlashCommandBuilder()
                .setName("lfg")
                .setDescription("Use this command to find people to play with.")
                .addStringOption( option => {
                    return option
                    .setName("game")
                    .setDescription("Write the name of your game here.")
                    .setRequired(true)
                })
                .addIntegerOption(option => {
                    return option
                    .setName("players")
                    .setDescription("How many players do you want to find?")
                    .setRequired(true);
                })
            ]
        })
    } catch (error) {
        console.error(error);
    }
}

slashRegister();

