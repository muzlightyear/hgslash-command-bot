require('dotenv').config({path: '../.env'});
const { REST, Routes, SlashCommandBuilder } = require("discord.js");

//Info needed for slash commands
const botId = "1195077330939416648"
const serverId = "872734285398937620";
//const serverId = '949625437045276743';
const botToken = process.env.TOKEN;

const rest = new REST().setToken(botToken);


const slashRegister = async () => {
    try {
        await rest.put(Routes.applicationGuildCommands(botId, serverId), {
            body: [
                new SlashCommandBuilder()
                    .setName("lfg")
                    .setDescription("Use this command to find people to play with.")
                    .addStringOption(option => option
                        .setName("game")
                        .setDescription("Write the name of your game here.")
                        .setRequired(true)
                    )
                    .addIntegerOption(option => option
                        .setName("players")
                        .setDescription("How many players do you want to find?")
                        .setRequired(true)
                    ),

                new SlashCommandBuilder()
                    .setName("eventreg")
                    .setDescription("Register your group for the event.")
                    .addStringOption(option => option
                        .setName("event")
                        .setDescription("Write the name of the event here.")
                        .setRequired(true)
                    )
                    .addStringOption(option => option
                        .setName("eventgroup")
                        .setDescription("Write the username of each team member separate by commas.")
                        .setRequired(true)
                    )
                    .addStringOption(option => option
                        .setName("teamname")
                        .setDescription("Choose a team name.")
                        .setRequired(true) 
                    )
            ]
        });
    } catch (error) {
        console.error(error);
    }
};

slashRegister();

