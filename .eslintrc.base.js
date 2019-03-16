module.exports = {
    "extends": [
        "standard",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint",
        "prettier/react",
        "prettier/standard"
    ],
    "parserOptions": {
        "ecmaVersion": 2018,
        // Can I remove these now?
        "ecmaFeatures": {
        "impliedStrict": true,
        "classes": true
        }
    },
    "env": {
        "browser": true,
        "node": true,
        "jquery": true,
        "jest": true
    },
    "plugins": [
        "prettier",
        "react",
        "react-hooks",
        "standard"
    ],
    "rules": {
        "no-debugger": 0,
        "no-alert": 0,
        "no-await-in-loop": 0,
        "no-return-assign": [
          "error",
          "except-parens"
        ],
        "no-restricted-syntax": [
          2,
          "ForInStatement",
          "LabeledStatement",
          "WithStatement"
        ],
        "no-unused-vars": [
          1,
          {
            "ignoreSiblings": true,
            "argsIgnorePattern": "res|next|^err"
          }
        ],
        "prefer-const": [
          "error",
          {
            "destructuring": "all",
          }
        ],
        "arrow-body-style": [
          2,
          "as-needed"
        ],
        "no-unused-expressions": [
          2,
          {
            "allowTaggedTemplates": true
          }
        ],
        "no-param-reassign": [
          2,
          {
            "props": false
          }
        ],
        "no-console": 0,
        "import/prefer-default-export": 0,
        "import": 0,
        "func-names": 0,
        "space-before-function-paren": 0,
        "comma-dangle": 0,
        "max-len": 0,
        "import/extensions": 0,
        "no-underscore-dangle": 0,
        "consistent-return": 0,
        "quotes": [
            2,
            "single",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        "prettier/prettier": [
            "error",
            {
                "trailingComma": "es5",
                "singleQuote": true,
                "printWidth": 80,
            }
        ],
        "radix": 0,
        "no-shadow": [
            2,
            {
                "hoist": "all",
                "allow": [
                    "resolve",
                    "reject",
                    "done",
                    "next",
                    "err",
                    "error"
                ]
            }
        ],
    }
};