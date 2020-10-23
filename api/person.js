const router = require('express').Router()
const Person = require("../models/person")

router.get("/api/person", async (req, res, next) => {
    try {
        await Person.find({}).then((result) => {
            console.log("result", result);
            res.status(200).json(result)
        })
    } catch (err) {
        next(err)
    }
})

router.put("/api/update", async (req, res, next) => {
    const payload = req.body

    // const updated = await Person.findByIdAndUpdate(
    //     "5f9321de96e52eefe853a4fd", {
    //         $set: payload
    //     }
    // )

    const update = await Person.updateOne({
        "_id": "5f9321de96e52eefe853a4fd"
    }, {
        $set: payload
    })
    res.json({
        "msg": "Update Complete"
    })
})

module.exports = router