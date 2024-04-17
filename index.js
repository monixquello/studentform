document.getElementById('mybutton').addEventListener('click', function() {
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');

    var formContainer = document.createElement('div');
    formContainer.classList.add('overlay-content');
    formContainer.innerHTML = `
        <button id="closeBtn" class="btn-close" aria-label="Close"></button>
        <div class="card mycard" style="width: 25rem;">
            <div class="card-body">
                <p class="card-text">
                    <form>
                        <div class="mb-3">
                        <label for="firstname" class="form-label table-label">First Name</label>
                        <input type="text" class="form-control" id="firstname">
                        </div>
                        <div class="mb-3">
                        <label for="lastname" class="form-label  table-label">Last Name</label>
                        <input type="text" class="form-control" id="lastname">
                        </div>
                        <div class="mb-3">
                        <label for="subject" class="form-label  table-label">Subject</label>
                        <input type="text" class="form-control" id="subject">
                        </div>
                        <button type="submit" class="btn" id="submit">Submit</button>
                    </form>
                </p>
            </div>
        </div>
        
    `;

    overlay.appendChild(formContainer);
    document.body.appendChild(overlay);

    

    document.getElementById('closeBtn').addEventListener('click', function() {
        overlay.remove();
    });
});



    // form submission
// document.getElementById('submit').addEventListener('click', function() {});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        const firstName = document.getElementById('firstname').value;
        const lastName = document.getElementById('lastname').value;
        const subject = document.getElementById('subject').value;

        
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <th scope="row">${document.querySelectorAll('.mytable tbody tr').length + 1}</th>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${subject}</td>
        `;

        
        document.querySelector('.mytable tbody').appendChild(newRow);

        
        form.reset();
    });
});
