
window.addEventListener("load", () => {
    const todotaskform = document.querySelector("#todotaskform");
    const todotask = document.querySelector("#todotask");
    const tasks = document.querySelector(".tasks")

    todotaskform.addEventListener("submit", (e) => {
        e.preventDefault();
        // console.log(todotask.value);
        // console.log("hii")

        const taskvalue = todotask.value;
        if (taskvalue === "") {
            alert("write something in To-Do")
        } else {
            const tasksdiv = document.createElement("div");
            tasksdiv.classList.add("task")

            const content = document.createElement("div");
            content.classList.add("content")

            tasksdiv.append(content);

            const inputfield = document.createElement("input");
            inputfield.type = "text";
            inputfield.value = taskvalue;
            inputfield.setAttribute("readonly", "readonly");
            content.append(inputfield);

            const editdeletetask = document.createElement("div");
            editdeletetask.classList.add("editdelete")

            const edit = document.createElement("i");
            edit.classList.add("fa-pencil");

            const deletetask = document.createElement("i");
            deletetask.classList.add("fa-trash");

            editdeletetask.append(edit);
            editdeletetask.append(deletetask);

            content.append(editdeletetask);

            edit.addEventListener("click", () => {
                if (edit.classList.contains("fa-pencil")) {
                    edit.classList.replace("fa-pencil", "fa-trash");
                    inputfield.removeAttribute("readonly");
                    inputfield.focus();
                } else {
                    edit.classList.replace("fa-trash", "fa-pencil");
                    inputfield.setAttribute("readonly", "readonly");
                }

            })

            deletetask.addEventListener("click", () => {
                tasksdiv.remove();
            })




            tasks.append(tasksdiv);
            // tasksdiv.append(content);
            todotask.value = "";

        }



    })
})