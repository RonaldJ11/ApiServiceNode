const { Router, response } = require('express');
const router = Router();

const subjects = require('../subjects.json');

const _ = require('underscore');

router.get('/', (req, res) => {
    res.json(subjects);
})

router.post('/', (req, res) => {
    const { id, name, information } = req.body
    if (id && name && information) {
        const subject = {...req.body };
        console.log(subject);
        subjects.push(subject);
        res.json(subjects);
    } else {
        res.status(500).json({ error: 'Faltan datos en el objeto.' });
    }
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(subjects, (subject, i) => {
        if (subject.id == parseInt(id)) {
            subjects.splice(i, 1);
        }
    });
    res.json(subjects);
})

router.put('/:ids', (req, res) => {
    const { ids } = req.params;
    const { id, name, information } = req.body

    if (id && name && information) {
        const objs = {...req.body };
        _.each(subjects, (subject, i) => {
            console.log(objs);
            if (subject.id == parseInt(ids)) {
                subjects[i] = objs
            }
        });
        res.json(subjects);
    } else {
        res.status(500).json({ error: 'Faltan datos en el objeto.' });
    }
})

module.exports = router;