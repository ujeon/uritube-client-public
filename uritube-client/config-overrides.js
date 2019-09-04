const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
<<<<<<< HEAD
    style: 'css',
=======
>>>>>>> 1da1e15a39bd868e9acc94d41342e55f7e1b5ee8
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' }
  })
);
