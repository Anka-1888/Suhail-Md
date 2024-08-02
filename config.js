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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_30_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE5LFxuICAgICAgICA4MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjksXG4gICAgICAgIDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjksXG4gICAgICAgIDQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk2LFxuICAgICAgICA1LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDUyLFxuICAgICAgICA2MixcbiAgICAgICAgNDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5MyxcbiAgICAgICAgODksXG4gICAgICAgIDE4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDMwLFxuICAgICAgICA0NixcbiAgICAgICAgMjE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDMzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkzLFxuICAgICAgICAzMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI1LFxuICAgICAgICAzLFxuICAgICAgICAxODAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNixcbiAgICAgICAgMjIzLFxuICAgICAgICA3MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODksXG4gICAgICAgIDM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU4LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDcsXG4gICAgICAgIDY3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDU1LFxuICAgICAgICA1NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzOSxcbiAgICAgICAgODQsXG4gICAgICAgIDQyLFxuICAgICAgICA0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICA3NixcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxODgsXG4gICAgICAgIDc0LFxuICAgICAgICA1NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDcxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDYxLFxuICAgICAgICAzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkyLFxuICAgICAgICA4NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDYzLFxuICAgICAgICA4MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJwYzhIRGt4MFdwL3d5dGQxcmJNcUlXUE1lVk5obHlhcGZEVkdPbm5VS08wPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5dGhRY2F0VlFyS3V3d2xqQnRiYW1nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBmMmViNWNiLTA0Y2EtNDBjYS04ZmNlLTI4MDg4ZWJmNDY0MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NyxcbiAgICAgIDUzLFxuICAgICAgMjE0LFxuICAgICAgMzYsXG4gICAgICA1MixcbiAgICAgIDE0LFxuICAgICAgNTcsXG4gICAgICAxODEsXG4gICAgICAxNjEsXG4gICAgICA5LFxuICAgICAgMTQ5LFxuICAgICAgMTk1LFxuICAgICAgMTU0LFxuICAgICAgMjUsXG4gICAgICAxNTksXG4gICAgICAxODUsXG4gICAgICAyOCxcbiAgICAgIDEwLFxuICAgICAgMjUyLFxuICAgICAgMjE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MSxcbiAgICAgIDExNyxcbiAgICAgIDczLFxuICAgICAgMjIyLFxuICAgICAgNjYsXG4gICAgICAyMTcsXG4gICAgICAyMTksXG4gICAgICAxMDcsXG4gICAgICAxNDcsXG4gICAgICAyMzAsXG4gICAgICAyMTQsXG4gICAgICAyNDksXG4gICAgICAxNjMsXG4gICAgICAyMDgsXG4gICAgICAxMTUsXG4gICAgICAyMTIsXG4gICAgICAyNSxcbiAgICAgIDY5LFxuICAgICAgMTE0LFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBQRjZDUFBWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTgxNTkwNDk0ODU6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI5Njk5NjkwODcyODkxOjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4Ka44Ka+IOCmpeCngD4+M/CfpbninaTigI3wn6m58J+MjvCflofvuI/wn4y74pyoXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTZMOHNFSEVLT3Z0TFVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2N0EzWnlMeDIyYXd1VFc3U2NiK2dYN3NPZ1VNZmtCMHVqUVdpNnpldHp3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImdoa2RVcFdlT25SZXVPS1I2dVFmQmtZK2p6K2ZoVXNNb2NRSUtydC9IVXZJanJGODRSaGIrd0JuZEJqTzNvcEtvdzR2WlRmSUN6dVpiTUJ2V1VackRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1nekVyN3AzbGJ3a2wyRFB3T2JoNHprMW9uTTZPdXNuSmZxR0QvZlZXMkZKUmVORkYzWjd1Y0p2ZWRLSWpuRUp0QnNHRDRTVEZDNmxOUkZpOWFOV2hRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODE1OTA0OTQ4NToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjE5ODE2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRVBTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFUFMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0ZUpvV1ArcVBENEl6dVBDNHRSNXg5cnVnc0pyaTAzSWNaeThlWWRpVzQwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMTcyMzIzMzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjIwNjE5NDUyMlwifSIKfQ=="  // PUT your SESSION_ID 


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
