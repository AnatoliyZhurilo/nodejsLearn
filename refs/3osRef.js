const os = require('os')

// Платформа
console.log(os.platform());
// Архитектура
console.log(os.arch());

// Інфа про ядра процесора
console.log(os.cpus());

// Вільно пам'яті
console.log(os.freemem());

//Всього пам'яті
console.log(os.totalmem());

// Корнева директорія
console.log(os.homedir());

// Час в мс
console.log(os.uptime());