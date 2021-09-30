module.exports = {
   extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
   rules: {
      indent: ['error', 3],
      'vue/html-indent': ['error', 3, { attribute: 3, closeBracket: 3 }],
      'vue/html-self-closing': [
         'error',
         {
            html: {
               void: 'always'
            }
         }
      ]
   }
};
