const fs = require('fs') // file system
const path = require('path')

// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//   if (err) throw new Error(err)
//
//   console.log('pkpa')
// })

const myNotesPath = path.join(__dirname, 'notes', 'myNotes.txt')
// fs.writeFile(
//   myNotesPath,
//   'Hello world',
//   err => {
//     if (err) throw new Error(err)
//
//     console.log('филе рыбы');
//
//     fs.appendFile(
//       myNotesPath,
//       ' from Talek',
//       err => {
//         if (err) throw new Error(err)
//         console.log('Филе испеклось')
//
//         fs.readFile(
//           myNotesPath,
//           'utf-8',
//           (err, data) => {
//             if (err) throw new Error(err)
//
//             console.log(Buffer.from(data).toString())
//           }
//         )
//       }
//     )
//   }
// )

// callback hell виходить якийсь

//=======

const myNotesPathNew = path.join(__dirname, 'notes', 'Notes.txt')

fs.rename(
  myNotesPath,
  myNotesPathNew,
  err => {
    if (err) throw new Error(err)

    console.log('филе курицы')
  }
)