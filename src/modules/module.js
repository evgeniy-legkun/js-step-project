// const getNameWithPrefix = function (name = 'Masha', pref) {
//   return name + ' ' + pref;
// };
//
// const someVariable = 30;
//
// const baseImport = {
//   name: 'Base export default',
//   gerName: function () {
//     return this.name;
//   },
//   getNameWithPrefix: getNameWithPrefix
// }
//
// export { getNameWithPrefix, someVariable as variable };
//
// export const name = 'Name';
//
// export default baseImport;

function GetNotebook(callBack) {
  setTimeout(()=> {callBack('notebook'),1000})
}
function GetAsus(callBack,notebook) {
  setTimeout(()=> {callback([...notebook,'asus']),1000})
}
// function GetAsus501a() {
//     return GetNotebook(function (notebook) {
//         return GetAsus(notebook, function (asus) {
//             return setTimeout(() => {
//                 const result =
//             })
//             }
//         )
//     })
// }