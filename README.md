# QuickFiles

Commands for opening specific files, particularly useful for configuring keyboard shortcuts.

## Features

- `quickfiles.openFile` - Open a specific file
- `quickfiles.openKeywordFile` - Open a file using a keyword from settings. See **Extension Settings** section for settings config
  - This helps with keyboard shortcuts, since they're configured per-user, not per-workspace. If you want `ctl-t` to open your TODO list, but have different files per project, you can bind the keyboard shortcut to the `todo` keyword, then bind the keyword to different files in your per-workspace settings.

### Path substitution

The following variables are supported in file paths:

- `${workspaceFolder}`

## Extension Settings

- `quickfiles.keywordFiles` - array of keyword file objects, which have the following properties
  - `keyword`
  - `file`

### Example

```
  "quickfiles.keywordFiles": [
    {
      "keyword": "readme",
      "file": "${workspaceFolder}/README.md"
    },
    {
      "keyword": "todo",
      "file": "${workspaceFolder}/Todo.md"
    },
  ]
```

## Release Notes

### 1.0.0

Initial release
