# wc3-ts-template

Created using https://github.com/triggerhappy187/wc3-ts-template

Transpiled using https://github.com/VADIMREX/JassToTs

Source map from http://max.slid.free.fr/maxEscapeCreation

Hamiltonian path generator source from https://github.com/oysterCrusher/hampath (Edited to make it work in this project)

# Some TS notes

Don't create array objects as `let a = [0, 1]`, instead use `let a = {x: 0, y: 1}`

Don't loop through an array and use the key to index the array again, the transpiler always adds a +1 to the key, if the key already matches the exact index then it'll go wrong.

```ts
;[].map(item, key, () => {
    item[key]
})
```

Don't use `?.`, optional chaining is not supported by the transpiler

# Some notes on the transpiler

The transpiler doesn't understand that "\\\\" is a valid string and throws an error, I replaced this with @@@@ (something unique) transpiled it and then replaced it back in the transpiled code.

Minimized code produces code like `var a+=-5`. This transpiler thinks `+=-` is an operator so to solve this just string replace `+=-` to `+= -`. Goes for other operators as well.

# Some notes on the transpiled code

## new is reserved keyword

```lua
new: string
```

becomes

```lua
newV: string
```

## can't string concatinate on nil

```lua
outputStr = (outputStr) .. char
```

becomes

```lua
outputStr = (outputStr or "") .. char
```

## Substring behaves differently in Jass than Lua

```lua
-- TRANSPILER FIX
local oldSubString = SubString
SubString = function(source, start, _end)
    if start > StringLength(source) then
        return nil
    end
    local result = oldSubString(source, start, _end)
    return result
end
```
