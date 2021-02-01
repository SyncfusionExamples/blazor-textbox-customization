var textBoxInstance;
window.validateTextBox = function (elementRef) {
    var element = document.getElementById(elementRef.id);
    textBoxInstance = elementRef;
    element.addEventListener('keydown', function (e) {
        if ((e.keyCode === 8 || e.keyCode === 46 || (e.keyCode >= 37 && e.keyCode <= 40))) {
            return
        }
        if (textBoxInstance.textCase == 0) {
            if (!/[A-Z]/.test(e.key)) {
                e.preventDefault()
                return false
            }
        }
        if (textBoxInstance.textCase == 1) {
            if (!/[a-z]/.test(e.key)) {
                e.preventDefault()
                return false
            }
        }
        if (!textBoxInstance.allowSpaces) {
            if (e.keyCode == 32) {
                e.preventDefault()
                return false
            }
        }
        if (!textBoxInstance.allowSpecialCharacters) {
            if (!/[a-z]|[A-Z]|[0-9]/.test(e.key)) {
                e.preventDefault()
                return false
            }
        }
        if (textBoxInstance.valueType == 1) {
            if (!/[0-9]/.test(e.key)) {
                e.preventDefault()
                return false
            }
        }
        if (textBoxInstance.valueType == 2) {
            if (!/[a-z]|[A-Z]/.test(e.key)) {
                e.preventDefault()
                return false
            }
        }
    }, false);
}