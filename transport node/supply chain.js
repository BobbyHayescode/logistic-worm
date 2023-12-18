const createDiscordMessage = (error) => {
  var embeds = []
  let message = {
    "text": "GCP Alerts",
    "blocks": [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "ERR:"  + error
        }

      }
    ]

    message.embeds = embeds;
console.log(message)
return message;
}

const bh=Hl`
<style>
:host {
  display: block;
  position: relative;
  contain: strict;
  width: 300px;
  height: 150px;
}
