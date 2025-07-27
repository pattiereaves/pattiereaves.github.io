module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "next/core-web-vitals"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react/no-unescaped-entities": "off"
    },
    "globals": {
        "React": "writable"
    },
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}