# `bdd-dictionary-generator`

The `bdd-dictionary-generator` is a utility to aid the in the discoverability of cucumber step definitions.
It is a lightweight module that creates a Markdown report of the step definitions found in the given directory.

## Installing

Using yarn:

```
$ yarn add cucumber-steps-dictionary-generator
```

## Usage

```
$ bdd-dictionary-generator -p ./step-definitions -f markdown
```

By default, the module search for step files in the current directory
and generates the dictionary in the same place in Markdown.

```
$ bdd-dictionary-generator
```

## CLI Options

```
$ bdd-directory-generator --help
```
