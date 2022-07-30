const axios = require('axios').default
const baseUrl = 'https://api.ufostart.com'
const axiosConfig = {
    responseType: 'json',
    headers: {
        origin: '*',
        'X-API-KEY': ''
    }
}

const setApiKey = (apiKey) => {
    axiosConfig.headers['X-API-KEY'] = apiKey
}

const getCompanyId = async () => {
    const endpointPath = '/users/current'
    return (await axios.get(baseUrl + endpointPath, axiosConfig))?.data?.spaceship_id ?? null
}

const getCompanyGoalId = async (companyId) => {
    const endpointPath = `/spaceships/${companyId}/goals?limit=20&offset=0`
    return (await axios.get(baseUrl + endpointPath, axiosConfig))?.data?.records[0]?.id ?? null
}

const getFlightPlan = async (companyId, goalId) => {
    const endpointPath = `/spaceships/${companyId}/goals/${goalId}/results?limit=200&offset=0`
    return (await axios.get(baseUrl + endpointPath, axiosConfig))?.data ?? null
}

const getFlightPlanByApiKey = async (apiKey) => {
    setApiKey(apiKey)
    const companyId = await getCompanyId()
    return await getFlightPlan(companyId, await getCompanyGoalId(companyId))
}

module.exports = {
    setApiKey,
    getCompanyId,
    getCompanyGoalId,
    getFlightPlan,
    getFlightPlanByApiKey
}