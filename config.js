const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_45_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDcyLFxuICAgICAgICAzLFxuICAgICAgICA4OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDcwLFxuICAgICAgICA3MixcbiAgICAgICAgNjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDczLFxuICAgICAgICA4OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5LFxuICAgICAgICA3MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODEsXG4gICAgICAgIDk2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgODgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMyLFxuICAgICAgICA4NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDY3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3LFxuICAgICAgICAxMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM5LFxuICAgICAgICA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDg1LFxuICAgICAgICA3MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDExLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6aElIYjZHRUJ4aWpYa3BwU3ZZVXNGZjhEUVY1R3VzMTdST3JReVZXejJjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzkwODQyOTk0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUYyOThEQzI1NDEyMUUwRDI2QUYwNTMxMERDMTRBQjVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjMxNDk0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJSeFpDLTJVUWJ5MVpKRUxEQlc1Z3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWNlMWNhMjUtNjI0OS00NjQ5LWI2YTEtYjA5Y2NiYWQ3ZWJjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NixcbiAgICAgIDE4NyxcbiAgICAgIDEyNCxcbiAgICAgIDIzNSxcbiAgICAgIDE1NixcbiAgICAgIDE3OCxcbiAgICAgIDEwNCxcbiAgICAgIDI1NSxcbiAgICAgIDY2LFxuICAgICAgMTYzLFxuICAgICAgODUsXG4gICAgICAxMTksXG4gICAgICAyMjcsXG4gICAgICAxNTAsXG4gICAgICAxNDcsXG4gICAgICAxNTIsXG4gICAgICAyMjUsXG4gICAgICAxNzAsXG4gICAgICAxNTUsXG4gICAgICAyMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE0LFxuICAgICAgMzUsXG4gICAgICAxNjYsXG4gICAgICA3OCxcbiAgICAgIDE3NixcbiAgICAgIDkzLFxuICAgICAgMTQyLFxuICAgICAgMjUzLFxuICAgICAgNDAsXG4gICAgICAyMjIsXG4gICAgICAxOTMsXG4gICAgICAxMixcbiAgICAgIDEwNSxcbiAgICAgIDY5LFxuICAgICAgMjIwLFxuICAgICAgMjI3LFxuICAgICAgNjksXG4gICAgICAxOSxcbiAgICAgIDMzLFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1GSlBSUjlGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc5MDg0Mjk5NDU6NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBbmthbjw8PEN1dGVcIixcbiAgICBcImxpZFwiOiBcIjEyODg3OTQ1Mjc5OTE2ODo3M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJUHl3ZzhRdklxMXRRWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIklISXdOdytNeHNNQWNXMGExMUZUWHdhZTZMczJHaU92cU9RTDNwZ0V6d2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidkk5R0h4VGhiNUJsQTIxYmVPcnBjeGRwd0dra2EvSWt6UlF2ZCsyUEdIUGsvL2ZUT21GcWU4RXFYZVBxWDBkWDVreHo3L0dsS28vbXkzNjdRT2pYQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ2FEYVJXMTFqaGNSdXczYlhnN2hURHBqaXg4T2VpUjJncWVCazhINE00SVNaVnI3KzdISlRxVGJ1VlExR09XZTNWWHNPNUdQV2VKQXFEVjhtZ01Lamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE3OTA4NDI5OTQ1OjczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjYzMTQ4OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9WZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1ZmLmpzb24iOiAie1wia2V5RGF0YVwiOlwibVRKK1NXZ0d0QkZrcUZnU0UzVHAwVm1ldUJHSDR3Q0RXMkd1ZXpSRjZscz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMjU1MzIxOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMzUwMTQ3NzY0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
