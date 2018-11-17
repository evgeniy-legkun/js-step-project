const getNameWithPrefix = function (name = 'Masha', pref) {
  return name + ' ' + pref;
};

const someVariable = 30;

const baseImport = {
  name: 'Base export default',
  gerName: function () {
    return this.name;
  },
  getNameWithPrefix: getNameWithPrefix
}

export { getNameWithPrefix, someVariable as variable };

export const name = 'Name';

export default baseImport;