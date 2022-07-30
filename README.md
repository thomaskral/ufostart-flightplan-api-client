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
let flightplan

try {
    flightplan = await getFlightPlanByApiKey(yourUfostartApiKey)
} catch (error) {
    console.log(error)
}
```
or 
```js
const { getFlightPlanByApiKey } = require('ufostart-flightplan-api-client')

const yourUfostartApiKey = ''
const flightplan = getFlightPlanByApiKey(yourUfostartApiKey)
                    .then(response => response)
                    .catch(error => {
                        console.log(error)
                    })
```