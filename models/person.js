const mongoose = require("mongoose")
const {
    Schema
} = mongoose

let PersonSchema = new Schema({
    "info": {
        "name": {
            "type": "String"
        },
        "birthday": {
            "type": "Date"
        },
        "education": {
            "university": {
                "dept": {
                    "type": "String"
                },
                "faculty": {
                    "type": "String"
                },
                "main": {
                    "type": "String"
                },
                "sub": {
                    "type": "String"
                }
            },
            "high_school": {
                "type": "String"
            }
        }
    },
    "lifestyle": {
        "type": [
            "String"
        ]
    },
    "interesting": {
        "type": [
            "String"
        ]
    },
    "skills": {
        "backend": {
            "basic": {
                "type": [
                    "String"
                ]
            },
            "intermediate": {
                "type": "Array"
            },
            "expert": {
                "type": "Array"
            }
        },
        "frontend": {
            "basic": {
                "type": [
                    "String"
                ]
            },
            "intermediate": {
                "type": [
                    "String"
                ]
            },
            "expert": {
                "type": [
                    "String"
                ]
            }
        },
        "other": {
            "basic": {
                "type": [
                    "String"
                ]
            },
            "intermediate": {
                "type": [
                    "String"
                ]
            },
            "expert": {
                "type": [
                    "String"
                ]
            }
        }
    },
    "story": {
        "type": "String"
    },
    "working_exp": {
        "type": [
            "Mixed"
        ]
    }
}, {
    collection: "sitedata"
});

module.exports = mongoose.model('person', PersonSchema)