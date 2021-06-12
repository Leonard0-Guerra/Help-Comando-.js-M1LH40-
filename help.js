const Discord = require("discord.js");

module.exports = {
    name: "Segunda Casa RP",
    description: "clique na reação, e a msg será editada :)",
    author: "M1LH40",

run: async(client, message, args) => { //embed do painel inicial
    let embed = new Discord.MessageEmbed()
    .setTitle(`Comandos De JavaScript grátis`)
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription(`Comandos grátis

\n🤖 Comandos
⠀`)
    .setFooter(`${message.author.tag}`)
    .setColor("RED")    
    message.channel.send(`${message.author}`, embed).then(msg => {
      msg.react("◀️")
      msg.react("🤖")

      let filtro0 = (r, u) => r.emoji.name === '◀️' && u.id === message.author.id;
      let filtro1 = (r, u) => r.emoji.name === '🤖' && u.id === message.author.id;

      let coletor0 = msg.createReactionCollector(filtro0);
      let coletor = msg.createReactionCollector(filtro1);

      coletor0.on("collect", c => { //embed do painel inicial (editada)

        let m1lh40 = new Discord.MessageEmbed()
      .setTitle(`Painel de comandos`)
      .setThumbnail(message.author.displayAvatarURL())
      .setDescription(`Comandos free:

     \n🤖 Comandos 
⠀`)
      .setFooter(`Sistema de ajuda por: M1LH40`)
      .setColor("RED")   
        
     
        msg.edit(`${message.author}`, m1lh40)
      })


      coletor.on("collect", c => { //embed do painel de utilidade (editada)

        let m1lh40 = new Discord.MessageEmbed()
        .setTitle(`🤖 Comandos 🤖`) //Título do Embed
        .setThumbnail(message.author.displayAvatarURL()) //Thumbnial do Embed (Aconselho deixar como está)
        .setFooter(`Sistema de Ajuda por: M1LH40`) //Footer (linha mais embaixo de todas)
        .setDescription(`Escreva aqui o que quiser`) //Descrição (COLOQUE OS COMANDOS AQUI)
        .setColor("RED") //Cor, coloque o nome em Inglês da cor que quiser
        

        msg.edit(`${message.author}`, m1lh40)
      })

     
      })
      }
    }
