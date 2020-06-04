exports.run = (client, message , args) => {
  if (!message.member.hasPermission('KICK_MEMBERS')) return;
  var members = message.guild.members.array();
  var lastArray = [];
  var lastArray2 = [];
  var lastArray3 = [];
  var index = 0;
  var index2 = 0;
  var index3 = 0;
  for (var location in members) {
  var control = members[location].roles.get('699984672758956112');
    var control2 = members[location].roles.get('699984672758956112');
    var control3 = members[location].roles.get('495695743663996928');
    if (control !== undefined && members[location].voiceChannelID !== '487305174650716162'){
      index++;
      lastArray.push(`-${index}#`+members[location].user.tag);
    }
    if (control2 !== undefined && members[location].voiceChannelID == '487305174650716162'){
      index2++;
      lastArray2.push(`${index2}#.`+members[location].user.tag);
    }
        if (control3 !== undefined && members[location].voiceChannelID == '487305174650716162'){
      index3++;
      lastArray3.push(`${index3}#.`+members[location].user.tag);
    }
  }
  message.channel.send('```css\nToplantıya Katılanlar\n'+lastArray2.join('\n')+'```')
  message.channel.send('```diff\nToplantıya Katılmayanlar\n'+lastArray.join('\n')+'```')
 
  
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'yoklama',
    description: 'yoklama',
    usage: 'yoklama'
}
