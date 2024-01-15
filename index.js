require('dotenv').config({path: '../.env'});
const { Client, GatewayIntentBits, EmbedBuilder, SlashCommandBuilder, PermissionsBitField, Permissions } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });



client.on ("ready", (x) => {
console.log(`${x.user.tag} is ready!`);
    client.user.setActivity(`Waiting for commands`);
});


client.on ("interactionCreate", async (interaction) => {
    if(interaction.isCommand()) {
        if(interaction.commandName === "lfg") {
            const username = interaction.user.username;
            const discriminator = interaction.user.discriminator;
            const userTag = `${username}#${discriminator}`;
            console.log(`User ${userTag} used the LFG command.`);
            const gameReceived = interaction.options.getString("game");
            const nopReceived = interaction.options.getInteger("players")
            const groupFinder = 'group-finder';
            const targetChannel = interaction.guild.channels.cache.find((channel) => channel.name === groupFinder);
            interaction.reply({content: `You said, you want to find a group of ${nopReceived} for ${gameReceived}. Your message will be posted in the Group Finder channel.`, ephemeral: true})
            if (targetChannel){
            targetChannel.send(`User ${username} is looking for a group of ${nopReceived} for ${gameReceived}. Tag them in chat to play!`);
            }else{
                console.log(`Channel '${targetChannel}' not found.` );
            }
        }
    }
})



client.login(process.env.TOKEN);

