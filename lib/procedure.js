
export const newProcedureTemplate = {
    name: 'Nuevo Procedimiento',
    description: 'Describa aquí un resumen de qué se trata el procedimiento',
    tasks: []
}

export function newProcedure(props = {}) {
    return Object.assign({}, newProcedureTemplate, props);
}

export function addForm(procedure, props = {}) {
    let form = Object.assign({}, {
        id: null,
        type: 'form',
        title: 'Formulario sin título',
        descripcion: 'Edite esta descripción para explicar de qué se trata el formulario',
        who: {},
        fields: [],
        actionFormula: '',
        actions: [],
        valid: false
    }, props);
    form.id = _nextTasksId(procedure);
    procedure.tasks.push(form);
    return form;
}

export function addAction(procedure, props = {}) {
    let action = Object.assign({}, {
        id: null,
        type: 'action',
        action: null,
        params: [],
        rules: ''
    }, props);
    action.id = _nextTasksId(procedure);
    procedure.tasks.push(action)
    return action;
}

export function addFormField(form, props = {}) {
    // we assume that form is referenced by procedure
    let field = Object.assign({}, {
        id: `${form.id}${form.fields.length + 1}`,
        type: 'text',
        label: '',
        help: '',
        checks: [],
        showEditorFor: {
            id: false,
            type: true,
            label: true,
            help: false,
            checks: false
        }
    }, props);
    form.fields.push(field)
    return form;
}

export function invalidateTaskRules(task, props = {}) {
    // TODO
    throw new Error('NotImplemented invalidateTaskRules')
}

export function getTask(procedure, taskId) {
    return procedure.tasks.find(task => task.id == taskId);
}

export function getFormField(form, fieldId) {
    return form.fields.find(field => field.id == fieldId);
}

function _nextTasksId(procedure) {
    const tasksLen = procedure.tasks.length;
    if (tasksLen >= 1) {
        const lastId = procedure.tasks[tasksLen - 1].id
        let newId = lastId.substring(0, lastId.length - 1);
        newId += lastId[lastId.length - 1] === 'Z' ? 'AA' :
            String.fromCharCode(lastId.charCodeAt(lastId.length - 1) + 1)
        return newId;
    }
    return 'A'
}