import UserModal from '../models/userModal.js'


const likeQuotes = async (req, res, next) => {
    try {
        const { email, quotes } = req.user

        const verify = quotes.some((obj) => obj._id === req.body._id)

        if (verify) return res.status(409).send({ status: 'error', message: "something wrong, Conflict", success: false })

        quotes.push(req.body)

        const updatedUser = await UserModal.findOneAndUpdate(
            { email: email }, {
            $set: {
                quotes
            }
        }, { new: true })

        res.status(200).json({ success: true })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ status: 'error', message: "Some Thing wrong on Server", success: false })
    }
}

const dislikeQuotes = async (req, res, next) => {
    try {
        const { email, quotes } = req.user

        const verify = quotes.some((obj) => obj._id === req.body._id)

        if (!verify) return res.status(409).send({ status: 'error', message: "something wrong, Conflict", success: false })

        const newquotes = quotes.filter((ele) => ele._id !== req.body._id)

        const updatedUser = await UserModal.findOneAndUpdate(
            { email: email }, {
            $set: {
                quotes: newquotes
            }
        }, { new: true })

        res.status(200).json({ success: true })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ status: 'error', message: "Some Thing wrong on Server", success: false })
    }
}


export { likeQuotes, dislikeQuotes }