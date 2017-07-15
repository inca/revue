# Re:Vue

Brief re-introduction of [Vue.js](https://vuejs.org/)

## Usage

```
yarn install
yarn run dev
open http://localhost:8000
```

This tiny app browses commits from GitHub, so you'll need to authenticate.

1. Create a [GitHub token](https://github.com/settings/tokens) with following scopes:

    - public_repo
    - read:user
    - repo:status

2. Open DevTools and type:

    ```
    localStorage.token = 'PASTE_YOUR_TOKEN_HERE'
    ```

3. Refresh and enjoy :tada:
