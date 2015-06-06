module.exports = function (req, res, next) {
  var triggerWord = req.body.trigger_word,
      userName = req.body.user_name,
      teamId = req.body.team_id,
      teamDomain = req.body.team_domain,
      channelId= req.body.channel_id,
      channelName = req.body.channel;
  var botPayload = {
    trigger_word: triggerWord,
    channel: channelName 
  };
 

 if(triggerWord == 'jeremy' ||triggerWord == 'Jeremy'){ 
    botPayload.text = "All Hail Don Baba J, #TIA"
  }else if (triggerWord == 'Christina' ||triggerWord == 'christina' || triggerWord == 'Mama Sass'){
    botPayload.text = "All Hail Mama Sass, Aw Yeah!!!, #TIA"
  }else if (triggerWord == '#TIA' || triggerWord == 'TIA'|| triggerWord == 'tia'||triggerWord == '#tia' || triggerWord == 'Andela' || triggerWord == 'andela'  ){
    botPayload.text = "Andela makes you code, Angular, Javascript, Express and Node,Andela makes you code, no telling we're the best.Oh yes we're dope. We are, we are awesome"
  }else if (triggerWord == 'Ian' || triggerWord == 'ian'){
    botPayload.text = "All Hail The man with the strongest leg, #TIA"
  }else if (triggerWord == 'Iyinoluwa' || triggerWord == 'Iyin' || triggerWord == 'iyin'){
    botPayload.text = "All Hail Big, Richest Boy E, #TIA"
  }else if (triggerWord == 'Nad' || triggerWord == 'nad' || triggerWord == 'Nadayar'|| triggerWord == 'nadayar' ){
    botPayload.text = "All Hail Super Nad, #TIA"
  }else if (triggerWord == 'Obie' || triggerWord == 'obie'){
    botPayload.text = "All Hail the Baddest DJ in Andela, #TIA"
  }else {
    botPayload.text = "You have to appease the BOT, dude"
  }

  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}

// curl -X POST --data "user_name=foobar&&channel_id=T02R3LKBA&text=Andela makes you code, Angular, Javascript, Express and Node" http://localhost:3000/chant`

// curl -X POST --data "team_domain," http://localhost:3000/hello

// curl -X POST --data-urlencode 'payload={"channel": "#testingchantbot",
// "username": "chantbot", "icon_emoji": ":ghost:"}'http://localhost:3000/chant
