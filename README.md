# cf-code-metrics
ColdFusion code metrics based on static analysis

## Features
* Static HTML generation
* Documentation generation for cfc components
* Includes dependencies visualization
* Call graph, visualization of function calls
* Contributors list based on GitHub repository commit history
* Datasources
* Stored procedures used by component

## Use mode
1. Initialize a directory: `node cf-code-metrics init`
2. Define GitHub repository path and application URL
3. Generate documentation:: `node cf-code-metrics`

### command line for async/await support 
```
node --harmony-async-await index.js gen-bulk ./test-data/source/ ./test-data/target
```

## Internals

### phase 1
Extracts components and pages
### phase 2
Calculates metrics crossing components and pages to extract:
* sps
* queries
* includes
* datasources

### Includes dependencies calculation

### Call graph estimation

### Components doc generation
`[components] -> [cf metadata] -> [json] -> [html]`

##### cf
Extracts components metadata using `getComponentMetadata` function and converts it to json.

##### node
Process a json component metadata file and generates HTML using handlebars template engine.

## project structure
```.
├── assets
│   └── js
│       ├── template-helpers
│       └── templates
├── cf-doc
│   └── assets
├── docs
│   ├── html
│   │   └── assets
│   └── md
├── lib : source code
├── node_modules
├── projects
│   └── paris
├── templates
│   └── like-elixir-doc
├── test
│   ├── analyzer
│   │   └── data
│   │       ├── cfml-comments
│   │       ├── circular-cfinclude
│   │       ├── empty-dir
│   │       ├── html-comments
│   │       ├── ignore-non-supported-files
│   │       ├── js-comments
│   │       ├── simple-cfinclude
│   │       └── subdirectories
│   │           └── dirA
│   │               └── dirAA
│   └── util
└── www
    └── cf-doc
```

### how to use it?
```
npm install
node --harmony-async-await index.js gen-bulk ./test-data/source/ ./test-data/target
```
