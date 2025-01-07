import fileApiClient from "./fileInterceptor"

export const submitForm = async (formData)=>{
    const res = await fileApiClient.post('/form/submit',formData)
    return res
}