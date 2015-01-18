# npmwd

Open the npm package URL that matches your shell's current working directory.

## Install it

```sh
npm install npmwd --global
```

## Use it

```sh
cd my-package
npmwd
# https://npmjs.com/package/my-package
```

## Use it faster

Put this in your `.bashrc` or your `.zshrc` or whatever:

```sh
alias n=npmwd
```
