const { Router } = require("express")
const router = Router();

const students = require('../students.json');

const _ = require('underscore');

router.get('/', (req, res) => {
    res.json(students);
})

router.post('/', (req, res) => {
    const { id, name, lastname, info } = req.body;


    if (id && name && lastname, info) {
        subjects = [];
        state = true;
        const studentObj = {...req.body, state, subjects };
        console.log(studentObj);

        students.push(studentObj);
        res.json(students);
    } else {
        res.status(500).json({ error: 'Faltan datos en el objeto.' });
    }
})

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const objs = {...req.body };
    _.each(students, (subject, i) => {
        if (subject.id == parseInt(id)) {
            subject.state = !subject.state;
        }
    });
    res.json(students);
})

router.post('/:id', (req, res) => {
    const { id } = req.params;
    const objs = {...req.body };
    _.each(students, (subject, i) => {
        if (subject.id == parseInt(id)) {
            subject.subjects.push(objs)
        }
    });
    res.json(students);
})


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(students, (subject, i) => {
        if (subject.id == parseInt(id)) {
            students.splice(i, 1);
        }
    });
    res.json(students);
})

router.put('/:ids', (req, res) => {
    const { ids } = req.params;
    const { id, name, information } = req.body

    if (id && name && information) {
        const objs = {...req.body };
        _.each(students, (subject, i) => {
            console.log(objs);
            if (subject.id == parseInt(ids)) {
                students[i] = objs
            }
        });
        res.json(students);
    } else {
        res.status(500).json({ error: 'Faltan datos en el objeto.' });
    }
})




module.exports = router;