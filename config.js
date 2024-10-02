const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://wa.me/+919331218857";
global.website=process.env.GURL || "https://wa.me/+919331218857" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "919331218857";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919331218857";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_35_10_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzLFxuICAgICAgICAxODksXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgODksXG4gICAgICAgIDE1NixcbiAgICAgICAgODYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgODcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA2MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgODUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTczLFxuICAgICAgICAxMixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxLFxuICAgICAgICAyOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDg1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTksXG4gICAgICAgIDkwLFxuICAgICAgICAyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDYwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg1LFxuICAgICAgICAxOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDksXG4gICAgICAgIDgzLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICAzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDU2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDM2LFxuICAgICAgICAzMixcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMTAyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgyLFxuICAgICAgICAzNyxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjksXG4gICAgICAgIDg1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid0UzR0t5SVNkR096RkNSWTVvVkNCdmMwdWswbTJRMjJ2S0N4TDAzdXE4RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSUlLbU5Uem1RSVNOcThoeXU0QURLd1wiLFxuICBcInBob25lSWRcIjogXCJkYWMxMDJiMi1mZGNjLTQ5NDMtYmIyZC02OWIxMjM2Y2VjNzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg5LFxuICAgICAgMTg0LFxuICAgICAgMjQyLFxuICAgICAgOTYsXG4gICAgICAyMzAsXG4gICAgICAxMDQsXG4gICAgICA3NSxcbiAgICAgIDEyNyxcbiAgICAgIDI1NCxcbiAgICAgIDIwNyxcbiAgICAgIDE5MCxcbiAgICAgIDY4LFxuICAgICAgNjUsXG4gICAgICAxODMsXG4gICAgICAzNixcbiAgICAgIDIxMCxcbiAgICAgIDgwLFxuICAgICAgMjQ0LFxuICAgICAgNTUsXG4gICAgICAyMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAzLFxuICAgICAgMjMyLFxuICAgICAgNjIsXG4gICAgICAxNjQsXG4gICAgICAzOCxcbiAgICAgIDE5MCxcbiAgICAgIDIxNCxcbiAgICAgIDIyOCxcbiAgICAgIDI5LFxuICAgICAgMTY1LFxuICAgICAgMTYzLFxuICAgICAgMTQ3LFxuICAgICAgMTg3LFxuICAgICAgODEsXG4gICAgICAyMzUsXG4gICAgICA4MCxcbiAgICAgIDEzMixcbiAgICAgIDM5LFxuICAgICAgMjI3LFxuICAgICAgMTM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlEzNEhTSEhZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTkzMzEyMTg4NTc6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNjUxMDA4MTE1OTIyMTozMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYTR0OFlIRUpiZDlyY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlhvaC9tbjB3V0hzRTErZ1dZK2lORHBPbGVqeWdodlpjMCsrYXYyNkZrUmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUnBINmtLSkE1NHNORUNiRk9zODk3OE0rT1U1T0luekNFUmZIbnNYMy83MGJucjlWallSUkhVelNHM3FFTUNsdi9MM2JBbklBWDZIc0xwbG9iWG5zRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMExFajRqZkdGaGJqZHMxN2NPUjhaWGpBWVhDTGtZWjFnYmV1bXh6czBNKzJvRTMrcUJDSXN4R2IxVXo5eG5vRTIyOFRZWlE5dXRJbEhIVTgveHBuRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5MzMxMjE4ODU3OjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzkwMTMzOFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "Text me: +919331218857" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝐊𝐢𝐧𝐠 𝐀𝐯𝐢𝐫𝐮𝐩",
  packname: process.env.PACK_NAME || "Avirup",
  botname : process.env.BOT_NAME  || "𝐀𝐯𝐢𝐫𝐮𝐩 𝐦𝐮𝐬𝐢𝐜 𝐛𝐨𝐭",
  ownername:process.env.OWNER_NAME|| "𝐀𝐯𝐢𝐫𝐮𝐩",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
