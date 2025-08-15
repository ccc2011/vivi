let cells = document.querySelectorAll(".editable");

cells.forEach(function(cell) {
    cell.addEventListener("dblclick", function() {
        // Create an input element
        let input = document.createElement("input");
        input.type = "text";
        input.value = this.textContent;
        this.textContent = "";
        this.appendChild(input);
        input.focus();

        // When the user presses Enter or clicks outside, save the new value
        input.addEventListener("blur", saveChanges);
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                saveChanges.call(this);
            }
        });

        function saveChanges() {
            let newText = input.value;
            let parentCell = input.parentElement;
            parentCell.textContent = newText;
        }
    });
});