# Digital Currency Cordapp UI
Intended to work with https://github.com/amoothart/CSDE-cordapp-digital-currency

## How to use
 NPM Version 20.1.0
```
npm install
npm run build
npm run start
```

Application may complain about self-signed certs from the Corda Cluster. Using Chrome navigate to https://localhost:8888/api/v1/swagger# and proceed through the certificate warnings to resolve the security warning.

 Regenerate native Corda API: npx openapi -i .\src\data\corda-api-spec-v5beta2.json -o src/services/generatedCordaApi
