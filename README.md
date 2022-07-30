# UFOstart flightplan api client

## Install
```sh
yarn add ufostart-flightplan-api-client
```
or
```sh
npm i ufostart-flightplan-api-client
```

## Usage
```js
import { getFlightPlanByApiKey } from 'ufostart-flightplan-api-client'

const yourUfostartApiKey = ''
const flightplan = await getFlightPlanByApiKey(ufostartApiKey)
```