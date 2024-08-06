# litmus-api-docs

## prerequisite

We need to build each child type of Query, Mutation, and Subscription as a parent type. <br>
In this case, I changed Query/Mutaion/Subscriptions to parent type in `chaos_infrastructure.graphqls` file.

Otherwise, we can see these errors.
```shell
Error: Cannot extend type "Query" because it is not defined.
Cannot extend type "Mutation" because it is not defined. Did you mean "Annotation" or "Invitation"?
Cannot extend type "Subscription" because it is not defined.
Unknown type "Query".
Unknown type "Mutation". Did you mean "Annotation" or "Invitation"?
Unknown type "Subscription".
    at assertValidSDL (/opt/homebrew/lib/node_modules/spectaql/node_modules/graphql/validation/validate.js:135:11)
    at buildASTSchema (/opt/homebrew/lib/node_modules/spectaql/node_modules/graphql/utilities/buildASTSchema.js:44:34)
    at makeExecutableSchema (/opt/homebrew/lib/node_modules/spectaql/node_modules/@graphql-tools/schema/cjs/makeExecutableSchema.js:73:47)
    at loadSchemaFromSDLFile (/opt/homebrew/lib/node_modules/spectaql/dist/spectaql/graphql-loaders.js:112:49)
    at buildSchemas (/opt/homebrew/lib/node_modules/spectaql/dist/spectaql/build-schemas.js:52:47)
    at run (/opt/homebrew/lib/node_modules/spectaql/dist/spectaql/index.js:58:78)
    at loadData (/opt/homebrew/lib/node_modules/spectaql/dist/index.js:566:10)
    at run (/opt/homebrew/lib/node_modules/spectaql/dist/index.js:339:65)
    at Object.<anonymous> (/opt/homebrew/lib/node_modules/spectaql/bin/spectaql.js:7:1)
    at Module._compile (node:internal/modules/cjs/loader:1504:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1588:10)
    at Module.load (node:internal/modules/cjs/loader:1282:32)
    at Module._load (node:internal/modules/cjs/loader:1098:12)
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:215:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:158:5)
    at node:internal/main/run_main_module:30:49
```

I think `graphql/validation/validate.js` couldn't generate with no-parent Query/Mutation/Subscription.

### how to build

1. install spectaQL
```shell
npm install -g spectaql
# OR
yarn global add spectaql
```
ref. https://github.com/anvilco/spectaql?tab=readme-ov-file

2. generate document with this cmd
```shell
npx spectaql config.yml
```