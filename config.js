/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')
//----------//
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = true //status auto mengetik (auto typing)
global.available = true //status online (online)
global.autred = true //status auto read ( auto read ) 
// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.ownername = '𝐃𝐘𝐗𝐓𝐙-𝐌𝐎𝐃𝐙ぅ'
// Other
global.owner = ['6282111238631','6282192533115']
global.region = 'Indonesia'
global.premium = ['6282192533115']
global.packname = '𝐃𝐘𝐗𝐓𝐙-𝐌𝐎𝐃𝐙ぅ'
global.author = 'WhatsApp Bot'
global.wlcm = []
global.sessionName = './src/session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Admin Dulu Dek!!!',
    botAdmin: '𝐀𝐝𝐦𝐢𝐧𝐢𝐧 𝐃𝐮𝐥𝐮 𝐊𝐨𝐧𝐭𝐨𝐥🥴',
    owner: 'Fitur Khusus Owner',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '𝐓𝐮𝐧𝐠𝐠𝐮 𝐃𝐞𝐤𝐤𝐤...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/jo.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
