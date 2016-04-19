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

## Internals

### Includes dependencies calculation

### Call graph estimation

### Components doc generation
`[components] -> [cf metadata] -> [json] -> [md] -> [html]`

##### cf
Extracts components metadata using `getComponentMetadata` function and converts it to json.

##### node
Process a json component metadata file and generates MD or HTML (not defined yet).
