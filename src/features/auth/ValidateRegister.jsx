import Joi from 'joi'
import message from '../../variables/message'

// .email({ tlds: false }) จะทำให้ไม่ error

const variables = message()

const registerSchema = Joi.object({
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    username: Joi.string().trim().required(),
    emailOrMobile: Joi.alternatives([Joi.string().email({ tlds: false }), Joi.string().pattern(/^[0-9]{10}$/)])
        .required()
        .strip(),
    password: Joi.string()
        .pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])[a-zA-Z0-9#?!@$%^&*-]{6,}$/)
        .trim()
        .required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).trim().required().strip(),
    mobile: Joi.forbidden().when('emailOrMobile', {
        is: Joi.string().pattern(/^[0-9]{10}$/),
        then: Joi.string().default(Joi.ref('emailOrMobile'))
    }),
    email: Joi.forbidden().when('emailOrMobile', {
        is: Joi.string().email({ tlds: false }),
        then: Joi.string().default(Joi.ref('emailOrMobile'))
    }),
    birthDate: Joi.string().trim().allow(null, ''),
    gender: Joi.string().trim().allow(null, ''),
})

const validateRegister = input => {
    const { error } = registerSchema.validate(input, { abortEarly: false })
    if (error) {
        const result = error.details.reduce((acc, el) => {
            const { message, path } = el
            acc[path[0]] = message
            return acc
        }, {})
        console.log(result)
        if (result.password === variables.passwordPattenCondition(input.password)) {
            result.password = variables.passwordPattenMessage
        }
        return result
    }
}


export default validateRegister